import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';

function App() {
   return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/:id'>
                  <Home />
            </Route>              
        </Switch>
    </BrowserRouter>
    )
}

export default App;
