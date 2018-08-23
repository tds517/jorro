<template>
  <el-container>
    <el-header height="auto">
      <el-row>
        <el-col :xs="1" :sm="2" :md="3">&nbsp;</el-col>

        <el-col :xs="22" :sm="20" :md="18" id="conditions">
          <i class="fa fa-fw fa-comment"></i> {{ searchWord }}
          /
          <i class="fa fa-fw fa-sort"></i> {{ enabledAsc }}
          /
          <i class="fa fa-fw fa-tags"></i>
          <span v-for="tagName in enabledTags">
            {{ tagName }}&nbsp;
          </span>
        </el-col>

        <el-col :xs="1" :sm="2" :md="3">
          <el-button round plain type="primary" @click="enabledSearch = true" size="medium">
            <i class="fa fa-fw fa-search"></i>
          </el-button>

          <el-dialog
              title="Search"
              :visible.sync="enabledSearch">
            <el-form label-width="40px" label-position="left">
              <el-form-item>
                <span slot="label">
                  <i class="fa fa-fw fa-comment"></i>
                </span>
                <el-input v-model="searchWord"
                    placeholder="キーワードを入力"
                    suffix-icon="el-icon-search"
                    :clearable="true"
                    />
              </el-form-item>
              <el-form-item>
                <span slot="label">
                  <i class="fa fa-fw fa-sort"></i>
                </span>
                <el-switch v-model="enabledAsc"
                    id="order"
                    active-text="新しい順"
                    active-value="新しい順"
                    inactive-text="旧い順"
                    inactive-value="旧い順"
                    active-color="var(--red)"
                    />
              </el-form-item>
              <el-form-item>
                <span slot="label">
                  <i class="fa fa-fw fa-tags"></i>
                </span>
                <span v-for="(tagName, index) in tags" :key="index">
                  <span @click="checkTag(tagName)">
                    <el-tag :type="types[tagName]">{{ tagName }}</el-tag>
                    <input type="checkbox" v-model="enabledTags" :value="tagName"
                        style="display:none;">
                  </span>
                </span>
              </el-form-item>
            </el-form>
          </el-dialog>
        </el-col>
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
    for (let tagName of this.tags) {
      this.types[tagName] = 'info'
    }
  },
  data() {
    return {
      enabledSearch: false,
      searchWord: '',
      enabledAsc: '新しい順',
      tags: ['狼と香辛料', 'ラグナロクオンライン', '落書き'],
      enabledTags: [],
      types: {},
      switchStyle: {
        color: '#939b9f',
        fontWeight: 200
      },

    }
  },
  methods: {
    checkTag(tagName) {
      // チェック済み
      if (this.enabledTags.includes(tagName)) {
        // 有効タグから外す
        this.enabledTags.splice(this.enabledTags.indexOf(tagName), 1)
        this.types[tagName] = 'info'
      } else {
        // 有効タグに追加
        this.enabledTags.push(tagName)
        this.types[tagName] = 'default'
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

#conditions {
  color: $brand-base-color;
  padding-right: 12px;
  font-size: .8em;
  word-wrap: break-word;
}

.el-tag {
  cursor: pointer;
}

.el-switch__label {
  color: red;
}

</style>
