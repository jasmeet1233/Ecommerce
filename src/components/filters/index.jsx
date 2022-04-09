import React, {useState} from 'react'


const brands = [
  { name: "Max", isSelected: false },
  { name: "Levis", isSelected: false },
];

const category = ["All", "Men", "Women"];

const Filters = () => {
    const [isSelected, setIsSelected] = useState("All");

  return (
    <div className="border-r-[1px] border-gray-400 sm:w-96 h-[full] mt-10 pr-2 sm:pr-0">
      <div className="pb-8">
        <h1 className="font-bold pb-2">Category</h1>
        {category.map((item) => {
          return (
            <p className={`pb-1 ${isSelected === item ? "underline" : ""}`}>
              {item}
            </p>
          );
        })}
      </div>

      <div>
        <h1 className="font-bold pb-2">Brands</h1>
        <div>
          {brands.map((brand) => {
            return (
              <div className="pb-1">
                <input
                  type="checkbox"
                  defaultChecked={brand.isSelected}
                  onChange={() => console.log("wassup")}
                  className="mr-1"
                />
                {brand.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 py-1 px-2 rounded w-3/4  bg-red-600">
        <button className="font-semibold text-white ">Clear Filters</button>
      </div>
    </div>
  );
}

export default Filters