import React from 'react'
import { useFilterContext } from '../../context/FilterContext';

const Sort = () => {
  const {updateSort} = useFilterContext()
  return (
    <select name="cars" id="cars" onChange={updateSort}>
      <option value="recommended" >
        Recommended
      </option>
      <option value="price-lowest" >
        Low to high
      </option>
      <option value="price-highest" >
        High to low
      </option>
    </select>
  );
}

export default Sort