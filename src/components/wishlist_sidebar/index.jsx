import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";
import { useUiContext } from "../../context/UiContext";
import { useWishList } from "../../context/WishListContext";

const Wishlist = () => {
  const { toggleShowWishlist } = useUiContext();
  const {addToWishlist, deleteWishList, wishList} = useWishList();
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)]">
      <div className="bg-[#fefefe] sm:w-1/2 w-full h-full sm:h-screen sm:overflow-scroll   absolute right-0 ">
        <div className="relative pb-5 pt-2">
          <h2 className="text-center text-2xl font-bold">Wishlist</h2>
          <button
            className="absolute left-4 top-2 pt-1"
            onClick={toggleShowWishlist}
          >
            <AiOutlineClose size="20" />
          </button>
        </div>

        {wishList.length === 0 && (
          <div className="flex justify-center align-middle pt-60 text-purple-500 font-semibold">
            Wishlist is Empty
          </div>
        )}

        {wishList.map((product) => {
          return (
            <div className="flex bg-gray-200 mx-7 py-1 my-3 rounded justify-between " key = {product.id}>
              <div className="w-14 rounded ml-2 transition-all duration-700">
                <img src={product.image} className="rounded" />
              </div>
              <div>
                <div className="sm:min-w-[420px] sm:max-w-[420px] min-w-[200px] font-semibold">
                  {product.title}
                </div>
                <div className="font-bold pt-1 pl-1">${product.price}</div>
              </div>

              <div
                className="sm:mr-8 flex align-middle"
                onClick={() => deleteWishList(product.id)}
              >
                <button className="pr-2 sm:pr-0">
                  <AiFillDelete size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
