import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Builder from './pages/Builder';

export default function Routes() {
  return (
  <BrowserRouter>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/modelR' exact component={Home} />   
      <Route path='/modelr/builder' component={Builder} /> 
      </Switch>
  </BrowserRouter>
  );
}