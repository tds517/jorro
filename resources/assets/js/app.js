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
  Vue Router
 */
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'

const router = new VueRouter({
  routes: routes
})

/*
  Components
 */
Vue.component('pages-icon', require('./pages/PagesIconRender.vue'))
Vue.component('navbar', require('./components/Navbar.vue'))
Vue.component('navbar-sns', require('./components/NavbarSNS.vue'))


const app = new Vue({
  router,
  el: '#app',
  data: {
  },
  methods: {
    mounted: function() {
      // ヘッダーの高さを測り、メインコンテンツを引き下げる
      var total = $('#main-header').outerHeight();
      $('#main-cnt').css('padding-top', total);
    }
  },
  computed: {
  }
});
