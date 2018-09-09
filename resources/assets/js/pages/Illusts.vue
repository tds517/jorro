<template>
  <el-container>
    <!-- Search -->
    <el-header height="auto">
      <el-row>
        <el-col :xs="1" :sm="2" :md="3">&nbsp;</el-col>

        <!-- Search Conditions -->
        <el-col :xs="22" :sm="20" :md="18" id="conditions">
          <i class="fa fa-fw fa-comment"></i> {{ searchWord }}
          /
          <i class="fa fa-fw fa-sort"></i> {{ searchOrder }}
          /
          <i class="fa fa-fw fa-tags"></i>
          <span v-for="tagName in enabledTags">
            [{{ tagName }}]&nbsp;
          </span>
        </el-col>

        <!-- Search Button, Search Dialog -->
        <el-col :xs="1" :sm="2" :md="3">
          <el-button round plain type="primary" @click="enabledSearch = true" size="medium">
            <i class="fa fa-fw fa-search"></i>
          </el-button>

          <el-dialog
              title="Search"
              :visible.sync="enabledSearch">
            <el-form label-width="40px" label-position="left">
              <!-- Search Word -->
              <el-form-item>
                <span slot="label">
                  <i class="fa fa-fw fa-comment"></i>
                </span>
                <el-input v-model="searchWord"
                    placeholder="キーワードを入力"
                    suffix-icon="el-icon-search"
                    :clearable="true"
                    />
              </el-form-item>

              <!-- Search Sort -->
              <el-form-item>
                <span slot="label">
                  <i class="fa fa-fw fa-sort"></i>
                </span>
                <el-switch v-model="searchOrder"
                    id="search-order"
                    :active-text="order.new"
                    :active-value="order.new"
                    :inactive-text="order.old"
                    :inactive-value="order.old"
                    active-color="var(--red)"
                    />
              </el-form-item>

              <!-- Search Tags -->
              <el-form-item>
                <span slot="label">
                  <i class="fa fa-fw fa-tags"></i>
                </span>
                <span v-for="(tagName, index) in tags" :key="index">
                  <span @click="checkTag(tagName)">
                    <el-tag :type="types[tagName]">{{ tagName }}</el-tag>
                    <input type="checkbox" v-model="enabledTags" :value="tagName"
                        v-show="false">
                  </span>
                </span>
              </el-form-item>
            </el-form>
          </el-dialog>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <!-- Illusts -->
      <el-row>
          <el-col :xs="11" :sm="7" :md="5" :offset="1" class="card"
              v-for="(item, index) in filteredIllusts" :key="item.id">
            <div @click="showImageDialog(item, index)"
                @mouseenter="displayFavs(index, true, item)"
                @mouseleave="displayFavs(index, false, item)">
              <el-card :body-style="{ padding: 0, position: 'relative' }">
                <input type="checkbox" v-show="false"
                    v-model="displayedFavs" v-bind:value="item">
                <transition name="el-zoom-in-top">
                  <span class="overlay" v-show="displayedFavs[index]">
                    <i class="fa fa-fw fa-star fav"></i><span v-text="item.sum_fav"></span>
                  </span>
                </transition>

                <img v-lazy="item.thumbnail_path" class="image">

                <div class="card__body">
                  <span v-html="item.title"></span>
                  <div class="bottom clearfix">
                    <time class="time">{{ item.date }}</time>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
      </el-row>

      <!-- Dialog -->
      <el-dialog id="dialog-image"
          :title="dialog.title"
          :visible.sync="dialog.visible"
          top="5vh"
          width="fit-content">

        <div slot="title">
          <pages-icon category="illusts"></pages-icon> {{ dialog.title }}
        </div>

        <div class="image__wrapper">
          <img :src="dialog.path" id="image__dialog" class="image"
              @load="imageLoaded(dialog.path)">
        </div>

        <div class="comment__wrapper">
          <p v-html="dialog.comment"></p>

          <p>
            <i class="fa fa-fw fa-star fav" @click="fav"></i>
            <span v-text="dialog.sum_fav"></span>
          </p>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>

import ILLUSTS from '../models/demodata/illusts'
// 並び順
const ORDER = {
  new: '新しい順',
  old: '旧い順'
}

