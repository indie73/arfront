import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.mixin({
  data: function() {
    return {
      logined: localStorage.logined === 'success',
      logIn() {
        localStorage.logined = 'success';
        location.reload();
      },
      logOut() {
        localStorage.logined = '';
        location.reload();
      },
    }
  }
});

const moment = require('moment');
require('moment/locale/ru');
Vue.use(require('vue-moment'), {
  moment
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
