import React from "react";
import ProductsList from "../components/products/ProductsList";
import { HiOutlineSearch } from "react-icons/hi";
function Shop() {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container flex md:flex-row flex-col py-24 px-2 mx-auto items-center justify-center">
          <div className="md:basis-1/4 flex justify-start   ">
            <select
              className="  block 
      w-40
      pl-4
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      
      focus:shadow-md focus:bg-white focus:outline-none"
            >
              <option value="A">CategoryA</option>
              <option value="A">CategoryB</option>
              <option value="A">CategoryC</option>
            </select>
          </div>
          <div className="md:basis-1/4   flex justify-start  ">
            <select
              className="  block
      w-40
      pl-4
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      
      focus:shadow-md focus:bg-white focus:outline-none"
            >
              <option value="A">CategoryA</option>
              <option value="A">CategoryB</option>
              <option value="A">CategoryB</option>
            </select>
          </div>
          <div className="md:basis-1/2  flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border">
            <button
              type="submit"
              class="flex items-center justify-center px-4 py-3"
            >
              <HiOutlineSearch />
            </button>
            <input
              class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="search"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>
      </section>
      <ProductsList />
    </>
  );
}

export default Shop;
