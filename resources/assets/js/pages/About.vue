<template>
  <el-row>
    <el-col :xs="1" :sm="2" :md="{offset: 2, span: 5}"
         class="side-menu" :style="{ top: getSideMenuTop }">
        <el-card header="MENU">
          <el-menu mode="vertical" default-active="0">
            <el-menu-item-group v-for="(article, index1) in articles"
                :key="article.title" :title="article.title">
              <el-menu-item v-for="(item, index2) in article.items"
                  :key="item.label" :index="getItemIndex(articles, index1, index2)"
                  v-scroll-to="item.to" class="capitalize">
                <i :class="['fa fa-fw', item.iconId]"></i>
                {{ item.label }}
              </el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-card>
    </el-col>
    <el-col :xs="22" :sm="20" :md="{offset:1 , span: 15}" class="content">

      <about-article about="illusts" :item="findArticleKey('illusts')">
        <p>製作したイラストや、頂いたイラストを展示しています。</p>
        <p>版権物のイラストは、1次創作者の許可を得たものではなく、同人要素を含みます。</p>
        <p>扱う作品やジャンルは、漫画・アニメ・オンラインゲームの2次創作、もしくはオリジナルとなります。</p>
        <p>その時話題のアニメや、特に以下の作品を多く描いています。</p>
        <ul>
          <li>狼と香辛料</li>
          <li>ラグナロクオンライン</li>
          <li>ニセコイ</li>
        </ul>
      </about-article>

      <about-article about="comics" :item="findArticleKey('comics')">
        <p>製作したマンガを展示しています。</p>
        <p>版権物のマンガも、イラスト同様に同人要素を含みます。</p>
        <p>作品のほとんどが「ラグナロクオンライン」を題材としています(一部オリジナルあり)。</p>
        <p>ラグナロクオンラインは、2003年頃 〜 2011年頃までプレイしていました。</p>
      </about-article>

      <about-article about="photos" :item="findArticleKey('photos')">
        <p>撮影した写真を展示しています。</p>
        <p>一眼レフカメラは、「 Nikon D5500 」を所有しています。</p>
        <p>レンズは今のところ、付属のものと、単焦点レンズ 35mm です。</p>
        <p>鋭意勉強中でございます。</p>
        <p>広角レンズが欲しいです。</p>
      </about-article>

      <about-article about="apps" :item="findArticleKey('apps')">
        <p>開発したアプリケーションや、ソースコードについて紹介しています。</p>
        <p>興味のある技術・分野について、習得した技術の紹介や解説も行います。</p>
        <p>なお、当サイト「jorro」も、私が開発しております。</p>
        <p>近いうちに、開発環境や技術記事、仕様などを公開していきたいと考えています。</p>
      </about-article>

      <about-article about="site" :item="findArticleKey('site')">
        <p>当サイトは、「jorro」という名称です。読み方は「ジョウロ」になります。</p>
        <p>名称の由来は内緒です。ちなみにjorro自体はポルトガル語で、漢字では「如雨露」と表記します。</p>
        <p>また、上述の通り、当サイトは私が全てプログラミングして製作しております。</p>
        <p>何か不具合がございましたら、下記のSNSや、連絡先へご連絡ください。</p>
        <p>もしくは、プルリクエストして頂けると助かります。</p>
        <h2>推奨環境</h2>
        <div>
          <el-table :data="enviroments" border stripe style="width: 261px">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="enabled" label="対象" width="80" />
          </el-table>
        </div>
      </about-article>

      <about-article about="author" :item="findArticleKey('author')">
        <about-author></about-author>
      </about-article>

    </el-col>
    <el-col :xs="1" :sm="2" :md="1">
      <div>&nbsp;</div>
    </el-col>
  </el-row>
</template>

<script>
import pages from './_settings'
import prefectures from '../models/prefectures'
const DEFAULT_TOP = 8;

import AboutArticle from './sub/AboutArticle'
import AboutAuthor from './sub/AboutAuthor'

export default {
  data() {
    return {
      articles: [
        {
          title: 'CONTENTS',
          items: this.initSortPages()
        },
        {
          title: 'JORRO',
          items: [
            { iconId: 'fa-globe', label: 'site', to: '#about-site' },
            { iconId: 'fa-user', label: 'author', to: '#about-author' }
          ]
        }
      ],
      enviroments: [
        { name: 'Google Chrome',  enabled: 'Latet' },
        { name: 'Firefox',        enabled: 'Latet' },
        { name: 'Safari',         enabled: 'Latet' },
        { name: 'IE11',           enabled: 'X' },
        { name: 'Microsoft Edge', enabled: 'X' },
      ],
    }
  },
  computed: {
    getSideMenuTop() {
      return this.$root.fixedHeight + 16 + 'px'
    },
  },
  methods: {
    initSortPages() {
      let arr = []
      Object.keys(pages).forEach(function(key) {
        if (key === 'about') return
        let page = this[key]
        arr.push({
          iconId: page.icon,
          label: key,
          to: '#about-' + key
        })
      }, pages)
      return arr
    },
    getItemIndex(groups, groupIdx, itemIdx) {
      let total = 0
      for (var i = groupIdx - 1; i >= 0; i--) {
        total += groups[i].items.length
      }
      total += itemIdx
      return String(total)
    },
    findArticleKey(key) {
      let found = {}
      this.articles.forEach(function(article) {
        article.items.forEach(function(item) {
          if (key == item.label) {
            found = item
          }
        })
      })
      return found
    },
  },
  watch: {
    '$viewportState.scrollY': function() {
      // this.keepSideMenuPosition()
    }
  },
  components: {
    AboutArticle,
    AboutAuthor
  }
}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";
.side-menu {
  position: sticky;
}

.el-menu {
  background-color: #fff;
}

.el-menu-item {
  color: $text-color;

  &:hover { background-color: $body-bg-color; }
}

.el-card {
  border: 1px solid rgba($brand-base-color, .125);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .06), 0px 0px 6px 0px rgba(0, 0, 0, .02);
  color: $text-color;
  width: 100%;
}

.el-card__header {
  border-bottom: 1px solid rgba($brand-base-color, .125);
  color: $text-color;
}

.capitalize {
  // 先頭を大文字にする
  text-transform: capitalize;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
