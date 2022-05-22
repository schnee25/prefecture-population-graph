// pathモジュールを読み(output.pathに絶対パスを指定するため)
const path = require('path')

module.exports = {
  mode: 'development',

  entry: './src/app.tsx',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.scss$/, use: 'css-loader' },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  target: ['web', 'es5'],
}
