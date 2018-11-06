// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Wordpress from './components/Wordpress'
import Coffee from './components/Coffee'
import Learn from './components/Learn'
import Surprise from './components/Surprise'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: HelloWorld},
    {path: '/wordpress', component: Wordpress},
    {path: '/coffee', component: Coffee},
    {path: '/learn', component: Learn},
    {path: '/surprise', component: Surprise}
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
