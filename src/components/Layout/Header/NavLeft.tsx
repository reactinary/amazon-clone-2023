import Image from "next/image";
import logo from "@/images/logo.png";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";



const NavLeft = () => {
  return(
    <>
      {/* logo */}
      <Link href={"/"}  className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
        <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg" />
      </Link>

      {/* delivery */}
      <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
        <SlLocationPin />
        <div className="text-xs">
          <p>Deliver to</p>
          <p className="text-white font-bold uppercase">USA</p>
        </div>
      </div>
    </>
  )

}

export default NavLeft;
