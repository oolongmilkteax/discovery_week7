import Vue from 'vue'
import App from './App.vue'
import QuantityCounter from './components/QuantityCounter.vue'
import Basket from './components/Basket.vue'
import Nav from './components/Nav.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import BarChart from './barchart.js'
import Axios from './axios.js'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component('qty', QuantityCounter)
Vue.component('basket', Basket)
Vue.component('navbar', Nav)
Vue.component('barchart', BarChart)
Vue.component('axios', Axios)

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')
