require('./bootstrap');

window.Vue = require('vue');

// Vue.component('tutorial', require('./components/Tutorial.vue'));
// Vue.component('tutorial', require('./components/Tutorial.vue'));

Vue.component('compo-sample', {
  template: '<li>{{ samp.text }}</li>',
  // sampはコンポーネント上での変数名
  props: ['samp']
});

const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello World!',
      title_: 'てやんでい',
      seen: true,
      arr: [
        {text: 'uoooo'},
        {text: 'weeeeeei'},
        {text: 'aaaaaaaaa!!'}
      ],
      disabled: false,
      text_message: "default",
      isRed: false,
      isBold: true,
      loopObj: {
        key1: 'HOGE',
        key2: 300,
        key3: true
      }
    },
    methods: {
      addRow: function() {
        this.arr.push({text: 'PPPPPPPPP'});
      },
      toggleDisabled: function() {
        this.disabled = !this.disabled;
      },
      toggleRed: function() {
        this.isRed = !this.isRed
      },
      toggleBold: function() {
        this.isBold = !this.isBold
      }
    },
    computed: {
      reversedMessage: function() {
        return this.message.split('').reverse().join('')
      },
      doubleStyled: function() {
        return {
          red: this.isRed,
          bold: this.isBold
        }
      }
    }
});
