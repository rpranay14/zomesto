import React from "react";
import { AiFillStar } from "react-icons/ai";

const RestaurantCard = ({ image, restroname, rating, costforone, cuisine }) => {
  return (
    <div className="w-[80%] sm:w-[45%] md:w-[45%] lg:w-[30%] p-3 mt-5 border shadow-xl lg:shadow-none lg:border-white rounded-xl  hover:border-gray-300 hover:shadow-xl cursor-pointer">
      <img
        src={image}
        className="w-[100%] h-[14rem] sm:h-[14rem] md:h-[14rem] lg:h-[12rem] rounded-xl"
        loading="lazy"
      ></img>
      <div className="flex justify-between items-center mt-2">
        <p className=" font-semibold text-lg">{restroname}</p>
        <p className="text-white flex gap-1 items-center bg-green-600 font-semibold px-1 rounded-md">
          {rating}
          <AiFillStar />
        </p>
      </div>
      <div className="flex text-sm justify-between items-center mt-1 text-gray-500">
        <p className="w-40  truncate ">{cuisine}</p>
        <p>₹250 for one</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
