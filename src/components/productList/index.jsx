import React from 'react'
import { Link } from 'react-router-dom'
import { useFilterContext } from '../../context/FilterContext'
import Heart from './Heart'

const ProductList = () => {
  const { filtered_products, toggleWishlist } = useFilterContext();
    
  const addToWishlist = (id) => {
    toggleWishlist(id)
  }

  return (
    <div className="flex flex-wrap px-10 pt-6 justify-between">
      {filtered_products.map((item) => {
        return (
          <Link to={`/${item.id}`}>
            <div className="w-64 mb-10 h-72 px-2 mr-2 py-2 border-[1px] border-[#ccc] rounded transition-shadow hover:shadow-2xl relative">
              <Heart onClick = {addToWishlist} id = {item.id} color = {item.inWishlist? 'yellow' : 'black'}/>
              <img src={item.image} className="h-3/4 m-auto" />
              <p className="max-w-[250px] text-center pt-4 font-medium">
                {item.title}
              </p>
              <p className="text-center pt-2 font-semibold">
                Price: ${item.price}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductList