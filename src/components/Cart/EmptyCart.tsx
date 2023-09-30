import React from 'react';
import Link from "next/link";


const EmptyCart: React.FC = () => {
  return (
    <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
      <h1 className="text-lg font-medium">Your cart is empty!</h1>
      <Link href={"/"}>
        <button className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black">
          go to shopping
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
