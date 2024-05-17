import React from "react";
import { Route, Routes } from "react-router-dom";
import ResizableComponent from "../Component/Resizable/ResizableComponent";
import HomePage from "../Pages/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resizable" element={<ResizableComponent />} />
    </Routes>
  );
};

export default MainRoutes;
