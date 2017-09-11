<template>
  <el-row>
    <el-col :xs="1"
            :sm="2"
            :md="3">
      <div>&nbsp;</div>
    </el-col>

    <el-col :xs="22"
            :sm="20"
            :md="18">

      <section class="notice">
        <h1>
          <i :class="['fa fa-fw', categories.notice.icon]"></i>
          {{ categories.notice.title }}
        </h1>
        <el-row>
          <el-col :span="3" :offset="1" class="card"
            v-for="(item, index) in notices" :key="item"
          >
            <a href="#"
              @mouseenter="doMaskImage(false, $event)"
              @mouseleave="doMaskImage(true, $event)"
            >
              <el-card :body-style="{ padding: 0, position: 'relative' }">
                <span class="card__header">
                  <pages-icon :category="item.category"></pages-icon>
                  {{ item.category }}
                </span>

                <div class="image-wrapper">
                  <img :src="item.thumbnail_path" class="image">
                </div>

                <div class="content">
                  <span class="message">{{ item.message }}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ item.date }}</time>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
        </el-row>
      </section>

      <section class="favorite">
        <h1>
          <i :class="['fa fa-fw', categories.favorite.icon]"></i>
          {{ categories.favorite.title }}
        </h1>
        <el-row>
          <el-col :span="3" :offset="1" class="card"
            v-for="(item, index) in notices" :key="item"
          >
            <a href="#"
              @mouseenter="doMaskImage(false, $event)"
              @mouseleave="doMaskImage(true, $event)"
            >
              <el-card :body-style="{ padding: 0, position: 'relative' }">
                <span class="card__header">
                  <pages-icon :category="item.category"></pages-icon>
                  {{ item.category }}
                </span>

                <div class="image-wrapper">
                  <img :src="item.thumbnail_path" class="image">
                </div>

                <div class="content">
                  <span class="message">{{ item.message }}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ item.date }}</time>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
        </el-row>
      </section>

    </el-col>

    <el-col :xs="1"
            :sm="2"
            :md="3">
      <div>&nbsp;</div>
    </el-col>

  </el-row>
</template>

<script>

import notices from '../models/demodata/notices'
import pages from './_settings'

// TODO: いずれは、お知らせ、お気に入り、履歴を一つのコンポーネントとしたい。
// タイトルと、データと、オプションをプロパティとして、動的に。
// TODO: コンテンツを色々変えてもいいかもしれない。
// 例えば、人気コンテンツや、最近見たもの、最近人気なもの、おすすめなど
export default {
    mounted() {
      // TODO: データの取得
    },
    data() {
      return {
        notices: notices,
        favorites: [],
        hisotries: [],
        categories: {
          notice:   { title: 'お知らせ', icon: 'fa-bell-o' },
          favorite: { title: 'お気にいり', icon: 'fa-heart-o' },
          top_rank: { title: '人気ランキング', icon: 'fa-trophy' }
        }
      }
    },
    methods: {
      doMaskImage(isMask, el) {
        let $img = $(el.target).find('.image')
        let opts = { duration: 500, ease: 'ease-out', queue: false};
        if (isMask) {
          Velocity($img, { blur: '3px' }, opts)
        } else {
          Velocity($img, { blur: '.1px' }, opts)
        }
      }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
  @import "../../sass/variables";

  .notice,.favorite {

    .card {
      min-width: 120px;

      a {
        text-decoration: none;
      }
    }

    .content {
      background-color: #fff;
      padding: 6px 4px 4px;
      z-index: 2;
    }

    .message {
      color: $text-color;
      font-size: .75em;
    }

    .time {
      color: #999;
      font-size: .6em;
    }

    .bottom {
      text-align: right;
    }

    .image-wrapper {
      filter: contrast(120%) sepia(50%);
    }

    .image {
      display: block;
      filter: blur(3px);
      width: 100%;
    }
  }

  .card__header {
    background-color: rgba(255, 255, 255, .3);
    color: #fff;
    padding: 4px;
    position: absolute;
    radius: 8px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .2);
    width: 100%;
    z-index: 1;
  }
</style>
