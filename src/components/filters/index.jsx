import React, {useState} from 'react'
import { useFilterContext } from '../../context/FilterContext';
import { brands, category } from '../../utils/filter';

const Filters = () => {
    const [isSelected, setIsSelected] = useState("All");
    const {updateFilters, clearFilters} = useFilterContext()

  return (
    <div className="border-r-[1px] border-gray-400 min-w-[150px] max-w-[150px] h-[full] mt-10 pr-2 sm:pr-0">
      <div className="pb-8">
        <h1 className="font-bold pb-2">Category</h1>
        {category.map((item, i) => {
          return (
            <button className={`block pb-1 ${isSelected === item ? "underline" : ""}`} name = 'category' onClick={(e) => {
              updateFilters(e);
              setIsSelected(item)
            }
              } key = {i}>
              {item}
            </button>
          );
        })}
      </div>

      <div>
        <h1 className="font-bold pb-2">Brands</h1>
        <div>
          {brands.map((brand, i) => {
            return (
              <div className="pb-1" key={i}>
                <input
                  type="checkbox"
                  defaultChecked={brand.isSelected}
                  onChange={updateFilters}
                  className="mr-1"
                  defaultValue={brand.name}
                  name = 'brands'
                />
                {brand.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 py-1 pl-3 rounded w-28  bg-red-600">
        <button className="font-semibold text-white " onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  );
}

export default Filters