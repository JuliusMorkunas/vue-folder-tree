import Vue from 'vue';
import App from './components/App.vue';
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');
