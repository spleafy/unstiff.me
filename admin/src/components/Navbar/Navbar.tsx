import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ue-navbar">
      {/* <img src={Logo} alt="" /> */}
      <h1>Unstiff.me Admin System</h1>
      <div className="ue-navbar-links">
        <Link to="/admin" className="ue-underline">
          <span>Posts</span>
        </Link>
        <Link to="/admin/create" className="ue-underline">
          <span>Create</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
