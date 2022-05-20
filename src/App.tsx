import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopPage from './pages/TopPage'

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={TopPage} />
      </Switch>
    </div>
  </BrowserRouter>
)
export default App
