import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource'
import store from './store';
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import './login.js' 
import './ui.js' 
Vue.config.productionTip = false;
Vue.use(VueResource)

//const util = require('./utils/util.js')

Vue.prototype.HOST = '/api' //开发环境
//Vue.prototype.HOST = ''

var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


