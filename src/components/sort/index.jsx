import React from 'react'

const Sort = () => {
  return (
    <select name="cars" id="cars">
      <option value="recommended">Recommended</option>
      <option value="lh">Low to high</option>
      <option value="hl">High to low</option>
    </select>
  );
}

export default Sort