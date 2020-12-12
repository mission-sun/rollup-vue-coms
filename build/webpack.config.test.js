const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const  HardSourceWebpackPlugin = require('hard-source-webpack-plugin');



let config = {
  mode: 'development',
  optimization: {
    usedExports: true, // 不导出模块中未使用的代码
    providedExports: false, // 代码不会进行压缩
    splitChunks: { // 代码去重，提取公共的代码
      chunks: 'all'
    }
  },
  // mode: 'production',
  entry: {
    one: './build/src/index.demo.js',
    another: './build/src/index.demo1.js'
  },
  // externals: [{
  //   lodash: '_' // 引用外链
  // }],
  // 解析模块路径
  resolve:{

  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "index.html"
    }),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
    new HardSourceWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.styl/,
        use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'stylus-loader'
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "output"),
    compress: true,
    port: 9001,
    host: "127.0.0.1",
    hot: true
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'output')
  }
};
let smpconfig = smp.wrap(config);
module.exports = smpconfig;