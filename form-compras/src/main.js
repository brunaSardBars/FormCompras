import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import toasted from 'vue-toasted'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuelidate)

Vue.use(toasted, {
  position: 'top-center',
  duration: 5000,
  containerClass: 'margemSuperior',
  keepOnHover: true,
  closeOnSwipe: true
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
