import Button from './packages/button.vue';
import Button2 from './packages/el-button.vue';


const components = [
  Button,
  Button2
]

const install = (Vue, opts = {}) => {
  components.forEach((component) => {
    Vue.component(component.name, component);

  })
}
export {
  Button,
  Button2
}
//  const component = {
//     install : function (Vue, opts = {}) {
//         Vue.component('my-btn', Button);
//     }
//   }
/* 支持使用标签的方式引入 */
// if (typeof window !== 'undefined' && window.Vue) {
// 	install.use(window.Vue);
// }

const missionUI = {
  install
}
// 导出组件
// export default component;
export default missionUI;

