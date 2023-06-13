import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import AddJob from "../Pages/AddJob";

export const AllRoutex = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add/jobs" element={<AddJob />}></Route>
      </Routes>
    </>
  );
};
