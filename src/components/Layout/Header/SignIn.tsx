import Image from "next/image";
import { BiCaretDown } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { StateProps } from "../../../../type";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { addUser } from "@/store/nextSlice";



const SignIn = () => {
  const { data: session } = useSession();

  const { userInfo } = useSelector(
    (state: StateProps) => state.next
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [dispatch, session]);


  return (
  <>
    {userInfo ? (
      <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
        <Image src={userInfo.image} alt="userImage" className="w-8 h-8 rounded-full object-cover" width={40} height={40}/>
        <div className="text-xs text-gray-100 flex flex-col justify-between">
          <p className="text-white font-bold">{userInfo.name}</p>
          <p>{userInfo.email}</p>
        </div>
      </div>
    ) : (
      <div onClick={() => signIn()}  className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
        <p>Hello, sign in</p>
        <p className="text-white font-bold flex items-center"> Account & Lists{" "}
          <span>  <BiCaretDown />  </span>
        </p>
      </div>
    )}
  </>
  );
}


export default SignIn;
