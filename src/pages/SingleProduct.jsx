import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const SingleProduct = () => {
    const [size, setSize] = useState(38)
  const {addToCart} = useCartContext();

  const { id } = useParams();
  const [product] = data.filter((product) => {
    return product.id === Number(id)
  })
  console.log(product)
  return (
    <div className="max-h-screen w-[800px] m-auto my-12">
      <p className="pb-4 pl-6 font-medium">
        <Link to={"/"}>
          {"<-"} <span className="underline">Back Home</span>{" "}
        </Link>
      </p>
      <div className="h-full w-full flex flex-col sm:flex-row">
        <div className="h-4/6 w-1/2">
          <img src={product.image} className="w-3/4 m-auto" />
        </div>

        <div className="my-auto px-4 w-screen pt-4 sm:pt-0 sm:w-auto ">
          <p className="text-center font-bold text-xl pb-6">{product.title}</p>
          <p className="max-w-[500px] font-semibold pb-4">
            {product.description}
          </p>
          <div className="flex pb-6">
            <p className="pr-4 font-extrabold">Select Size: </p>
            <p className="flex w-28 justify-between">
              <p
                className={`px-[2px] py-[1px] border-[1px] border-black rounded-2xl ${
                  size === 38 ? "bg-red-300" : ""
                }`}
                onClick={() => setSize(38)}
              >
                38
              </p>
              <p
                className={`px-[2px] py-[1px] border-[1px] border-black rounded-2xl ${
                  size === 40 ? "bg-red-300" : ""
                }`}
                onClick={() => setSize(40)}
              >
                40
              </p>
              <p
                className={`px-[2px] py-[1px] border-[1px] border-black rounded-2xl ${
                  size === 42 ? "bg-red-300" : ""
                }`}
                onClick={() => setSize(42)}
              >
                42
              </p>
            </p>
          </div>

          <div className="flex justify-between">
            <p className="inline-block font-bold">Price: ${product.price}</p>
            <button className="bg-red-500 px-4 py-1 rounded-xl mr-12 text-white font-bold" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
