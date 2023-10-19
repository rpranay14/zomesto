import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../../../redux/ActionCreators";

const SortByComponent = ({ filterObject, setFilterObject }) => {
  const value = useSelector((state) => state.filter.filter.sortBy);

  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");
  const handleChange = (e) => {
    setFilterObject({ ...filterObject, sortBy: e });
  };
  return (
    <div className="text-gray-700  ml-8 text-xl mt-5 flex flex-col gap-4">
      <div className="flex gap-5">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          name="sortby"
          value="Popularity"
          checked={filterObject.sortBy === "Popularity"}
        />
        <label>Popularity</label>
      </div>

      <div className="flex gap-5">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          name="sortby"
          value="Rating:High To Low"
          checked={filterObject.sortBy === "Rating:High To Low"}
        />
        <p>Rating:High to Low</p>
      </div>
      <div className="flex gap-5">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          name="sortby"
          value="Delivery Time"
          checked={filterObject.sortBy === "Delivery Time"}
        />
        <p>Delivery Time</p>
      </div>
      <div className="flex gap-5">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          name="sortby"
          value="Cost:High to Low"
          checked={filterObject.sortBy === "Cost:High to Low"}
        />
        <p>Cost:High to Low</p>
      </div>
      <div className="flex gap-5">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          name="sortby"
          value="Cost:Low to High"
          checked={filterObject.sortBy === "Cost:Low to High"}
        />
        <p>Cost:Low to High</p>
      </div>
    </div>
  );
};

export default SortByComponent;
