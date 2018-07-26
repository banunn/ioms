import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import { sync } from 'vuex-router-sync'

const unsync = sync(store, router) // done. Returns an unsync callback fn

var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
