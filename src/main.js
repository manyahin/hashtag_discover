import Vue from 'vue'
import App from './App.vue'

// Buefly is lightweight UI components for Vue.js based on Bulma
import Buefly from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefly)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
