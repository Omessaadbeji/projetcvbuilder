import React from "react";
import { useState } from "react";
import Home from "./Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import PersonalDetails from "../pages/PersonalDetails";

export default function Body() {
  const colors = ["#6495ed", "#b8860b", "#9932cc", "#9acd32", "#d3d3d3"];
  const navigate = useNavigate();
  return (
    <div className="body">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />

              <p className="heading">CV Builder</p>

              <button className="start" onClick={() => navigate("/Home")}>
                Start
              </button>
            </div>
          }
        />
        <Route path="/Home" element={<Home />} />
        <Route path="/PersonalDetails" element={<PersonalDetails />} />

      </Routes>
    </div>
  );
}
