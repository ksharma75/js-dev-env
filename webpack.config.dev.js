/*import path from 'path';

export default{
  //debug:true,
  devtool:'inline-source-map',
  //noInfo:false,
  entry:[
    path.resolve(__dirname,'src/index')
  ],
  target:'web',
  output:{
    path:path.resolve(__dirname,'src'),
    publicPath:'/',
    filenmae:'bundle.js'
  },
  plugins:[
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  module:{
    loaders:[
      {test: /\.js$/,exclude: /node_modules/,loaders:['babel']},
      {test:/\.css$/,loaders:['style','css']}
    ]
  }
}*/

var path = require('path');

module.exports = {
  mode: 'development',
  devtool:'inline-source-map',
  target:'web',
  entry: [path.resolve(__dirname,'src/index')],
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' }
      //{ test: /\.js$/, ,exclude: /node_modules/, use: 'js-loader' }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath:'/',
    filename: 'bundle.js'
  }
};
