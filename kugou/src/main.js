// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import './assets/font-icon/iconfont.css'
import './assets/font-icon/iconfont.eot'
import './assets/font-icon/iconfont.ttf'
import './assets/font-icon/iconfont.svg'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
