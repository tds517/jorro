<template>
  <el-row>
    <el-col :xs="1" :sm="2" :md="{ offset: 2, span: 5 }"
         class="side-menu" :style="{ top: getSideMenuTop }">
        <el-card header="MENU">
          <el-menu mode="vertical" default-active="0">
            <el-menu-item-group v-for="(article, index1) in articles"
                :key="article.title" :title="article.title">
              <el-menu-item v-for="(item, index2) in article.items"
                  :key="item.label" :index="getItemIndex(articles, index1, index2)"
                  v-scroll-to="item.to">
                  <i :class="['fa fa-fw', item.iconId]"></i>
                  {{ item.label }}
                </a>
              </el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-card>
    </el-col>
    <el-col :xs="22" :sm="20" :md="16" class="content">

      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <article id="about-photos">
        <p>Hello</p>
      </article>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    </el-col>
    <el-col :xs="1" :sm="2" :md="1">
      <div>&nbsp;</div>
    </el-col>
  </el-row>
</template>

<script>
import pages from './_settings'
const DEFAULT_TOP = 8;

export default {
  data() {
    return {
      // sideMenuTop: DEFAULT_TOP,
      sideMenuStyles: {
        position: 'absolute',
        top: '0px',
        left: '0px'
      },
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
    }
  },
  computed: {
    getSideMenuTop() {
      console.log(this.$root.fixedHeight)
      return this.$root.fixedHeight + 16 + 'px'
    }
  },
  methods: {
    initSortPages() {
      let arr = []
      // for (page in pages) {
      Object.keys(pages).forEach(function(key) {
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
  },
  watch: {
    '$viewportState.scrollY': function() {
      // this.keepSideMenuPosition()
    }
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
  // 先頭を大文字にする
  text-transform: capitalize;

  &:hover {
    background-color: $body-bg-color;
  }
}

.el-card {
  border: 1px solid rgba($brand-base-color, .125);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .06), 0px 0px 6px 0px rgba(0, 0, 0, .02);
  width: 100%;
}

.el-card__header {
  border-bottom: 1px solid rgba($brand-base-color, .125);
}

.content {
  padding: 8px;
}

</style>
