import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true,
}

export default {
  resolve: {
    extensions: ['', '.js', '.jsx', 'json'],
  },
  debug: true,
  devtool: 'cheap-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: [
    // must be first entry to properly set public path
    './src/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    './src/index',
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS), // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      inject: true,
    }),
  ],
  module: {
    loaders: [
      { test: /\.js(x)?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' },
      { test: /\.woff(2)?(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=[name].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-sfnt&name=[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=[name].[ext]' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'url?limit=10000&name=[name].[ext]' },
      { test: /\.ico$/, loader: 'url?name=[name].[ext]' },
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/styles'),
        loaders: ['style', 'css?&sourceMap'],
      },
    ],
  },
}
