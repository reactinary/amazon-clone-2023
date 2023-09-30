import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductProps } from "../../../type";


interface ProductImageProps {
  product: ProductProps;
}


const ProductImageLink: React.FC<ProductImageProps> = ({ product }) => {
  return (
    <Link href={{
      pathname: `/${product._id}`,
      query: {
        _id: product._id,
        brand: product.brand,
        category: product.category,
        description: product.description,
        image: product.image,
        isNew: product.isNew.toString(),
        oldPrice: product.oldPrice.toString(),
        price: product.price.toString(),
        title: product.title
      }
    }}>
      <Image src={product.image} alt="productImage" width={300} height={300} className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300" />
    </Link>
  );
}

export default ProductImageLink;
