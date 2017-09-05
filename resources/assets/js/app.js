// require('./bootstrap');

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
    {
      path: '/',
      component: require('./components/Mainboard')
    },
    {
      path: '/about',
      component: require('./components/About')
    }
  ]
})

const app = new Vue({
  router,
  el: '#app',
  data: {
  },
  methods: {
    mounted: function() {
      var total = $('#main-header').outerHeight();
      $('#main-cnt').css('padding-top', total + 8);
    }
  },
  computed: {
  }
});
