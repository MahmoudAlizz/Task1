import React from "react";
import { MdOutlineGTranslate } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { AiTwotoneTags } from "react-icons/ai";
import { MdSortByAlpha } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import Logo from "../../assets/Images/logo.png";
import Style from "./navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className=" navbar-light bg-ligh navbar-expand-md">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <a href="#" className="navbar-brand col-3 m-0 p-0">
              <img className="" src={Logo} />
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#nav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-5" id="nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <AiTwotoneHome size="30" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <AiTwotoneTags size="30" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <MdSortByAlpha size="30" />
                  </a>
                </li>
                <form className="form-inline">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <a className="btn">
                    <BiSearchAlt size="35" />
                  </a>
                </form>
              </ul>
            </div>
            <div className={`col-1 ${1}`}>
              <a>
                <MdOutlineGTranslate size="30" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
