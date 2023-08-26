import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiFillCloseCircle,
} from "react-icons/ai";
import { axiosapi } from "../../api/axiosapi";
import { useQuery } from "@tanstack/react-query";

const fetchCuisine = () => {
  return axiosapi.get("/cuisine");
};

const CuisineModal = (props) => {
  const [search, setSearch] = useState("");
  const [cuisineArray, setCuisineArray] = useState(props.selectedCuisine);
  const { isLoading, data, isError, error } = useQuery(
    ["cuisine"],
    fetchCuisine
  );

  const handleChange = (e) => {
    if (cuisineArray.length > 0 && cuisineArray.includes(e.target.value)) {
      const newArray = cuisineArray.filter((x) => x !== e.target.value);
      setCuisineArray(newArray);
    } else {
      const newArray = [...cuisineArray, e.target.value];
      console.log(newArray);
      setCuisineArray(newArray);
    }
  };
  const handleApplyButton = (e) => {
    e.preventDefault();
    props.setSelectedCuisine(cuisineArray);
    props.toggleModal(false);
  };
  return ReactDOM.createPortal(
    <div className="bg-black top-0 bottom-0 left-0 right-0 fixed bg-opacity-25">
      <div className="fixed top-24 left-[30rem] right-8 bg-white w-[35%] p-4 ">
        <div className="flex justify-between  ">
          <p className="font-semibold text-lg">Cuisines</p>
          <AiFillCloseCircle
            onClick={() => props.toggleModal(false)}
            className="h-6 w-6 cursor-pointer text-red-600"
          />
        </div>
        <div className="flex gap-5 items-center mt-5 border py-2 px-3 border-gray-400 rounded-md">
          <AiOutlineSearch className="h-5 w-5" />
          <input
            value={search}
            className="outline-none w-[100%]"
            placeholder="Search here"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <AiOutlineClose className="h-5 w-5 cursor-pointer" />
        </div>
        <div className="px-3 mt-2 h-64 overflow-y-scroll flex flex-wrap justify-between ">
          {isLoading ? (
            <p>Loading....</p>
          ) : isError ? (
            <p>{error}</p>
          ) : (
            data.data.cuisine.map((cuisine) => (
              <label className="flex  items-center space-x-3 text-lg cursor-pointer  w-1/2 py-2">
                <input
                  type="checkbox"
                  value={cuisine._id}
                  onChange={(e) => handleChange(e)}
                  checked={cuisineArray.includes(cuisine._id)}
                />

                <span>{cuisine.name}</span>
              </label>
            ))
          )}
        </div>
        <div className="flex gap-2 justify-end items-center mt-5 mr-1">
          <button
            className="bg-red-400 text-white rounded-md px-2 py-1 "
            onClick={(e) => handleApplyButton(e)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default CuisineModal;
