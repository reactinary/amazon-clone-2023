import React from "react";
import { useDispatch } from "react-redux";
import { addToFavorite } from "@/store/nextSlice";
import { FaHeart } from "react-icons/fa";
import { smallButtonAdd } from "../../styles/style";
import { ProductProps } from "../../../type";


const AddToFavorite = ({ product }: { product: ProductProps }) => {
  const dispatch = useDispatch();

  return (
    <span className={smallButtonAdd}
      onClick={() => dispatch(
        addToFavorite(product)
      )}>
      <FaHeart />
    </span>
  );
};

export default AddToFavorite;
