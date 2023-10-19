import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../../../redux/ActionCreators";

const SortByComponent = () => {
  const value = useSelector((state) => state.filter.filter.sortBy);

  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");
  const handleChange = (e) => {
    dispatch(addFilter({ sortBy: e }));
  };
  return (
    <div className="text-gray-700  ml-8 text-xl mt-5 flex flex-col gap-4">
      <div className="flex gap-5">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          name="sortby"
          value="Popularity"
          checked={value === "Popularity"}
        />
        <label>Popularity</label>
      </div>

      <div className="flex gap-5">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          name="sortby"
          value="Rating:High To Low"
          checked={value === "Rating:High To Low"}
        />
        <p>Rating:High to Low</p>
      </div>
      <div className="flex gap-5">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          name="sortby"
          value="Delivery Time"
          checked={value === "Delivery Time"}
        />
        <p>Delivery Time</p>
      </div>
      <div className="flex gap-5">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          name="sortby"
          value="Cost:High to Low"
          checked={value === "Cost:High to Low"}
        />
        <p>Cost:High to Low</p>
      </div>
      <div className="flex gap-5">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          name="sortby"
          value="Cost:Low to High"
          checked={value === "Cost:Low to High"}
        />
        <p>Cost:Low to High</p>
      </div>
    </div>
  );
};

export default SortByComponent;
