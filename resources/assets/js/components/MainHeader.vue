<template>
  <header id="main-header" class="header-wrapper">
    <el-row :gutter="4" align="middle">
      <el-col :xs="{offset: 1, span: 15}"
              :sm="{offset: 1, span: 13}"
              :md="{offset: 2, span: 2}">
        <h1>
          <router-link to="/">
            <img id="logo" src="img/logo.png">
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

  h1 {
    #logo {
      width: 104px;
    }
  }

  .header__navbar {
    margin-top: 12px;
  }
}

#main-cnt {
  padding: 8px;
}

</style>
