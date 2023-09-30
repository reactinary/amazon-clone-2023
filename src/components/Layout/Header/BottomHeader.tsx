import { LuMenu } from "react-icons/lu";
import { StateProps } from "../../../../type";
import { signOut } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "@/store/nextSlice";
import { menuItemBottomHeader } from "@/styles/style";



const BottomHeader = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: StateProps) => state.next);

  const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  };


  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <p className={menuItemBottomHeader}> <LuMenu className="text-xl" /> All </p>
      <p className={menuItemBottomHeader}> Todays Deals </p>
      <p className={menuItemBottomHeader}> Customer Service</p>
      <p className={menuItemBottomHeader}> Registry </p>
      <p className={menuItemBottomHeader}> Gift Cards </p>
      <p className={menuItemBottomHeader}> Sell </p>

      {userInfo && (
        <button onClick={handleSignOut} className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300">
          Sign Out
        </button>
      )}
      <p className={`${menuItemBottomHeader} ml-8`}> Made with ❤️ by Maxime Montfort ⚛️ </p>
    </div>
  );
};

export default BottomHeader;
