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
          <i class="fa fa-fw fa-sort"></i> {{ enabledAsc }}
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
                <el-switch v-model="enabledAsc"
                    id="order"
                    active-text="新しい順"
                    active-value="新しい順"
                    inactive-text="旧い順"
                    inactive-value="旧い順"
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
            v-for="(item, index) in illusts" :key="item.id">
          <div @click="showImageDialog(item)"
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
          width="80%">

        <img :src="dialog.path" class="image">
        <div>
          <span v-html="dialog.comment"></span><br>
          <span v-html="dialog.sum_favs"></span>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>

import ILLUSTS from '../models/demodata/illusts'

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
      enabledAsc: '新しい順',
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
        path: '',
        sum_favs: 0,
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
    showImageDialog(item) {
      this.dialog = {
        title: item.title,
        visible: true,
        path: item.path,
        comment: item.comment,
        sum_favs: item.sum_favs
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";

.el-container {
  width: 100%;

  .el-header {
    // background-color: lighten($brand-base-color, 15%);
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
      // color: $amber;
      // text-shadow: 2px 2px 2px #fff;
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

#dialog-image {
  .image {
    display: block;
    width: 100%;
  }
}

</style>
