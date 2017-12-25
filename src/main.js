// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueClipboards from 'vue-clipboards'
import router from './router'

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'fa',
  defaultTooltipAnimated: true
})

Vue.use(VueClipboards)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
