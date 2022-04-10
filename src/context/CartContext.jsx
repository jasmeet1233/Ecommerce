import React, {useContext, useState} from 'react'
 import { useUiContext } from './UiContext';

const CartContextData = React.createContext();

export const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const { toggleSidebar } = useUiContext(); 
    

    const addToCart = (item) => {
        setCart([...cart, item])
        setTimeout(() => {
            toggleSidebar();
        }, 600)
    }

    const deleteProduct = (id) => {
        const updatedCart = cart.filter((product) => {
            return product.id !== id
        })
        setCart(updatedCart)
    }

  return (
    <CartContextData.Provider value={{cart, addToCart, deleteProduct}}>
        {children}
    </CartContextData.Provider>
  )
}

export const useCartContext = () => {
    return useContext(CartContextData)
}