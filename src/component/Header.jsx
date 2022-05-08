import React from "react";
import logo from "../Images/logo.jpg";
import { IoCartOutline } from "react-icons/io5";

const Header = (props) => {
  return (
    <div id="container_header">
      <div id="header">
        <img src={logo} alt="company logo" width="100px" height="100px" />
        <h1 id="companyName">RKMART</h1>
        <p id="cart">
          <IoCartOutline size="50px" />
          {props.addItem}
        </p>
      </div>
    </div>
  );
};

export default Header;
