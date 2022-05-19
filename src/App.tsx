import React from 'react'
import Main from './pages/Main'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <header style={{ textAlign: 'center' }}>
        <h1>都道府県別人口推移</h1>
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
