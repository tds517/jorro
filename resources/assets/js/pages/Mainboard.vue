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
        <h1-circle :icon-id="categories.notice.icon" color="amber">
          {{ categories.notice.title }}
        </h1-circle>

        <mainboard-cards :items="notices" :max="2"></mainboard-cards>
      </section>

      <section class="favorite">
        <h1-circle :icon-id="categories.favorite.icon" color="pink">
          {{ categories.favorite.title }}
        </h1-circle>

        <mainboard-cards :items="notices" :max="1"></mainboard-cards>
      </section>

      <section class="top_rank">
        <h1-circle :icon-id="categories.top_rank.icon" color="light-blue">
          {{ categories.top_rank.title }}
        </h1-circle>

        <mainboard-cards :items="notices" :max="4"></mainboard-cards>
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

import H1Circle from '../components/headline/One_Circle'
import MainboardCards from '../components/MainboardCards'
const components = {
  H1Circle,
  MainboardCards
}

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
          notice:   { title: 'お知らせ', icon: 'fa-bell' },
          favorite: { title: 'お気にいり', icon: 'fa-heart' },
          top_rank: { title: '人気ランキング', icon: 'fa-trophy' },
          history: { title: '最近見た', icon: 'fa-history' },
        }
      }
    },
    methods: {
    },
    components: components
}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";

.notice, .favorite, .top_rank {
  h1 > span {
    // text-align: right;
  }
}

</style>
