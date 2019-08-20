import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Builder from './pages/Builder';

export default function Routes() {
  return (
  <BrowserRouter>
      <Route path='/' exact component={Home} />   
      <Route path='/modelr/builder' component={Builder} /> 
  </BrowserRouter>
  );
}