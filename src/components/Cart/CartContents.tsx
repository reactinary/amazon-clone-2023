import React from 'react';
import Image from "next/image";
import FormattedPrice from '../FormattedPrice';
import AdjustQuantity from './AdjustQuantity';
import DeleteProduct from './DeleteProduct';
import CartProductDetails from './CartProductDetails';
import ResetCart from './ResetCart';
import { StoreProduct } from '../../../type';


interface CartContentsProps {
  productData: StoreProduct[];
}

const CartContents: React.FC<CartContentsProps> = ({ productData }) => {
  return (
    <div className="bg-white col-span-4 p-4 rounded-lg">
      <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
        <p className="text-2xl font-semibold text-amazon_blue">Shopping Cart</p>
        <p className="text-lg font-semibold text-amazon_blue">Subtitle</p>
      </div>
      <div className="pt-2 flex flex-col gap-2">
        {productData.map((item: StoreProduct) => (
          <div key={item._id} className="bg-gray-100 rounded-lg flex items-center gap-4">
            <Image src={item.image} alt="productImage" width={150} height={150} className="object-cover"/>
            <div className="flex items-center px-2 gap-4">
              <div className="flex flex-col gap-1">
                <CartProductDetails item={item} />
                <div className="flex items-center gap-6">
                  <AdjustQuantity item={item} />
                  <DeleteProduct itemId={item._id} />
                </div>
              </div>
              <div className="text-lg font-semibold text-amazon_blue">
                <FormattedPrice amount={item.price * item.quantity} />
              </div>
            </div>
          </div>
        ))}
        <ResetCart />
      </div>
    </div>
  );
};

export default CartContents;
