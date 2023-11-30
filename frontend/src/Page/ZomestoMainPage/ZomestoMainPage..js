import React, { useEffect, useState } from "react";
import CommonNavbarComponent from "../../Components/CommonNavbarComponent";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ZomestoMainPage = (props) => {
  const [showOrderOnline, setShowOrderOnline] = useState(true);
  

  const navigate = useNavigate();
  const toggleComponent = (showorderonline) => {
    if (showorderonline) {
      setShowOrderOnline(true);
      navigate("/delivery");
    } else {
      setShowOrderOnline(false);
      navigate("/dine-out");
    }
  };
  
  return (
    <>
      <CommonNavbarComponent />
      <header>
        <div className="hidden px-32 lg:flex  gap-10  border-b mb-3 mt-5">
          <div
            onClick={() => toggleComponent(true)}
            className={
              showOrderOnline
                ? " cursor-pointer flex gap-3 items-center border-b-2 border-red-500 pb-3"
                : "cursor-pointer flex gap-3 items-center border-b-2 border-white  pb-3"
            }
          >
            <div
              className={
                showOrderOnline
                  ? "border p-3 rounded-full bg-[#FCEEC0]"
                  : "border p-3 rounded-full bg-gray-100"
              }
            >
              {showOrderOnline ? (
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                  className="w-8 h-8  text-gray-500 text-"
                />
              ) : (
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                  className="w-8 h-8  text-gray-500"
                />
              )}
            </div>

            <p
              className={
                showOrderOnline
                  ? "text-2xl font-semibold text-red-500 "
                  : "text-2xl font-semibold text-gray-500"
              }
            >
              Delivery
            </p>
          </div>

          <div
            onClick={() => toggleComponent(false)}
            className={
              showOrderOnline
                ? "cursor-pointer flex gap-3 items-center border-b-2 border-white pb-3"
                : "cursor-pointer flex gap-3 items-center border-b-2 border-red-500 pb-3"
            }
          >
            <div
              className={
                showOrderOnline
                  ? "border p-3 rounded-full bg-gray-100"
                  : "border p-3 rounded-full bg-[#E5F3F3]"
              }
            >
              {showOrderOnline ? (
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                  className="w-8 h-8  text-gray-500"
                />
              ) : (
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                  className="w-8 h-8  text-gray-500"
                />
              )}
            </div>
            <p
              className={
                showOrderOnline
                  ? "text-2xl font-semibold text-gray-500"
                  : "text-2xl font-semibold text-red-500"
              }
            >
              Dining Out
            </p>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default ZomestoMainPage;
