import React from "react";
import { ProductProps } from "../../../type";
import { bigButtonAdd } from "@/styles/style";
import AddToCart from "./AddToCart";
import AddToFavorite from "./AddToFavorite";
import ProductDescription from "./ProductDescription";
import ProductImageLink from "./ProductImageLink";
import NewProductLabel from "./NewProductLabel";


// Tried to add this in styles, but it seems that the absolute property does not work in styles.js
const appearingAddButtons = "w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300"



const Products = ({ productData }: any) => {
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map((product: ProductProps) => (
        <div key={product._id} className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden">
          <div className="relative w-full h-[260px]">
            <ProductImageLink product={product} />
            <div className={appearingAddButtons}>
              <AddToCart product={product} />
              <AddToFavorite product={product} />
            </div>
            <NewProductLabel product={product} />
          </div>

          <hr />
          <div className="px-4 py-3 flex flex-col gap-1">
            <ProductDescription product={product} />
            <AddToCart product={product} className={bigButtonAdd} label="add to cart" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
