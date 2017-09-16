<template>
  <el-row>
    <el-col :span="3" :offset="1" class="card"
      v-for="(item, index) in limitedItems" :key="item"
    >
      <!-- TODO: CONTENTS URL -->
      <a href="#"
        @mouseenter="doMaskImage(false, $event)"
        @mouseleave="doMaskImage(true, $event)"
      >
        <el-card :body-style="{ padding: 0, position: 'relative' }">
          <span class="card__header">
            <pages-icon :category="item.category"></pages-icon>
            {{ item.category }}
          </span>

          <div class="image-wrapper">
            <img :src="item.thumbnail_path" class="image">
          </div>

          <div class="content">
            <span class="message">{{ item.message }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.date }}</time>
            </div>
          </div>
        </el-card>
      </a>
    </el-col>
    <el-col :span="2" :offset="1" class="more" v-if="enabledMore">
      <el-button type="primary" size="small" class="more-button"
        @click="moreDialogView = true"
      >
        <i class="fa fa-fw fa-angle-double-right"></i>
      </el-button>

      <el-dialog title="History" :visible.sync="moreDialogView">
        <history-table :data="items"></history-table>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>

import HistoryTable from './table/History'

export default {
  props: {
    items: Array,
    max: {
      type: Number,
      default: 5,
      validator: function(val) {
        return val > 0
      }
    }
  },
  data() {
    return {
      moreDialogView: false
    }
  },
  methods: {
    doMaskImage(isMask, el) {
      // a領域内の子要素img
      let $img = $(el.target).find('.image')
      let opts = { duration: 500, ease: 'ease-out', queue: false};
      if (isMask) {
        Velocity($img, { blur: '3px' }, opts)
      } else {
        Velocity($img, { blur: '.1px' }, opts)
      }
    }
  },
  computed: {
    limitedItems() {
      return this.enabledMore ? this.items.slice(0, this.max) : this.items
    },
    enabledMore() {
      return this.items.length > this.max
    }
  },
  components: {
    HistoryTable
  }
}

</script>

<style lang="scss" scoped>
@import "../../sass/variables";

$card-height: 200px;
$card-width: 120px;

.card {
  flex-wrap: wrap;
  min-height: $card-height;
  min-width: $card-width;

  a {
    text-decoration: none;
  }
}

.content {
  background-color: #fff;
  padding: 6px 4px 4px;
  z-index: 2;
}

.message {
  color: $text-color;
  font-size: .75em;
}

.time {
  color: #999;
  font-size: .6em;
}

.bottom {
  text-align: right;
}

.image-wrapper {
  filter: contrast(120%) sepia(50%);
}

.image {
  display: block;
  filter: blur(3px);
  width: 100%;
}

.card__header {
  background-color: rgba(255, 255, 255, .5);
  box-shadow: 0 2px 4px rgba(255, 255, 255, .75);
  color: #fff;
  padding: 4px;
  position: absolute;
  radius: 8px;
  text-shadow: 2px 2px 2px rgba($blue-gray, .8);
  width: 100%;
  z-index: 1;
}

.more-button {
  font-size: 1.2em;
  padding: 2px 4px;
  transition: all .5s ease;
}
</style>
