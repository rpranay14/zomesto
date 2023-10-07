import React, { useState } from "react";
import { BiSolidCircle } from "react-icons/bi";

const RatingComponent = () => {
  const [rating, setRating] = useState(1);

  return (
    <div className="ml-3 mt-3">
      <p className="text-gray-400 text-base">Rating</p>
      {rating === 0 ? <p className="text-lg font-semibold">Any</p> : <></>}
      {rating === 1 ? <p className="text-lg font-semibold">3.5+</p> : <></>}
      {rating === 2 ? <p className="text-lg font-semibold">4.0+</p> : <></>}
      {rating === 3 ? <p className="text-lg font-semibold">4.5+</p> : <></>}

      <div className="flex items-center gap-1 mt-32 ml-12 cursor-pointer">
        <BiSolidCircle
          onClick={() => setRating(0)}
          className={rating <= 0 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
        <hr
          onClick={() => setRating(0)}
          className={
            rating != 0
              ? "h-0 w-16 border-2 border-gray-400"
              : "h-0 w-16 border-2 border-red-400"
          }
        />
        <BiSolidCircle
          onClick={() => setRating(1)}
          className={rating <= 1 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
        <hr
          onClick={() => setRating(1)}
          className={
            rating > 1
              ? "h-0 w-16 border-2 border-gray-400"
              : "h-0 w-16 border-2 border-red-400"
          }
        />
        <BiSolidCircle
          onClick={() => setRating(2)}
          className={rating <= 2 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
        <hr
          onClick={() => setRating(2)}
          className={
            rating > 2
              ? "h-0 w-16 border-2 border-gray-400"
              : "h-0 w-16 border-2 border-red-400"
          }
        />
        <BiSolidCircle
          onClick={() => setRating(3)}
          className={rating <= 3 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
        <hr
          onClick={() => setRating(3)}
          className={
            rating > 3
              ? "h-0 w-16 border-2 border-gray-400"
              : "h-0 w-16 border-2 border-red-400"
          }
        />
        <BiSolidCircle
          onClick={() => setRating(3)}
          className={rating <= 4 ? "text-red-400 w-5 h-5" : "text-gray-400"}
        />
      </div>
      <div className="flex ml-12 ">
        <p className="mr-[3.8rem]">Any</p>
        <p className="mr-[4.5rem]">3.5</p>
        <p className="mr-[4.5rem]">4.0</p>
        <p className="mr-[4.5rem]">4.5</p>
        <p className="mr-[4.3rem]">5.0</p>
      </div>
    </div>
  );
};

export default RatingComponent;
