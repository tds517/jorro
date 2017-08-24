// require('./bootstrap');

window.Vue = require('vue');

// Vue.component('compo-sample', {
//   template: '<li>{{ samp.text }}</li>',
//   props: ['samp']
// });

// import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-default/index.css'
// import App from './components/App'

Vue.use(ElementUI, {locale})

const app = new Vue({
    el: '#app',
    // components: { App },
    data: {
    },
    methods: {
    },
    computed: {
    }
});
