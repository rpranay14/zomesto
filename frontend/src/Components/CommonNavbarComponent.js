import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { BiSolidUser } from "react-icons/bi";

const CommonNavbarComponent = () => {
  const progress = useSelector((state) => state.loadingBar.loadingProgress);
  return (
    <>
      <LoadingBar color="#f44336" progress={progress} />

      <div className="flex items-center justify-between py-2 lg:py-4 px-4  md:px-16 lg:px-32 shadow-md">
        <div>
          <p className="font-extrabold text-2xl lg:text-3xl italic">zomesto</p>
        </div>
        <div className="hidden lg:flex shadow-md text-black bg-white w-[100%] md:w-[70%] lg:w-[50%] xl:w-[50%]  items-center gap-4 px-4 py-2 rounded-md">
          <AiOutlineSearch className="w-6 h-6" />
          <input
            className="w-[100%] outline-none text-lg"
            placeholder="Search for restaurant, cuisine or dish"
          ></input>
        </div>
        <div className="flex  items-center gap-7 text-gray-400 text-lg justify-between">
          <p className="hidden lg:block cursor-pointer">Login</p>
          <p className="hidden lg:block cursor-pointer">Signup</p>
          <BiSolidUser className="lg:hidden w-8 h-8 border rounded-full p-1 text-red-500 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default CommonNavbarComponent;
