<template>
  <header id="main-header">
    <el-row :gutter="4" align="middle">
      <el-col :xs="{offset: 1, span: 15}"
              :sm="{offset: 1, span: 13}"
              :md="{offset: 2, span: 2}">
        <h1>
          <router-link to="/">
            <img src="img/logo.png" id="img-logo"
                :title="logoTitle" :alt="logoTitle" width="104">
          </router-link>
        </h1>
      </el-col>

      <el-col :xs="4" :sm="6" :md="16">
        <navbar class="header__navbar"></navbar>
      </el-col>

      <el-col :xs="4" :sm="4" :md="4">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: "MainHeader",
  mounted() {
    // ヘッダーの高さを測り、メインコンテンツを引き下げる
    // var total = this.$root.getHeaderHight();
    // $('#main-cnt').css('padding-top', total + 8);
  },
  data() {
    return {
      logoTitle: 'Jorro Logo Image'
    }
  },
  components: {
    Navbar
  }

}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";

#main-header {
  background: $body-bg-color;
  border-bottom: 1px solid darken($body-bg-color, 5);
  border-top: 6px solid $brand-primary;
  box-shadow: 0 1px 2px $body-bg-color;
  position: fixed;
  top: 0;
  width: calc(100vw - 15px);
  z-index: 10;
}

</style>
