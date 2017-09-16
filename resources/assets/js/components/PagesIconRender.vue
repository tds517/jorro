<template>
  <i :class="['fa fa-fw', getIconId]"></i>
</template>

<script>
import pages from '../pages/_settings'

export default {
  props: {
    category: String
  },
  computed: {
    getIconId() {
      return pages[this.category]['icon']
    }
  }

}
</script>
