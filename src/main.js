import Vue from 'vue'
import App from './App.vue'

import router from './rota'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
