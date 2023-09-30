import React from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '@/store/nextSlice';
import { StoreProduct } from '../../../type';
import { adjustQuantityButton } from '@/styles/style';


interface AdjustQuantityProps {
  item: StoreProduct;
}


const AdjustQuantity: React.FC<AdjustQuantityProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdjustQuantity = (type: 'increase' | 'decrease') => {
    const actionType = type === 'increase' ? increaseQuantity : decreaseQuantity;
    dispatch(
      actionType({ ...item, quantity: 1 })
    );
  };

  return (
    <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
      <span onClick={() => handleAdjustQuantity('increase')} className={adjustQuantityButton}>
        <LuPlus />
      </span>
      <span>{item.quantity}</span>
      <span onClick={() => handleAdjustQuantity('decrease')} className={adjustQuantityButton}>
        <LuMinus />
      </span>
    </div>
  );
};

export default AdjustQuantity;
