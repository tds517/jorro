<template>
  <nav class="navbar">
    <ul class="nav__ul">
      <li class="nav__li" v-for="(category, name) in categories">
        <router-link :to="category.path" class="nav__button">
          <pages-icon :category="name"></pages-icon>
        </router-link>
        {{ renderUpperCase(name) }}
      </li>
    </ul>
  </nav>
</template>

<script>
import pages from '../pages/_settings'
export default {
  mounted() {
  },
  data() {
    return {
      // Navbarのアイテム
      categories: pages
    }
  },
  methods: {
    // ラベル用に大文字に変換
    renderUpperCase(label) {
      return label.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'resources/assets/sass/variables';

.navbar {
  margin-top: 12px;
}

.nav__ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  // margin-top: 8px;
  padding: 0;
}

.nav__li {
  color: $brand-base-color;
  // display: inline-block;
  font-size: .75em;
  list-style-type: none;
  margin-right: 16px;
  text-align: center;
}

.nav__button {
  background-color: lighten($brand-base-color, 22.5%);
  border: 1px solid lighten($brand-base-color, 10%);
  border-radius: 3px;
  color: $brand-base-color;
  display: block;
  margin-bottom: 8px;
  opacity: .999;
  padding: 16px;
  position: relative;
  text-decoration: none;
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
}

.fa {
  font-size: 2.5em;
}
</style>
