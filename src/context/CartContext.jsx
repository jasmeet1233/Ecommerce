import React, {useContext, useState} from 'react'

const CartContextData = React.createContext();

export const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item])
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