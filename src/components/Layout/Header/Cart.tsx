import Image from "next/image";
import cartIcon from "@/images/cartIcon.png"
import Link from "next/link";
import { useSelector } from "react-redux";
import { StateProps } from "../../../../type";


const Cart = () => {
  const { productData } = useSelector(
    (state: StateProps) => state.next
  );

  return (
    <>
      <Link href={"/cart"} className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
        <Image className="w-auto object-cover h-8" src={cartIcon} alt="cartImg" width={40} height={40}/>
        <p className="text-xs text-white font-bold mt-3">Cart</p>
        <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
          {productData ? productData.length : 0}
        </span>
      </Link>
    </>
  );
};

export default Cart;
