import React from "react";
import "./MainShop.css";
import Rectangle from "./img/Rectangle.png";

export const MainShop = () => {
  return (
    <div className="block">
      <img src={Rectangle} alt="" className="Rectangle" />



<div className="text">
      <div className="name-title">
        <p className="title-big">Analog: The Simplest Productivity System</p>
        <p className="title">Durable. Comfortable. Ready to get dirty.</p>
      </div>
      <div className="button">
        <button className="button-shop">Shop Men</button>
        <button className="button-shop">Shop Women</button>
      </div>

</div>



    </div>
  );
};
