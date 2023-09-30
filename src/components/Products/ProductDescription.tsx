import React from "react";
import { ProductProps } from "../../../type";
import FormattedPrice from "../FormattedPrice";

interface ProductDescriptionProps {
  product: ProductProps;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <>
      <p className="text-xs text-gray-500 tracking-wide">{product.category}</p>
      <p className="text-base font-medium">{product.title}</p>
      <p className="flex items-center gap-2">
        <span className="text-sm line-through"><FormattedPrice amount={product.oldPrice} /></span>
        <span className="text-amazon_blue font-semibold"><FormattedPrice amount={product.price} /></span>
      </p>
      <p className="text-xs text-gray-600 text-justify">{product.description.substring(0, 120)}</p>
    </>
  );
};

export default ProductDescription;
