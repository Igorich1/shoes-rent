import React from "react";
import "./Header.css";
import logo from "./img/logo.png";
import main from "./img/main.png";
import question from "./img/question.png";
import shop from "./img/shop.png";

export const Header = () => {
  return (
    <div className="blok-top">
      <div className="choice">
        <a href="1" className="name">
          Men
        </a>
        <a href="1" className="name">
          Women
        </a>
        <a href="1" className="name">
          New Arrivals
        </a>
      </div>
      <div className="img-logo">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="office">

        <dis className="office-text">
          <a href="1" className="name-right">
            Sustainability
          </a>
          <a href="1" className="name-right">
            Stores
          </a>
        </dis>
        <div className="office-img">

          <button className="button-img-main" ><img src={main} alt="" className="main" /></button>
          <button className="button-img-main" ><img src={question} alt="" className="main" /></button>
          <button className="button-img-main"  ><img src={shop} alt="" className="main" /></button>


        </div>
      </div>
    </div>
  );
};
