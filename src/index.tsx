import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const homeUrl = process.env.PUBLIC_URL
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
