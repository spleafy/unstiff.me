import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const router = useLocation();

  const navigate = useNavigate();

  const [toggled, setToggled] = useState(false);

  const toggleNavigation = () => {
    setToggled(!toggled);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={toggled ? "ue-navbar ue-navbar_toggled" : "ue-navbar"}>
      <div className="ue-navbar-top-row">
        <h1>Unstiff.me Admin System</h1>
        <div
          className="ue-hamburger-menu"
          onClick={() => {
            toggleNavigation();
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        className={
          toggled
            ? "ue-navbar-links ue-navbar-links_toggled"
            : "ue-navbar-links"
        }
      >
        <Link
          to="/admin"
          className={
            router.pathname === "/admin"
              ? "active-link ue-underline"
              : "ue-underline"
          }
        >
          <span>Posts</span>
        </Link>
        <Link
          to="/admin/create"
          className={
            router.pathname === "/admin/create"
              ? "active-link ue-underline"
              : "ue-underline"
          }
        >
          <span>Create</span>
        </Link>

        <span
          style={{ color: "#ff0033", cursor: "pointer", whiteSpace: "nowrap" }}
          onClick={() => {
            logOut();
          }}
        >
          Log Out
        </span>
      </div>
    </div>
  );
};

export default Navbar;
