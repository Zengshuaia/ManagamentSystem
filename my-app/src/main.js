import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
// import '../public/style/reset.css'
import store from '../src/store/index.js';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Element)


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
