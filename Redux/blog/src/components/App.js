import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './Menu'
import Usuario from './usuario'
import Publicaciones from './Publicaciones'

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
        <Route exact path="/Tareas" component={Tareas}/>
        <Route exact path="/publicaciones/:key" component={Publicaciones}/>

 
      </Switch>
    </BrowserRouter>

  )

}

export default App