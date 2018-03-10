<template>
  <article :id="getId">
    <h1>
      <i :class="['fa fa-fw', item.iconId]"></i>
      {{ item.label }}
    </h1>
    <slot></slot>
  </article>
</template>

<script>
export default {
  props: {
    item: Object,
    about: String
  },
  computed: {
    getId() {
      return this.item.to.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "resources/assets/sass/variables";

article {
  margin-bottom: 6em;
  padding-left: 16px;
}

h1 {
  text-transform: capitalize;
}

h1 ~ * {
  padding-left: 16px;
}

p {
  color: $text-color;
}

li {
  margin: 8px 0 8px 32px;
  color: rgba($text-color, .75);
}

h1 {
  border-bottom: solid 3px $lime;
  color: $brand-primary;
  font-size: 2em;
  line-height: 1.5em;
  position: relative;
}

h1:after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px $teal;
  bottom: -3px;
  width: 20%;
}

h2 {
  background: transparent;/*背景透明に*/
  border-left: solid 5px $brand-primary;/*左線*/
  color: $text-color;
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: 300;
  margin-left: 20px;
  padding: 0.125em 0.5em;/*上下 左右の余白*/
}

</style>
