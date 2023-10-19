import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { axiosapi } from "../../../../api/axiosapi";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../../../redux/ActionCreators";
const getCuisines = async () => {
  const response = await axiosapi.get("/cuisine");
  return response.data;
};
const CuisineComponent = ({ filterObject, setFilterObject }) => {
  const { isLoading, isError, data } = useQuery(["get-cuisines"], getCuisines);
  const handleChange = (e) => {
    let cuisine;
    if (filterObject.cuisine.includes(e.target.value)) {
      cuisine = filterObject.cuisine.filter(
        (cuisine) => cuisine !== e.target.value
      );
    } else {
      cuisine = [...filterObject.cuisine, e.target.value];
    }
    setFilterObject({ ...filterObject, cuisine: cuisine });
  };

  return (
    <div className="mt-4 mx-6 w-[100%]">
      <header className="flex border w-[100%] py-2 px-2 items-center gap-4 rounded-md ">
        <AiOutlineSearch className="w-5 h-5 text-gray-300" />
        <input
          type="text"
          placeholder="Search Here"
          className="outline-none w-[100%]"
        />
      </header>
      {isLoading ? (
        <p className="mt-3">Loading ...</p>
      ) : (
        <section className="px-3 mt-1 h-[21rem] overflow-y-scroll flex flex-wrap justify-between ">
          {data.cuisine.map((cuisine, index) => (
            <label className="flex  items-center space-x-3 text-lg cursor-pointer  w-1/2 py-2">
              <input
                type="checkbox"
                checked={filterObject.cuisine.includes(cuisine._id)}
                value={cuisine._id}
                onChange={(e) => handleChange(e)}
              />

              <span>{cuisine.name}</span>
            </label>
          ))}
        </section>
      )}
    </div>
  );
};

export default CuisineComponent;
