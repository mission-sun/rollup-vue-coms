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
const serve = require('rollup-plugin-serve');
// console.log('path', path.join(__dirname, '..', 'src'));



// import jsx from '@babel/plugin-syntax-jsx'

export default [{
   // 核心选项
  input: './main.js',
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
    postcss({
      extract: path.resolve(`filename.css`)
    })
  ],
  output: {
    name: 'vuecoms',
    file: './dist/bundle.umd.js',
    sourcemap: true,
    format: 'umd',
    globals: {
      vue: 'Vue',
      lodash : '_'
    },
    // paths: {
    //   vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
    // }
  },
}];
