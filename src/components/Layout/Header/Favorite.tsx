import Link from "next/link";
import { useSelector } from "react-redux";
import { StateProps } from "../../../../type";



const Favorite = () => {
  const { favoriteData } = useSelector(
    (state: StateProps) => state.next
  );

  return (
    <>
      <Link href={"/favorite"} className="relative text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
        <p>Marked</p>
        <p className="text-white font-bold">& Favorite</p>
        {favoriteData.length > 0 && (
          <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
            {favoriteData.length}
          </span>
        )}
      </Link>
    </>
  );
};


export default Favorite;
