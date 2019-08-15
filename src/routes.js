import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Engine from './pages/Engine';
import Builder from './pages/Builder';

export default function Routes() {
  return (
  <BrowserRouter>
      <Route path='/' exact component={Home} />      
      <Route path='/modelr' exact component={Home} />
      <Route path='/modelr/engine' component={Engine} />      
      <Route path='/builder/engine' component={Builder} />
  </BrowserRouter>
  );
}