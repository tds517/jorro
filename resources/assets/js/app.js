// require('./bootstrap');

window.Vue = require('vue');
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-theme-default/theme/index.css'

Vue.use(ElementUI, {locale})

const app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
    },
    computed: {
    }
});
