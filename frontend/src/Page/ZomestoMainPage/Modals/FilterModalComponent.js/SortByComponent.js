import React from "react";

const SortByComponent = () => {
  return (
    <div className="ml-8 text-lg mt-5 flex flex-col">
      <div>
        <input type="radio" name="sortby" value="Popular" className="mr-3" />
        <label>Popularity</label>
      </div>

      <div className="flex gap-5">
        <input type="radio" name="sortby" value="Popular" />
        <p>Popularity</p>
      </div>
    </div>
  );
};

export default SortByComponent;
