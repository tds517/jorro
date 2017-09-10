<template>
  <nav class="navbar">
    <ul class="clearfix flex">
      <li v-for="category in categories">
        <router-link :to="getCategoryPathTo(category)">
          <pages-icon :category="category"></pages-icon>
        </router-link>
        {{ renderUpperCase(category) }}
      </li>
    </ul>
  </nav>
</template>

<script>
  import pages from '../pages/_pages'
  export default {
    mounted() {
    },
    data() {
      return {
        // Navbarのアイテム
        categories: ['about', 'illusts', 'comics', 'photos', 'apps']
      }
    },
    methods: {
      // カテゴリーのパス
      getCategoryPathTo(category) {
        return pages[category]['path']
      },
      // ラベル用に大文字に変換
      renderUpperCase(label) {
        return label.toUpperCase()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/variables";

  .navbar {
    ul {
      margin: 0;
      padding: 0;
    }

    li {
      display: inline-block;
      float: left;
      list-style-type: none;
    }

    a {
      display: block;
      text-decoration: none;
    }
  }

  nav {
    ul {
      margin-top: 8px;
    }

    li {
      color: $brand-base-color;
      font-size: .75em;
      margin-right: 16px;
      text-align: center;
    }

    a {
        background-color: lighten($brand-base-color, 17.5%);
        border: 1px solid lighten($brand-base-color, 17.5%);
        border-radius: 3px;
        color: $brand-base-color;
        display: block;
        margin-bottom: 8px;
        opacity: .999;
        padding: 16px;
        position: relative;
        transition: all .3s linear;

        &:before,
        &:after {
            content: '';
            border-color: $brand-primary;
            border-style: solid;
            position: absolute;
            z-index: 5;
            border-radius: 3px;
            box-sizing: content-box;
            transition: all .3s linear;
        }

        &:before {
            width: 0;
            height: 100%;
            border-width: 1px 0 1px 0;
            top: -1px;
            left: 0;
            transition-delay: 0.05s;
        }

        &:after {
            width: 100%;
            height: 0;
            border-width: 0 1px 0 1px;
            top: 0;
            left: -1px;
        }

        &:hover {
            background-color: transparent;
            color: $brand-primary;

            &:before {
                width: 100%;
            }

            &:after {
                height: 100%;
            }
        }

      i {
        font-size: 2.5em;
      }
    }
  }
</style>
