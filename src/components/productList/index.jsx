import React from 'react'
import { data } from '../../data'
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <div className='flex flex-wrap px-10 pt-10 justify-between'>
      {
        data.map((item) => {
          return (
            <Link to={`/${item.id}`}>
              <div className="w-64 mb-10 h-72 px-2 py-2 border-[1px] border-[#ccc] rounded transition-shadow hover:shadow-2xl">
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
        })
      }
    </div>
  )
}

export default ProductList