import React from "react";
import { Routes, Route } from "react-router-dom";
import ViewCategory from "../../pages/ViewCategory/ViewCategory";
import Warehouse from "../../pages/Warehouse/Warehouse";

function Pages() {
  return (
    <Routes>
      <Route path="/products" element={<ViewCategory />} />
      <Route path="/warehouse" exact component={<Warehouse />} />
    </Routes>
  );
}

export default Pages;
