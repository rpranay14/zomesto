import React from "react";

const SortByComponent = () => {
  return (
    <div className="text-gray-700  ml-8 text-xl mt-5 flex flex-col gap-4">
      <div className="flex gap-5">
        <input type="radio" name="sortby" value="Popular" />
        <label>Popularity</label>
      </div>

      <div className="flex gap-5">
        <input type="radio" name="sortby" value="Popular" />
        <p>Rating:High to Low</p>
      </div>
      <div className="flex gap-5">
        <input type="radio" name="sortby" value="Popular" />
        <p>Delivery Time</p>
      </div>
      <div className="flex gap-5">
        <input type="radio" name="sortby" value="Popular" />
        <p>Cost:High to Low</p>
      </div>
      <div className="flex gap-5">
        <input type="radio" name="sortby" value="Popular" />
        <p>Cost:Low to High</p>
      </div>
    </div>
  );
};

export default SortByComponent;
