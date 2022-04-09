import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
    <div className="relative h-screen w-screen">
      {/* <SideBar /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:id" component={SingleProduct} exact />  
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App
