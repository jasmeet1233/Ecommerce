import React, {useState, useContext, useEffect} from 'react'
const WishListContext = React.createContext()

export const WishList = ({children}) => {
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishList))
    }, [wishList])

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