export default {
  mounted() {
    for (let tagName of this.tags) {
      this.types[tagName] = 'info'
    }
    for (let illust of this.illusts) {
      illust.enabledOverlay = false
    }
  },
  data() {
    return {
      enabledSearch: false,
      searchWord: '',
      order: ORDER,
      searchOrder: ORDER.new,
      tags: ['狼と香辛料', 'ラグナロクオンライン', '落書き'],
      enabledTags: [],
      types: {},
      switchStyle: {
        color: '#939b9f',
        fontWeight: 200
      },
      illusts: ILLUSTS,
      displayedFavs: {},
      dialog: {
        comment: '',
        faved: false,
        index: 0,
        path: '',
        sum_fav: 0,
        title: 'Title',
        visible: false,
      }
    }
  },
  methods: {
    checkTag(tagName) {
      // チェック済み
      if (this.enabledTags.includes(tagName)) {
        // 有効タグから外す
        this.enabledTags.splice(this.enabledTags.indexOf(tagName), 1)
        this.types[tagName] = 'info'
      } else {
        // 有効タグに追加
        this.enabledTags.push(tagName)
        this.types[tagName] = 'default'
      }
    },
    displayFavs(key, enabled, item) {
      if (enabled) {
        this.$set(this.displayedFavs, key, item)
      }
      else {
        this.$delete(this.displayedFavs, key)
      }
    },
    imageLoaded(path) {
      let $img = $('#image__dialog')
      let img = new Image()
      img.src = path
      let width = img.width
      let height = img.height
      let parentWidth = $('#dialog-image .el-dialog__body').width()
      if (width > parentWidth) {
        $img.css('width', '100%')
      }
      else {
        $img.css('width', 'auto')
      }
    },
    showImageDialog(item, index) {
      this.dialog = {
        comment: item.comment,
        index: index,
        path: item.path,
        sum_fav: item.sum_fav,
        title: item.title,
        visible: true,
      }
    },
    fav() {
      // TODO: Up Fav
      let count = this.dialog.sum_fav + 1
      this.dialog.sum_fav = count
      this.illusts[this.dialog.index].sum_fav = count
    }
  },
  computed: {
    filteredIllusts() {
      return this.illusts.filter(elem => {
        return this.searchWord.toLowerCase()
               .split(/¥s+/)
               .map( w => elem.title.toLowerCase().indexOf(w) > -1
                     || elem.comment.toLowerCase().indexOf(w) > -1)
               .some( result => result === true)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";

.el-container {
  width: 100%;

  .el-header {
    padding-top: 16px;
  }
}

#conditions {
  color: $brand-base-color;
  padding-right: 12px;
  font-size: .8em;
  word-wrap: break-word;
}

.el-tag {
  cursor: pointer;
}

.el-switch__label {
  color: red;
}

// illust card
.card {
  flex-wrap: wrap;
  align-content: space-between;

  > div {
    cursor: pointer;
    margin-bottom: 24px;
  }

  .overlay {
    background-color: rgba(255, 255, 255, .5);
    color: #fff;
    font-size: 2em;
    font-weight: 400;
    height: 100%;
    padding-top: 50%;
    position: absolute;
    text-align: center;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, .5);
    vertical-align: middle;
    width: 100%;
    z-index: 1;

    .fav {
      font-weight: 100;
    }
  }

  .card__body {
    color: $brand-primary;
    font-weight: 400;
    padding: 8px;
  }

  .image {
    display: block;
    width: 100%;
  }

  .bottom {
    color: $brand-base-color;
    font-size: .8em;
    text-align: right;
  }
}

#dialog-image /deep/ {
  .el-dialog {
    max-width: 80%;

    .el-dialog__header {
      color: $brand-primary;
      font-weight: 400;
    }

    .el-dialog__body {
      padding-top: 0;
    }
  }
}

#dialog-image {
  .image__wrapper {
    text-align: center;
  }

  .image {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
    max-width: 800px;
    width: 100%;
  }

  .comment__wrapper {
    color: $text-color;
    font-weight: 400;

    .fav {
      color: $amber;
      cursor: pointer;
      font-size: 1.3em;
      font-weight: 100;
    }
  }
}

</style>
