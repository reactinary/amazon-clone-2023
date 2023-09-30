import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/nextSlice";
import { HiShoppingCart } from "react-icons/hi";
import { ProductProps } from "../../../type";
import { smallButtonAdd } from "../../styles/style";


interface AddToCartProps {
  product: ProductProps;
  className?: string;
  label?: string;
}


const AddToCart: React.FC<AddToCartProps> = ({ product, className = smallButtonAdd, label }) => {
  const dispatch = useDispatch();

  return (
    <button className={className}
      onClick={() => dispatch(
        addToCart({ ...product, quantity: 1 })
      )}>
      {label ? label : <HiShoppingCart />}
    </button>
  );
};

export default AddToCart;
