import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';
import Register from '../container/Register';
import Player from '../container/Player';
import NotFound from '../container/NotFound';

import Layout from '../components/Layout';

const App = () =>(

    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/player/:id" component={Player}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>

);

export default App;