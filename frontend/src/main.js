import Vue from 'vue'
import App from './App'
import router from './router'
import './icons/index.styl'
import Vuetify from 'vuetify'
import './main.styl'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
