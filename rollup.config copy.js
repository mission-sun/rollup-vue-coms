// rollup.config.js
// rollup 引入 babel
import babel from 'rollup-plugin-babel'; // babel 装换入口
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

export default [{
   // 核心选项
  input: 'main.js',
  output: {
    file: './dist/bundle.cjs.js',
    format: 'cjs'
  },
  // 外链
  external: {},
  // 插件
  plugins: [
    babel({
      runtimeHelpers: true,  // 是否开启去掉重复代码
      exclude: 'node_modules/**'
    })
  ]
},
{
  input: 'main.js',
  output: {
    file: './dist/bundle.iife.js',
    name: 'iifeName',
    format: 'iife'
  }
},
{
  input: 'main.js',
  output: {
    file: './dist/bundle.umd.js',
    name: 'umdName',
    format: 'umd'
  }
},
{
  input: 'main.js',
  output: {
    file: './dist/bundle.amd.js',
    format: 'amd'
  }
}
];
