import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import hotjar from './plugins/hotjar'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  hotjar,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
