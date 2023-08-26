import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="flex gap-10 h-[100vh] ">
      <div className="bg-red-400 w-[250px] relative  top-0  left-0  px-2 py-2  ">
        <ul className="flex flex-col   gap-5">
          <li className="text-white bg-[#ef5350] rounded-sm px-4 py-1">Home</li>
          <Link to="/admin/addcategory">
            <li className="text-white bg-[#ef5350] rounded-sm px-4 py-1">
              Add New Category
            </li>
          </Link>
          <Link to="/admin/addrestaurant">
            <li className="text-white bg-[#ef5350] rounded-sm px-4 py-1">
              Add New Restaurant
            </li>
          </Link>
          <li className="text-white bg-[#ef5350] rounded-sm px-4 py-1">
            Restaurant Lists
          </li>
          <li className="text-white bg-[#ef5350] rounded-sm px-4 py-1">
            My Orders
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminPage;
