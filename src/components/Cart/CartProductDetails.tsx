import React from 'react';
import FormattedPrice from '../FormattedPrice';
import { StoreProduct } from '../../../type';


interface ProductDetailsProps {
  item: StoreProduct;
}


const CartProductDetails: React.FC<ProductDetailsProps> = ({ item }) => {
  return (
    <>
      <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
      <p className="text-sm text-gray-600">{item.description}</p>
      <p className="text-sm text-gray-600">
        Unit Price{" "}
        <span className="font-semibold text-amazon_blue">
          <FormattedPrice amount={item.price} />
        </span>
      </p>
    </>
  );
};

export default CartProductDetails;
