import React from 'react'
import Main from './pages/Main'
import reportWebVitals from './reportWebVitals'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header style={{ textAlign: 'center' }}>
        <h1>都道府県別人口推移</h1>
      </header>
      <Main />
    </div>
  )
}

reportWebVitals(console.log)
export default App
