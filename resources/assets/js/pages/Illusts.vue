<template>
  <el-container>
    <el-header height="auto">
      <el-row>
        <el-col :xs="1" :sm="2" :md="3">&nbsp;</el-col>

        <el-col :xs="22" :sm="20" :md="18" id="search" class="t-center">
          <div>
            <el-input v-model="searchWord"
                placeholder="キーワードを入力"
                suffix-icon="el-icon-search"
                size="mini"
                :clearable="true"
                style="width: 200px"
                />

            <el-switch v-model="enabledAsc"
                id="order"
                active-text="新しい順"
                inactive-text="旧い順"
                active-color="var(--red)"
                />
          </div>
          <div>
            <span v-for="(tagName, index) in tags" :key="index">
              <span @click="checkTag(tagName)">
                <el-tag :type="types[tagName]">{{ tagName }}</el-tag>
                <input type="checkbox" v-model="enabledTags" :value="tagName"
                    style="display:none;">
              </span>
            </span>
          </div>
        </el-col>

        <el-col :xs="1" :sm="2" :md="3">&nbsp;</el-col>
      </el-row>
    </el-header>

    <el-main>
&nbsp;
    </el-main>
  </el-container>
</template>

<script>
export default {
  mounted() {
    for (let tag of this.tags) {
      this.types[tag] = ''
    }
  },
  data() {
    return {
      searchWord: '',
      enabledAsc: true,
      tags: ['狼と香辛料', 'ラグナロクオンライン', '落書き'],
      enabledTags: [],
      types: {},
      switchStyle: {
        color: '#939b9f',
        fontWeight: 200
      }
    }
  },
  methods: {
    checkTag(tagName) {
      // チェック済み
      if (this.enabledTags.includes(tagName)) {
        // 有効タグから外す
        this.enabledTags.splice(this.enabledTags.indexOf(tagName), 1)
        this.types[tagName] = ''
      } else {
        // 有効タグに追加
        this.enabledTags.push(tagName)
        this.types[tagName] = 'danger'
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";

.el-container {
  width: 100%;

  .el-header {
    // background-color: lighten($brand-base-color, 15%);
    padding-top: 16px;
  }
}

#search {
  & > div *:not() {
    margin: 0 4px;
  }
}

.el-tag {
  cursor: pointer;
}

.el-switch__label {
  color: red;
}


</style>
