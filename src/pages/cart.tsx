import React from "react";
import { StateProps } from "../../type";
import { useSelector } from "react-redux";
import EmptyCart from "@/components/Cart/EmptyCart";
import CartContents from "@/components/Cart/CartContents";
import OrderSummary from "@/components/Cart/OrderSummary";
import ProceedToBuy from "@/components/Cart/ProceedToBuy";



const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
      {productData.length > 0 ? (
        <>
          <CartContents productData={productData} />
          <div className="bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center">
            <div className="flex flex-col gap-4">
              <OrderSummary />
              <ProceedToBuy />
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartPage;
