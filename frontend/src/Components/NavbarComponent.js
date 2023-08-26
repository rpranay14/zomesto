import React from "react";

const NavbarComponent = () => {
  return (
    <div className="flex justify-between bg-red-400  py-2 px-5 items-center">
      <p className="font-bold italic text-xl text-white">Zomesto</p>
      <div className="flex justify-between space-x-5 items-center text-white">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Login</p>
        <p className="cursor-pointer">SignUp</p>
      </div>
    </div>
  );
};

export default NavbarComponent;
