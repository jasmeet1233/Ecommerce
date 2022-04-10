import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import SideBar from './components/cart_SideBar';
import { useUiContext } from './context/UiContext';
import Wishlist from './components/wishlist_sidebar';

function App() {
  const { isSidebarOpen, showWishlist } = useUiContext();
  return (
    <BrowserRouter>
      <div className="relative h-screen w-screen">
        {isSidebarOpen && <SideBar />}
        {showWishlist && <Wishlist />}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:id" component={SingleProduct} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App
