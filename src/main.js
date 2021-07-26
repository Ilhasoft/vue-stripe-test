import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { StripePlugin } from '@vue-stripe/vue-stripe'

const options = {
  pk: process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY
}

Vue.use(StripePlugin, options)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
