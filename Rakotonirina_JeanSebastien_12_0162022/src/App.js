import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/main.css';
import ChooseUserId from './pages/ChooseUserId'
import SwitchBetweenApiAndMock from './pages/SwitchBetweenApiAndMock'
import NotFound from './components/NotFound'
/** 
 *  Injects DOM in HTML root div
 * 
 *  Manages 3 routes :
 *  - '/' calls ChooseUserId component page 
 *  - '/:id' calls GetUserMainData component page
 *  - No path calls component NotFound to display error 404
 *  @return { Component }  SwitchBetweenApiAndMock, ChooseUserId, NotFound
 */
function App() {
   return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                  <ChooseUserId />
            </Route>              
            <Route path='/:id'>
                  <SwitchBetweenApiAndMock />
            </Route>
            <Route>
                  <NotFound />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default App;
