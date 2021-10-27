/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export class MyOwnNavbar extends React.Component {
  render() {
    return (
      <header>
        <div id="menu-bar" className="fas fa-bars"></div>

        <a href="/" className="logo">
          <span>G</span>oal
        </a>

        <nav className="navbar">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/news"}>News</NavLink>
          <NavLink to={"/leagues"}>Leagues</NavLink>
          <NavLink to={"/club"}>Clubs</NavLink>
          <NavLink to={"/player"}>Players</NavLink>
          <NavLink to={"/us"}>Creators</NavLink>
          <NavLink to={"/form"}>Send Us feedback</NavLink>
        </nav>

        <div className="icons">
          <i className="fas fa-search" id="search-btn"></i>
          <i className="fas fa-user" id="login-btn"></i>
        </div>

        <form action="" className="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar" className="fas fa-search"></label>
        </form>
      </header>
    );
  }
}
