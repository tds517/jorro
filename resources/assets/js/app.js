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

/*
  Components
 */
Vue.component('navbar', require('./components/Navbar.vue'));
Vue.component('navbar-sns', require('./components/NavbarSNS.vue'));

const router = new VueRouter({
  routes: [
    { path: '/',        component: require('./pages/Mainboard') },
    { path: '/about',   component: require('./pages/About') },
    { path: '/illusts', component: require('./pages/Illusts') },
    { path: '/comics',  component: require('./pages/comics') },
    { path: '/photos',  component: require('./pages/photos') },
    { path: '/Apps',    component: require('./pages/Apps') }
  ]
})


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
