import Vue from 'vue'
import App from './App.vue'

import { applyPolyfills, defineCustomElements } from '@henryv0/grafitti/loader';

Vue.config.productionTip = false

applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
