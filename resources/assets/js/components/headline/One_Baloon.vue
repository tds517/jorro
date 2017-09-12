<template>
  <h1>
    <i :class="['fa fa-fw', iconId, getBgc]"></i>
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: {
    iconId: String,
    color: {
      type: String,
      default: '#bdbdbd'
    },

  },
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.$el)
    console.log(this.$el.attributes)
    // カスタムプロパティの取得方法
    let styles = getComputedStyle(document.documentElement)
    let value = String(styles.getPropertyValue('--' + this.color)).trim();
    console.log(value)
    let color = this.color
    // スコープのIDをattributesから取得し、スタイルを強引に追加する。
    let attributes = this.$el.attributes;
    for (var i = 0; i < attributes.length; i++) {
      console.log(attributes[i])
      $('head').append('<style>h1[' + attributes[i].name + ']:after {border-left: 12px solid var(--' + color +  ');}')
    }
  },
  computed: {
    getBgc() {
      return 'bc-' + this.color
    }
  }
}


</script>

<style lang="scss" scoped>

$size: 30px;

h1 {
  position: relative;
  padding-left: $size * 1.5;
}

h1 i {
  position: absolute;
  // background: #ffca2c;
  // background: var(data-color-name);
  color: white;
  font-weight: normal;
  font-size: .9em;
  border-radius: 50%;
  left: 0;
  width: $size;
  height: $size;
  line-height: $size;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

h1:after {
  /*吹き出しのちょこんと出た部分*/
  content: '';
  display: block;
  position: absolute;
  left: $size * .85;
  height: 0;
  width: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  // border-left: 12px solid #ffca2c;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
}

</style>
