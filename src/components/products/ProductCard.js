import React from "react";
import { BsBagPlus, BsHeart } from "react-icons/bs";
function ProductCard() {
  return (
    <>
      <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden my-4 mx-1 ">
        <a className="block relative h-48 rounded overflow-hidden " href="/">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/420x260"
          />
        </a>
        <div className="my-4 text-left mx-2 cursor-default">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <div className="flex items-center justify-between ">
            <p className="mt-1 font-semibold text-lg">
              16.00 <span class="text-sm font-semibold">€</span>
            </p>
            <div className="flex items-center justify-between cursor-pointer  ">
              <BsHeart size={20} />
              <BsBagPlus size={20} className="ml-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
