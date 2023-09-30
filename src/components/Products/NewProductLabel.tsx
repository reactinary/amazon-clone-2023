import React from 'react';
import FormattedPrice from '../FormattedPrice';
import { ProductProps } from '../../../type';


interface NewProductLabelProps {
  product: ProductProps;
}


const NewProductLabel: React.FC<NewProductLabelProps> = ({ product }) => {
  return product.isNew && (
    <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
      !save <FormattedPrice amount={product.oldPrice - product.price} />
    </p>
  );
}

export default NewProductLabel;
