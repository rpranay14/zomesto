import React from "react";
import { Route, Routes } from "react-router-dom";
import AddRestaurantPage from "../Page/Admin/AddRestaurantPage";

import AdminPage from "../Page/Admin/AdminPage";
import AddCategory from "../Page/Admin/AddCategory";
import HomePage from "../Page/HomePage";
import NavbarComponent from "./NavbarComponent";

const MainComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="addrestaurant" element={<AddRestaurantPage />} />
          <Route path="addcategory" element={<AddCategory />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainComponent;
