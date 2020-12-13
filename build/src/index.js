import Vue from 'vue';
import App from './app.vue'
// import  missionUI  from './../../dist/bundle.umd.js';
// import { Btn } from 'mission-coms';
// import ElementUI from 'element-ui';

// import 'element-ui/lib/theme-chalk/index.css';
// import './common.less';
// import  Button  from './../../dist/bundle.Button.js';

// 引用组件包(远程组件包) 
import { Button, Btn} from 'mission-coms';
// import all from '../../src/index';

// import { Button , Btn } from './index.demo';

console.log('coms', Btn );
// console.log('all...', {...all} );

Vue.component(Btn.name, Btn)
// console.log('coms-btn', Button, Btn);
// Object.keys(coms).forEach(key => {
//     console.log('Button-coms', key, coms[key] );
//     Vue.component(coms[key].name, coms[key]);
// })

// 普通方式引用组件（本地组件包）
// import { Button }  from '../../dist/common.umd.js';
// import '../../dist/common.umd.css';
console.log('coms', Button, Btn);
// Object.keys(coms).forEach(key => {
//   console.log('Button-coms', key, coms[key] );
//   Vue.component(coms[key].name, coms[key]);
// })


// Vue.use(coms);
// Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app');


// 分割开，目前可以通过不用install的方法来获取到组件
// import coms  from '../../main'; 压缩前
// console.log('ladash', 1212);
