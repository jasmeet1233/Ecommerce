import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { FilterProvider } from "./context/FilterContext";
import {UiContext} from './context/UiContext'
import {CartContext} from './context/CartContext'
import {WishList} from './context/WishListContext'

ReactDOM.render(
  <React.StrictMode>
    <UiContext>
      <FilterProvider>
        <CartContext>
          <WishList>
            <App />
          </WishList>
        </CartContext>
      </FilterProvider>
    </UiContext>
  </React.StrictMode>,
  document.getElementById("root")
);
