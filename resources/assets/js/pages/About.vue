<template>
  <div>
    <p>Hello About World</p>
    <el-button type="primary">TEST</el-button>
    <el-button type="info">TEST</el-button>
    <el-button type="success">TEST</el-button>
    <el-button type="warning">TEST</el-button>
    <el-button type="danger">TEST</el-button>
  </div>
</template>

<script>
export default {
  mounted() {
      console.log('Component mounted.')
  }
}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";
</style>
