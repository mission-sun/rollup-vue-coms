import Vue from 'vue';
import App from './app.vue'
import  missionUI  from './../../dist/bundle.umd.js';
// import  elementUI   from '../../main';
// import Button from 'mission-coms';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './common.less';



Vue.use(missionUI);
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app');