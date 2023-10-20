import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import Meal from "../../assets/meal.avif";
import RestaurantCard from "../../Components/RestaurantCard";
import { axiosapi } from "../../api/axiosapi";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingProgress } from "../../redux/ActionCreators";
import { useNavigate } from "react-router-dom";
import FilterModal from "./Modals/FilterModal";
const baseUrl = "http://localhost:3001";
const getRestaurants = async () => {
  try {
    const response = await axiosapi.get("/restaurant");

    return response.data.restaurant;
  } catch (error) {
    console.log(error);
  }
};

const OrderOnlinePage = () => {
  const filterState = useSelector((state) => state.filter.filter);
  const count = useSelector((state) => state.filter.count);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useQuery(
    ["get-restaurants"],
    getRestaurants
  );
  if (isLoading) {
    dispatch(setLoadingProgress(20));
  } else {
    dispatch(setLoadingProgress(100));
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

            <p className="text-sm lg:text-base cursor-pointer px-2 py-1 border border-gray-300 text-gray-400 hover:bg-gray-50 rounded-md">
              Rating: 4.0+
            </p>
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
