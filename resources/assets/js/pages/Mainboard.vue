<template>


  <section class="notices">
    <h1>
      <i class="fa fa-fw fa-bell-o"></i>
      お知らせ
    </h1>
    <el-row>
      <el-col :span="4" :offset="(index === 0) ? 0 : 1"
              v-for="(item, index) in items" :key="item">
        <el-card :body-style="{ padding: 0, position: 'relative' }">
          <span class="card__header">
            <pages-icon :category="item.category"></pages-icon>
            {{ item.category }}
          </span>
          <img :src="item.thumbnail_path" class="image">
          <div style="padding: 14px">
            <span>{{ item.content }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.date }}</time>
            </div>
          </div>
        </el-card>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>

import notices from '../models/demodata/notices'
import pages from './_pages'

export default {
    mounted() {
    },
    data() {
      return {
        items: notices
      }
    },
    methods: {
      // getIconId(category) {
      //   return pages[category]['icon']
      // }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
  @import "../../sass/variables";

  .notices {
    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .image {
      width: 100%;
      display: block;
    }
  }

  // .el-card__header--ov .el-card__header {
  .card__header {
    background-color: rgba(255, 255, 255, .3);
    color: #fff;
    padding: 4px;
    position: absolute;
    radius: 8px;
    width: 100%;
  }
</style>
