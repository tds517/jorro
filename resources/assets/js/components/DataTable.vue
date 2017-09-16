<template>
  <!-- <el-table :data="data" style="width: 100%"> -->
  <el-table :data="data">
    <el-table-column property="category" width="40">
      <template scope="scope">
        <!-- <pages-icon :category="scope.row.category"></pages-icon> -->
        <!-- <i :class="['fa fa-fw', getIconId(scope.row.category)]"></i> -->
        <!-- <i class="fa fa-fw fa-picture-o"></i> -->
        <i class="el-icon-edit"></i>
      </template>
    </el-table-column>
    <el-table-column label="Date" property="date" width="120"></el-table-column>
    <el-table-column label="Message" property="message"></el-table-column>
  </el-table>
</template>

<script>
import PagesIconRender from '../pages/PagesIconRender'

export default {
  props: {
    data: Array,
  },
  mounted() {
    console.log(PagesIconRender)
  },
  methods: {
    getIconId(category) {
      console.log(category)
      return PagesIconRender.computed.getIconId(category)
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../../sass/variables";

</style>
