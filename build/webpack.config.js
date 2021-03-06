const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();


let config = {
  entry: './build/src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "index.html"
    }),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin()
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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'output')
  }
};
let smpconfig = smp.wrap(config);
module.exports = smpconfig;