// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Wordpress from './components/Wordpress'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: HelloWorld},
    {path: '/wordpress', component: Wordpress}
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
