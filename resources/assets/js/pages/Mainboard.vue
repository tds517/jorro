<template>
  <p>Hello Mainboard World</p>
</template>

<script>
var notices = [
  {
    id: 1,
    content: 'お知らせです。リニューアルしました。',
    thumbnail_path: 'img/illusts/14022201',
    date: '2017/09/07'
  },
  {
    id: 2,
    content: 'イラストをアップしました。',
    thumbnail_path: 'img/illusts/14022201',
    date: '2017/09/08'
  },
  {
    id: 3,
    content: '英数字テストです。1234567890ewaofijewoie36784',
    thumbnail_path: 'img/illusts/14022201',
    date: '2017/09/09'
  },
]

export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
