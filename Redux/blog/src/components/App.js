import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './Menu'
import Usuario from './usuario'

const Tareas = () => {
  return(
    <div>Tareas</div>
  )
}

const App = () => {
  return(
    <BrowserRouter>
    <Menu/>
      <Switch>
        <Route exact path="/" component={Usuario}/>
        <Route exact path="/" component={Tareas}/>
 
      </Switch>
    </BrowserRouter>

  )

}

export default App