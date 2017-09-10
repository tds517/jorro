<template>
    <i :class="['fa fa-fw', getIconId]"></i>
</template>

<script>
import pages from './_pages'

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
