import React, { useState } from "react";
import {
  QueryClient,
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
import CuisineComponent from "./FilterModalComponent.js/CuisineComponent";
import RatingComponent from "./FilterModalComponent.js/RatingComponent";
import CostPerPersonComponent from "./FilterModalComponent.js/CostPerPersonComponent";
import SortByComponent from "./FilterModalComponent.js/SortByComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilter,
  removeFIlter,
  updateFilterCount,
} from "../../../redux/ActionCreators";
const findRatingValue = (rating) => {
  if (rating === 0) {
    return "Any";
  } else if (rating === 1) {
    return "3.5+";
  } else if (rating === 2) {
    return "4.0+";
  } else if (rating === 3) {
    return "4.5+";
  }
};
const FilterModal = ({ close }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [filterObject, setFilterObject] = useState(
    useSelector((state) => state.filter.filter)
  );
  const handleApplyFilters = () => {
    dispatch(addFilter(filterObject));
    dispatch(updateFilterCount(filterObject));
    close();
    queryClient.invalidateQueries(["get-restaurants"]);
  };
  const handleClearFilter = () => {
    dispatch(removeFIlter());

    close();
    queryClient.invalidateQueries(["get-restaurants"]);
  };

  const menus = [
    {
      title: "Sort By",
      subtitle: filterObject.sortBy,
    },
    {
      title: "Cuisines",
      subtitle:
        filterObject.cuisine.length === 0
          ? ""
          : `${filterObject.cuisine.length} selected`,
    },
    {
      title: "Rating",
      subtitle: findRatingValue(filterObject.rating),
    },
    {
      title: "Cost Per Person",
      subtitle: "",
    },
  ];
  const [openMenu, setOpenMenu] = useState(0);
  return createPortal(
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60">
      <div className="fixed top-[3%] left-[25%] w-[55%] bg-white text-black rounded-md">
        <header className="flex justify-between px-5 py-2 items-center">
          <p className="text-2xl">Filters</p>
          <AiOutlineClose
            onClick={() => close()}
            className="w-5 h-5 text-black cursor-pointer"
          />
        </header>
        <div className="h-0  w-[100%] border-t-2 border-gray-100 mt-1 "></div>

        <main className="flex h-[26rem]">
          <div className="bg-gray-100">
            {menus.map((menu, index) => (
              <div
                key={index}
                onClick={() => setOpenMenu(index)}
                className={`cursor-pointer  px-8  py-5 border-l-4 ${
                  openMenu === index
                    ? " border-red-500 bg-white"
                    : "border-gray-100 "
                }`}
              >
                <p className="text-xl font-semibold">{menu.title}</p>
                <p className="text-red-500  font-semibold text-sm">
                  {menu.subtitle}
                </p>
              </div>
            ))}
          </div>
          {openMenu === 0 ? (
            <SortByComponent
              filterObject={filterObject}
              setFilterObject={(value) => setFilterObject(value)}
            />
          ) : (
            <></>
          )}
          {openMenu === 1 ? (
            <CuisineComponent
              filterObject={filterObject}
              setFilterObject={(value) => setFilterObject(value)}
            />
          ) : (
            <></>
          )}
          {openMenu === 2 ? (
            <RatingComponent
              filterObject={filterObject}
              setFilterObject={(value) => setFilterObject(value)}
            />
          ) : (
            <></>
          )}
          {openMenu === 3 ? (
            <CostPerPersonComponent
              filterObject={filterObject}
              setFilterObject={(value) => setFilterObject(value)}
            />
          ) : (
            <></>
          )}
        </main>
        <div className="h-0 w-[100%] border-t-2 border-gray-100 "></div>
        <footer className="flex justify-end items-center gap-8 mr-8 mb-6 mt-4">
          <button
            onClick={() => handleClearFilter()}
            className="bg-gray-50 px-6 rounded-md py-2 "
          >
            Clear all
          </button>
          <button
            onClick={() => handleApplyFilters()}
            className="bg-red-400 px-6 rounded-md py-2 text-white"
          >
            Apply
          </button>
        </footer>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default FilterModal;
