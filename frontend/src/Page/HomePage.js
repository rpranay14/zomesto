import React from "react";
import imageURL from "../assets/zomato_header";
import { AiOutlineSearch } from "react-icons/ai";
const HomePage = () => {
  return (
    <>
      <div>
        <header
          className="py-2 lg:py-5 pb-12 lg:pb-16 px-5 lg:px-24 bg-cover bg-center h-[70%]  text-white "
          style={{ backgroundImage: `url(${imageURL})` }}
        >
          <nav className="flex justify-between">
            <p>Get the app</p>
            <div className="flex justify-between gap-5 font-semibold">
              <p>Login</p>
              <p>Signup</p>
            </div>
          </nav>
          <p className="text-center mt-8 lg:mt-5 text-4xl lg:text-8xl font-semibold italic">
            zomesto
          </p>
          <p className="text-center mt-6 text-md lg:text-3xl md:text-xl ">
            Explore the finest cuisine and beverages in Kota
          </p>
          <div className="flex flex-col  justify-center items-center mt-7">
            <div className="flex text-black bg-white w-[100%] md:w-[70%] lg:w-[60%] xl:w-[55%]  items-center gap-4 px-4 py-2 rounded-md">
              <AiOutlineSearch className="w-6 h-6" />
              <input
                className="w-[100%] outline-none text-lg"
                placeholder="Search for restaurant, cuisine or dish"
              ></input>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default HomePage;
