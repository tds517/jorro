<template>
  <div class="notices">
    <h1>
      <i class="fa fa-fw fa-bell-o"></i>
      お知らせ
    </h1>
    <ul class="clearfix">
      <li v-for="item in items">
        <p>{{ item.date }}</p>
        <img :src="item.thumbnail_path">
        <p>{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
var notices = [
  {
    id: 1,
    content: 'お知らせです。リニューアルしました。',
    thumbnail_path: 'img/illusts/14022201.jpg',
    date: '2017/09/07'
  },
  {
    id: 2,
    content: 'イラストをアップしました。',
    thumbnail_path: 'img/illusts/16103101.jpg',
    date: '2017/09/08'
  },
  {
    id: 3,
    content: '英数字テストです。1234567890ewaofijewo ie36784',
    thumbnail_path: 'img/illusts/kazuma4.jpg',
    date: '2017/09/09'
  },
]

export default {
    mounted() {
        console.log('Component mounted.')
    },
    data() {
      return {
        items: notices
      }
    }
}
</script>

<style lang="scss" scoped>
  @import "../../sass/variables";

  .notices {

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      display: block;
      float: left;
      list-style-type: none;
      max-width: 200px;
      overflow-wrap: all;
      word-wrap: all;

      img {
        max-width: 120px;
      }
    }
  }
</style>
