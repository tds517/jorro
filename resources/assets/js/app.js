// Laravel
require('./bootstrap');
window.Vue = require('vue');

/*
  Element UI Use
 */
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-theme-default/theme/index.css'
Vue.use(ElementUI, {locale})

/*
  Velocity.js
 */
import Velocity from 'velocity-animate'

/*
  Vue Router
 */
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'

const router = new VueRouter({
  routes: routes
})

/*
  Viewports State
 */
import ViewportState from './plugins/viewport-state'
// ElementUIと合わせたViewport
Vue.use(ViewportState, { 420: 'xs', 768: 'sm', 1024: 'md', 1920: 'lg' })

/*
  Global Components
    ここで宣言すると、下位階層全体で利用可能
 */
Vue.component('main-header', require('./components/MainHeader.vue'))
Vue.component('pages-icon', require('./components/PagesIconRender.vue'))

const vm = new Vue({
  router,
  el: '#app',
  data: {
    fixedHeight: 0
  },
  mounted: function() {
    // ヘッダーの高さを測り、メインコンテンツを引き下げる
    this.fixedHeight = this.getHeaderHight()
  },
  computed: {
  },
  methods: {
    getHeaderHight() {
      return $('#main-header').outerHeight();
    }
  },
  watch: {
    '$viewportState.label': function() {
      // this.viewport = this.$viewportState.label
    },
  }
});
