
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/vue-apex-charts'
import './plugins/vee-validate'
import './plugins/vue-world-map'
import './plugins/axios'
import './plugins/slider'
import './plugins/numeral'
import './plugins/lodash'
import './plugins/session'
import './plugins/moment'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
