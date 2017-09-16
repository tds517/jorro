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
      default: 'brand-base'
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
  padding-left: $size * 1.2;
}

h1 i {
  position: absolute;
  color: white;
  font-weight: normal;
  font-size: .85em;
  border-radius: 50%;
  left: 0;
  width: $size;
  height: $size;
  line-height: $size;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

</style>
