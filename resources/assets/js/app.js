/*
 |------------------------------------------------------------
 | app.js
 |------------------------------------------------------------
 | 役割
 |         主にライブラリやプラグインの読み込みや初期設定を記述する。
 |         また、グローバルコンポーネントの定義を記述するもよし。
 |         グローバルコンポーネントとは、多岐の子コンポーネントに使われるもののこと。
 |         最後に、アプリケーション全体で使用する機能の定義を記述する。
 |         なるべく肥大化しないように留意すること。
 |
 | Copyright (c) 2017 Tadashi Murakami.
 */
// Laravel
require('./bootstrap');
window.Vue = require('vue');

/*
  Element UI Use
 */
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
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
  Vue ScrollTo
 */
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

/*
  Viewports State
 */
import ViewportState from './plugins/viewport-state'
// ElementUIと合わせたViewport
Vue.use(ViewportState, { 420: 'xs', 768: 'sm', 1024: 'md', 1920: 'lg' })

/*
  View Lazyload
 */
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

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
    // VueScrollTo Set
    VueScrollTo.install(Vue, {
      container: 'body',
      duration: 500,
      easing: 'linear',
      offset: -this.fixedHeight - 12, // 12=調整値
      cancelable: true,
      onDone: false,
      onCancel: false,
      x: false,
      y: true
    })
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
