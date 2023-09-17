import React from "react";
import { Route, Routes } from "react-router-dom";
import AddRestaurantPage from "../Page/Admin/AddRestaurantPage";

import AdminPage from "../Page/Admin/AdminPage";
import AddCategory from "../Page/Admin/AddCategory";
import HomePage from "../Page/HomePage/HomePage";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import ZomestoMainPage from "../Page/ZomestoMainPage/ZomestoMainPage.";
import DineInPage from "../Page/ZomestoMainPage/DineInPage";
import OrderOnlinePage from "../Page/ZomestoMainPage/OrderOnlinePage";

const MainComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="addrestaurant" element={<AddRestaurantPage />} />
          <Route path="addcategory" element={<AddCategory />} />
        </Route>
        <Route element={<ZomestoMainPage />}>
          <Route path="delivery" element={<OrderOnlinePage />} />
          <Route path="dine-out" element={<DineInPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </div>
  );
};

export default MainComponent;
