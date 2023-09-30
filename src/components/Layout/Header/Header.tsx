import NavLeft from "./NavLeft";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import Favorite from "./Favorite";
import Cart from "./Cart";


import BottomHeader from "./BottomHeader";


const Header = () => {
  return (
    <>
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        <NavLeft />
        {/* SEARCHBAR TO FIX */}
        <SearchBar />
        <SignIn />
        <Favorite />
        <Cart />
      </div>
    </div>
    <BottomHeader />
    </>
  );
};

export default Header;
