<template>
  <el-table :data="data">
    <el-table-column property="category" width="64" align="center">
      <template scope="scope">
        <pages-icon :category="scope.row.category"></pages-icon>
      </template>
    </el-table-column>
    <el-table-column label="Date" property="date" width="120"></el-table-column>
    <el-table-column label="Message" property="message"></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    data: Array,
  },
}
</script>


<style lang="scss" scoped>
@import "resources/assets/sass/variables";

.fa {
  color: $text-color;
}

</style>
