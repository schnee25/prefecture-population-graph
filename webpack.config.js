// pathモジュールを読み(output.pathに絶対パスを指定するため)
const path = require('path')

module.exports = {
  // モードの設定。指定可能な値は、none, development ,production（デフォルト）
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development',
  // アプリケーションが実行を開始されるポイント(エントリーポイント)
  // 配列で指定すると、すべての項目が実行される
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: './src/app.tsx',
  output: {
    filename: 'bundle.js',
    // ビルド後のファイルが出力される"絶対パス"ディレクトリ
    // https://webpack.js.org/configuration/output/#outputpath
    // path: path.join(__dirname, 'public/js'),
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.scss$/, use: 'css-loader' },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ['web', 'es5'],
}
