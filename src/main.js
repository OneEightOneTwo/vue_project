import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js';
import 'weui';
Vue.config.productionTip = false;


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);





new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
