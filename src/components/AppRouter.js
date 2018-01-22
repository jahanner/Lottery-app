import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import EntryPage from './EntryPage.js';
import StatusPage from './StatusPage.js';
import '../styles/App.css';


const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Switch>
      <Route path='/' component={EntryPage} exact={true}/>
      <Route path='/status' component={StatusPage} />
    </Switch>
  </div>
  </BrowserRouter>
);

export default AppRouter;
