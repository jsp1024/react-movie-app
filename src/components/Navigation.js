import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <Link to="/" className="myButton">
        Home
      </Link>
      <Link to="/about" className="myButton">
        About
      </Link>
    </div>
  );
}

export default Navigation;
