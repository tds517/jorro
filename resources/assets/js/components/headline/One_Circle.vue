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

@import 'resources/assets/sass/variables';

$size: 2em;

h1 {
  position: relative;
  background: $body-bg-color;
  padding: 2px 5px 2px $size/2;
  color: $brand-base-color;
  border-radius: 0 10px 10px 0;
  letter-spacing: .25em;
  font-weight: 300;

   i {
    display: inline-block;
    line-height: $size;
    position: absolute;
    padding: 0em;
    color: white;
    font-weight: 300;
    width: $size;
    text-align: center;
    height: $size;
    line-height: $size;
    left: -1.35em;
    top: 50%;
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    border-radius: 50%;
    letter-spacing: 0;
  }
}

</style>
