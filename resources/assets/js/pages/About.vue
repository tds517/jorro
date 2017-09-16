<template>
  <el-row>
    <el-col :xs="1"
            :sm="2"
            :md="8">
      <div>&nbsp;</div>
    </el-col>
    <el-col :xs="22"
            :sm="20"
            :md="15">
      <el-button @click="getCurrentViewport">get</el-button>
    </el-col>
    <el-col :xs="1"
            :sm="2"
            :md="1">
      <div>&nbsp;</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  mounted() {
  },
  methods: {
    getCurrentViewport() {
      console.log(this.$root)
      console.log(this.$root.$viewportState.label)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";
</style>
