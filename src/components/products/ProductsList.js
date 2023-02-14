import React from "react";
import ProductCard from "./ProductCard";

function ProductsList() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap  -m-6 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
           
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsList;
