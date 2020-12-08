// rollup.config.js
// rollup 引入 babel

import babel from 'rollup-plugin-babel'; // babel 装换入口
import vuePlugin from 'rollup-plugin-vue';
// import commonjs from 'rollup-plugin-commonjs';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import json from '@rollup/plugin-json'

import resolve from '@rollup/plugin-node-resolve';
import alias from 'rollup-plugin-alias'
import postcss from 'rollup-plugin-postcss'
import path from 'path'


console.log('process--------------', process.env.NODE_ENV);
// import missionUI from './main-common.js'
// console.log('components', missionUI);

// let configList = [
//   {
//     'Button': './packages/button.vue',
//   },
//   {
//     'Button2': './packages/el-button.vue'
//   }
// ]

const createBaseConfig = () => {
  return {
    // 核心选项
   input: './main-common.js',
  //  input: './packages/el-button.vue',
   external: ['lodash'],
   // 插件
   plugins: [
     peerDepsExternal(),
     babel({
       runtimeHelpers: true,  // 是否开启去掉重复代码
       // exclude: 'node_modules/**'
     }),
     resolve(),
     commonjs({
       esmExternals: false,
       sourceMap: false
     }),
     json(),
     vuePlugin(
     ),
     postcss(),
    //  postcss({
    //   extract: true,
    //   minimize: true
    // })
   ],
   output: {
     name: 'vuecoms',
     file: './dist/common.umd.js',
     sourcemap: true,
     format: 'umd',
     globals: {
       vue: 'Vue',
       lodash : '_'
     }
   }
  }
}
let config = createBaseConfig();

// if (Array.isArray(missionUI)) {
//   config = configList.map(item => {
//     let newItem = createBaseConfig();
//     for (const [key, value] of Object.entries(item)) {
//       console.log(`${key}: ${value}`);
//       newItem.output.file = `./dist/bundle.${key}.js`;
//       newItem.input = `${value}`;
//     }
//     return newItem;
//   })
// } else {
//   config = createBaseConfig();
// }

export default config

