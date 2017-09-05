<template>
  <nav id="accounts-navbar" class="navbar">
    <ul class="clearfix">
      <li>
        <a href="#twitter">
          <i class="fa fa-fw fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="#instagram">
          <i class="fa fa-fw fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="#github">
          <i class="fa fa-fw fa-github-alt"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    mounted() {
      console.log('NavbarSNS mounted')
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

</style>
