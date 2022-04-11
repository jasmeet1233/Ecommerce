import React, {useState, useContext} from 'react'
import { useUiContext } from './UiContext'

const WishListContext = React.createContext()

export const WishList = ({children}) => {
    const [wishList, setWishList] = useState([]);

    const addToWishlist = (obj) => {
        setWishList([...wishList, obj])
    }

    const toggleWishedItem = (id, obj) => {
        const list = wishList.filter((item) => {
            return item.id === id
        })
        if(list.length > 0){
            const updatedList = wishList.filter((item) => {
              return item.id !== id;
            });
            setWishList(updatedList)
        } else {
            setWishList([...wishList, obj])
        }
    }

    const deleteWishList = (id) => {
        const updatedList = wishList.filter((item) => {
            return item.id !== id
        })
        setWishList(updatedList)
    }

  return (
    <WishListContext.Provider value={{addToWishlist, deleteWishList, wishList, toggleWishedItem}}>
        {children}
    </WishListContext.Provider>
  )
}

export const useWishList = () => {
    return useContext(WishListContext)
}

export default WishList




