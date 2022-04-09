import React from 'react'
import { data } from '../../data';

// {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },

const SideBar = () => {
  return (
    <div className="fixed z-10 top-0 left-0 w-screen h-screen overflow-auto bg-[rgba(0,0,0,0.4)]">
      <div className="bg-[#fefefe] w-1/2 h-screen overflow-scroll absolute right-0 ">
        <div className='relative'>
          <h2 className="text-center text-2xl font-bold">Cart</h2>
          <button className='absolute left-4 top-2'>X</button>
        </div>

        {data.map((product) => {
          return (
            <div className="flex bg-gray-200 mx-7 py-1 my-3 rounded justify-between">
              <div className="w-14 rounded ml-2">
                <img src={product.image} className="rounded" />
              </div>
              <div>
                <div className="min-w-[420px] max-w-[420px]">
                  {product.title}
                </div>
                <div>{product.price}</div>
              </div>

              <div className="mr-8 flex align-middle">
                <button>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar