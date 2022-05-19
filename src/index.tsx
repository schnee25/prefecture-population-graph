import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'

const homeUrl = process.env.PUBLIC_URL

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={homeUrl} element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
