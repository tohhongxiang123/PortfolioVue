import Vue from 'vue'
import App from './App.vue'
import router from './router'
import scrollAnimation from '@/directives/scrollAnimation'

Vue.config.productionTip = false
Vue.directive('scrollanimation', scrollAnimation);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
