import Vue from 'vue';
import App from './app.vue'
// import  missionUI  from './../../dist/bundle.umd.js';
// import coms from 'mission-coms';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './common.less';
// import  Button  from './../../dist/bundle.Button.js';

// 引用组件包(远程组件包) 
// import coms from 'mission-coms';
// Object.keys(coms).forEach(key => {
//   console.log('Button-coms', key, coms[key] );
//   Vue.component(coms[key].name, coms[key]);
// })

// 普通方式引用组件（本地组件包）
import coms  from '../../dist/common.umd.js';
// import '../../dist/common.umd.css';

Object.keys(coms).forEach(key => {
  console.log('Button-coms', key, coms[key] );
  Vue.component(coms[key].name, coms[key]);
})


// Vue.use(coms);
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app');


// 分割开，目前可以通过不用install的方法来获取到组件
// import coms  from '../../main'; 压缩前
