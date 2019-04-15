import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js';
import 'weui';
Vue.config.productionTip = false;
//引入ui框架
import iView from 'iview';
//使用ui框架
Vue.use(iView);

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
