import logo from "../../pictures/logo.png";
import Home from "../../pictures/Home.png";
import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "",
    backgroundColor: isActive ? "#0d6efd" : "",
  });

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="" className="sidebar-logo_img" />
        <span className="sidebar-logo_name">
          Goldaisy <p>Store</p>
        </span>
      </div>

      <div className="sidebar-menu">
        <NavLink to="/" className="sidebar-menu_item">
          <span> Products</span>
        </NavLink>
        <Link to="/warehouse" className="sidebar-menu_item">
          <span>Warehouse</span>
        </Link>
        <a
          href="https://shopee.vn/lephung200?categoryId=100638&itemId=14484025037"
          className="sidebar-menu_item"
          style={{ marginBottom: "0px" }}
        >
          <span style={{ color: "#fa2674" }}>
            <i
              class="fa-solid fa-cart-arrow-down"
              style={{ paddingRight: "8px" }}
            ></i>
            Shop Online
          </span>
        </a>
      </div>

      {/* <Link to="/">
        <img
          src={Home}
          alt=""
          className="home_img"
          style={{ width: "36px", paddingBottom: "10px" }}
        />
      </Link> */}
    </div>
  );
}

export default Sidebar;
