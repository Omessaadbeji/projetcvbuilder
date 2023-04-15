import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/Home">
        <p>Home</p>
      </Link>
      <Link to="/PesrsonalDetail">
        <p>Personal Details</p>
      </Link>
      <Link to="/Education">
        <p>Educations</p>
      </Link>
    </div>
  );
}
