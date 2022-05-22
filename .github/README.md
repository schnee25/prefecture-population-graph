# prefecture-population-graph 🗾👶🏻👩🏻🧑🏻🧑🏻‍🦳👱🏼👱🏽‍♀️👩🏾🧒🏻🧓🏼🥷🏻

Frontend of [prefecture-population-graph.herokuapp.com](https://prefecture-population-graph.herokuapp.com/)

# What is prefecture-population-graph

都道府県を選択するとその人口推移グラフが表示されます。🗾📈📉
[![Image from Gyazo](https://i.gyazo.com/22ff62bafe07399a47734bc8c1e1f83f.gif)](https://prefecture-population-graph.herokuapp.com/)

## 工夫した点 💪🏻🥺💮

- TypeScript を使用した点 👏🏻😣🌀
- APIKey をちゃんと環境変数で使った点 ㊙️ 🔐💮
- ファビコンとタイトルを設定した点 🗾🖥🌐
- 各項目のタイトルのデザイン 📰💕
- 選択済みの都道府県が一覧で表示される点 📝🗾
- 選択済みのチェックボックスの背景色が変わる点 ✔️✅
- グラフのタイトルがリアクティブに変わる点 🖌🤔⚛️
- README をちゃんと書いた！ 📝😭💦💮

## 反省点
- heroku側の問題に気づかず、メインブランチで色々試し他結果、コミット履歴を汚してしまった点😢
- 開発初期にAPIキーをベタ打ちしてしまって、その上Gitにも上げてしまっていた点⚠️
 
## Build 前に必要なこと

[RESAS API](https://opendata.resas-portal.go.jp/) に登録し API キーを取得

リポジトリ直下に.env ファイルを作成し

```
REACT_APP_RESAS_API_KEY = 'Your APIKey'
```

と記載

## Available Scripts 🐈🐾

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
