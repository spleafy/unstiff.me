import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const router = useLocation();

  return (
    <div className="ue-navbar">
      {/* <img src={Logo} alt="" /> */}
      <h1>Unstiff.me Admin System</h1>
      <div className="ue-navbar-links">
        <Link
          to="/admin"
          className={
            router.pathname == "/admin"
              ? "active-link ue-underline"
              : "ue-underline"
          }
        >
          <span>Posts</span>
        </Link>
        <Link
          to="/admin/create"
          className={
            router.pathname == "/admin/create"
              ? "active-link ue-underline"
              : "ue-underline"
          }
        >
          <span>Create</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
