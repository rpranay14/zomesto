import React, { useState } from "react";
import { BiSolidCircle } from "react-icons/bi";

const RatingComponent = () => {
  const [rating, setRating] = useState(1);
  return (
    <div className="ml-3 mt-3">
      <p className="text-gray-400 text-base">Rating</p>
      <p className="text-lg font-semibold">4.0+</p>
      <div className="flex items-center gap-1">
        <BiSolidCircle
          className={rating === 0 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
        <hr
          className={
            rating !== 0
              ? "h-0 w-16 border-2 border-gray-400"
              : "h-0 w-16 border-2 border-red-400"
          }
        />
        <BiSolidCircle
          className={rating === 1 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
        <hr
          className={
            rating !== 1
              ? "h-0 w-16 border-2 border-gray-400"
              : "h-0 w-16 border-2 border-red-400"
          }
        />
        <BiSolidCircle
          className={rating === 2 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
        <hr
          className={
            rating !== 2
              ? "h-0 w-16 border-2 border-gray-400"
              : "h-0 w-16 border-2 border-red-400"
          }
        />
        <BiSolidCircle
          className={rating === 2 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
        <hr
          className={
            rating !== 2
              ? "h-0 w-16 border-2 border-gray-400"
              : "h-0 w-16 border-2 border-red-400"
          }
        />
        <BiSolidCircle
          className={rating === 3 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
        <hr
          className={
            rating !== 3
              ? "h-0 w-16 border-2 border-gray-400"
              : "h-0 w-16 border-2 border-red-400"
          }
        />
        <BiSolidCircle
          className={rating === 4 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
      </div>
    </div>
  );
};

export default RatingComponent;
