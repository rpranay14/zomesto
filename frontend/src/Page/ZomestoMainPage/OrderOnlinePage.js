import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { TbArrowsSort } from "react-icons/tb";
import { GrFormClose } from "react-icons/gr";
import Meal from "../../assets/meal.avif";
import RestaurantCard from "../../Components/RestaurantCard";
import { axiosapi } from "../../api/axiosapi";
import {
  QueryClient,
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSingleFilter,
  setLoadingProgress,
  updateFilterCount,
} from "../../redux/ActionCreators";
import { useNavigate } from "react-router-dom";
import FilterModal from "./Modals/FilterModal";
const baseUrl = "http://localhost:3001";
const getRestaurants = async (filterState) => {
  console.log("querykey", filterState.queryKey[1]);
  const filter = filterState.queryKey[1];
  try {
    const response = await axiosapi.post("/restaurant", { filter: filter });

    return response.data.restaurant;
  } catch (error) {
    console.log(error);
  }
};

const OrderOnlinePage = () => {
  const queryClient = useQueryClient();
  const filterState = useSelector((state) => state.filter.filter);
  const count = useSelector((state) => state.filter.count);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const dispatch = useDispatch();
  const onFilterChange = (filter) => {
    dispatch(removeSingleFilter(filter));
    queryClient.invalidateQueries(["get-restaurants"]);
  };
  const { data, isLoading, isError, isFetching } = useQuery(
    ["get-restaurants", filterState],
    getRestaurants
  );

  if (isLoading) {
    dispatch(setLoadingProgress(20));
  } else if (isFetching) {
    dispatch(setLoadingProgress(20));
  } else {
    dispatch(setLoadingProgress(100));
    console.log(filterState);
    return (
      <>
        <div className="px-4 sm:px-5 md:px-16 lg:px-28 mt-5 mb-5 ">
          <div className="flex items-center gap-3 lg:gap-5">
            <p
              onClick={() => setShowFilterModal(true)}
              className="text-sm lg:text-base flex gap-1 items-center cursor-pointer px-2 py-1 border border-gray-300 text-gray-400 hover:bg-gray-50 rounded-md"
            >
              {count === 0 ? (
                <CiFilter />
              ) : (
                <p className="bg-red-400 text-white px-1 py-[0.1rem] rounded-sm text-sm">
                  {count}
                </p>
              )}{" "}
              Filters
            </p>
            {Object.keys(filterState).map((x) => {
              console.log("rating", x === "rating");
              if (x === "sortBy" && filterState[x] !== "Popularity") {
                return (
                  <p
                    onClick={() =>
                      onFilterChange({
                        [x]: filterState[x],
                      })
                    }
                    className="bg-red-500 flex gap-1 text-white cursor-pointer rounded-md px-2 py-2 items-center"
                  >
                    <TbArrowsSort className="w-5 h-5" />
                    {filterState[x]}{" "}
                    <AiOutlineClose className="w-4 h-4 ml-1 " color="white" />
                  </p>
                );
              } else if (x === "cuisine" && filterState[x].length !== 0) {
                return (
                  <p
                    onClick={() =>
                      onFilterChange({
                        [x]: filterState[x],
                      })
                    }
                    className="bg-red-500 flex gap-1 text-white cursor-pointer rounded-md px-2 py-2 items-center"
                  >
                    Cuisine
                    <AiOutlineClose className="w-4 h-4 ml-1 " color="white" />
                  </p>
                );
              } else if (
                x === "costperperson" &&
                JSON.stringify(filterState[x]) !== JSON.stringify([0, 1000])
              ) {
                return (
                  <p
                    onClick={() =>
                      onFilterChange({
                        [x]: filterState[x],
                      })
                    }
                    className="bg-red-500 flex gap-1 text-white cursor-pointer rounded-md px-2 py-2 items-center"
                  >
                    Cost Rs{filterState[x][0]}-
                    {filterState[x][1] === 1000
                      ? "Any"
                      : `₹${filterState[x][1]}`}
                    <AiOutlineClose className="w-4 h-4 ml-1 " color="white" />
                  </p>
                );
              } else if (x === "rating") {
                if (filterState[x] === 1) {
                  return (
                    <p
                      onClick={() =>
                        onFilterChange({
                          [x]: filterState[x],
                        })
                      }
                      className="bg-red-500 flex gap-1 text-white cursor-pointer rounded-md px-2 py-2 items-center"
                    >
                      Rating: 3.5+
                      <AiOutlineClose className="w-4 h-4 ml-1 " color="white" />
                    </p>
                  );
                } else if (filterState[x] === 2) {
                  return (
                    <p
                      onClick={() =>
                        onFilterChange({
                          [x]: filterState[x],
                        })
                      }
                      className="bg-red-500 flex gap-1 text-white cursor-pointer rounded-md px-2 py-2 items-center"
                    >
                      Rating: 4.0+
                      <AiOutlineClose className="w-4 h-4 ml-1 " color="white" />
                    </p>
                  );
                } else if (filterState[x] === 3) {
                  return (
                    <p
                      onClick={() =>
                        onFilterChange({
                          [x]: filterState[x],
                        })
                      }
                      className="bg-red-500 flex gap-1 text-white cursor-pointer rounded-md px-2 py-2 items-center"
                    >
                      Rating: 4.5+
                      <AiOutlineClose className="w-4 h-4 ml-1 " color="white" />
                    </p>
                  );
                } else {
                  return (
                    <p
                      onClick={() =>
                        onFilterChange({
                          [x]: filterState[x],
                        })
                      }
                      className="text-sm lg:text-base cursor-pointer px-2 py-1 border border-gray-300 text-gray-400 hover:bg-gray-50 rounded-md"
                    >
                      Rating: 4.0+
                    </p>
                  );
                }
              }
            })}

            <p className="text-sm lg:text-base cursor-pointer px-2 py-1 border border-gray-300 text-gray-400 hover:bg-gray-50 rounded-md">
              Cuisines
            </p>
          </div>
          <div className="mt-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold ">
              Best Food in Kota
            </p>
            <div className="flex flex-wrap gap-5">
              {data?.map((restro) => (
                <RestaurantCard
                  key={restro._id}
                  costforone={restro.costperperson}
                  image={`${baseUrl}${restro.photos}`}
                  restroname={restro.name}
                  cuisine={restro.cuisineid
                    .map((cuisine) => cuisine.name)
                    .join(", ")}
                  rating={restro.rating}
                />
              ))}
            </div>
          </div>
        </div>
        {showFilterModal ? (
          <FilterModal close={() => setShowFilterModal(false)} />
        ) : (
          <></>
        )}
      </>
    );
  }
};

export default OrderOnlinePage;
