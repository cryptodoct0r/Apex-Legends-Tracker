import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueToasted from 'vue-toasted'

Vue.config.productionTip = false


Vue.use(VueToasted, {
  iconPack: 'fontawesome'
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')