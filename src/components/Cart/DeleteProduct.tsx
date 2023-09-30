import React from 'react';
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteProduct } from "@/store/nextSlice";


interface DeleteProductProps {
  itemId: number;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ itemId }) => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(deleteProduct(itemId))}  className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300">
      <IoMdClose className="mt-[2px]" /> <p>remove</p>
    </div>
  );
};

export default DeleteProduct;
