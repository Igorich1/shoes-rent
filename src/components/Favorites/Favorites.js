import React from "react";
import "./Favorites.css";
import sneakers from "./img/sneakers.png";
import sneakersWhitte from "./img/sneakersWhitte.png";
import sneakersrain from "./img/sneakersrain.png";
import cloud from "./img/cloud.png";
import grass from "./img/grass.png";
import leaves from "./img/leaves.png";

export const Favorites = () => {
  return (
    <div className="Favorites-block">
      <div className="heading">
        <p>Our Favorites</p>
      </div>

      <div className="assortment-block">
        <a href="1" className="assortment-name__black">
          Everyday
        </a>
        <a href="1" className="assortment-name">
          Running
        </a>
        <a href="1" className="assortment-name">
          Travel
        </a>
      </div>

      <div className="runing-block">
        <div className="sneakers-block">
          <div className="sneakers-block-container">
            <img src={sneakers} alt="" className="sneakers-img" />
            <div className="button-block__sneakers">
              <button className="button-sneakers">Shop Men</button>
              <button className="button-sneakers">Shop Women</button>
            </div>
          </div>

          <p className="Runner">Wool Runner</p>

          <div className="subtitle">
            <img src={cloud} alt="" className="img-cloud" />
            <p className="text1">Cozy Sneaker</p>
          </div>
        </div>

        <div className="sneakers-block">
          <div className="sneaker-block-container">
            <img src={sneakersWhitte} alt="" className="sneakerswhitte-img" />
            <div className="button-block__sneakers">
              <button className="button-sneakers">Shop Men</button>
              <button className="button-sneakers">Shop Women</button>
            </div>
          </div>

          <p className="Runner">Tree Runner</p>

          <div className="subtitle">
            <img src={grass} alt="" className="img-grass" />
            <p className="text1">Light and Breezy Sneaker</p>
          </div>
        </div>

        <div className="sneakers-block">
          <div className="sneakers-block-container">
            <img src={sneakersrain} alt="" className="sneakersrain-img" />
            <div className="button-block__sneakers">
              <button className="button-sneakers">Shop Men</button>
              <button className="button-sneakers">Shop Women</button>
            </div>
          </div>

          <p className="Runner">Wool Runner Mizzle</p>

          <div className="subtitle">
            <img src={leaves} alt="" className="img-leaves" />
            <p className="text1">Rain-Ready Sneaker</p>
          </div>
        </div>
      </div>
    </div>
  );
};
