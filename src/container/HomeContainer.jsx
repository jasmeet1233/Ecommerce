import React from 'react'
import Filters from '../components/filters'
import Sort from '../components/sort'
import ProductList from '../components/productList'

const HomeContainer = () => {
  return (
    <div className="sm:px-40 pl-4 flex">
      <Filters />

      <div>
        <div className=' pt-4 text-right pr-36'>
          <Sort />
        </div>
        <ProductList />
      </div>
    </div>
  );
}

export default HomeContainer