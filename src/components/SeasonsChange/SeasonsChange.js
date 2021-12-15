import React from "react";
import "./SeasonsChange.css";
import Seasons from "./img/Seasons.png";
import bottonLeft from "./img/bottonLeft.png";
import bottonRight from "./img/bottonRight.png";
import orange from "./img/orange.png";
import blu from "./img/blu.png";
import gray from "./img/gray.png";

export const SeasonsChange = () => {
  return (
    <div className="seasonsChange-block">
      <div className="seasonsChange-img">
        <img src={Seasons} alt="" className="sesons-img" />
      </div>

      <div className="block-seasons">
        <p className="seasons">Seasons Change. Your Shoes Don’t Have To.</p>
        <p className="soft">
          Soft and cozy wool shoes to keep you comfortable all year round.
        </p>
        <button className="button-bau">SHOP MEN</button>
        <button className="button-bau">SHOP WOMEN</button>
      </div>

      {/* New */}

      <div className="shop-collections">
        <p className="title-shop__name">Shop The Collections</p>

        <div className="title-shop">
          <div className="orange-block">
            <div className="img-orange">
              <button className="botton-swipe__colection">
                <img src={bottonLeft} alt="" className="bottonLeft" />
              </button>
              <img src={orange} alt="" className="orange" />
            </div>
            <p className="title-orange__name">New Arrivals</p>
            <p className="subtitle-orange__name">
              The latest styles and limited edition colors that <p></p>
              you can only find here (while they last, that is).
            </p>
          </div>

          <div className="blu-block">
            <img src={blu} alt="" className="blu" />
            <p className="title-blu__name">Natural Run Collection</p>
            <p className="subtitle-blu__name">
              Looking for more sustainable ways to break a sweat? We’ve got you
              covered from head to toe.
            </p>
          </div>

          <div className="gray-block">
            <div className="img-gray">
              <img src={gray} alt="" className="gray" />
              <button className="botton-swipe__colection">
                <img src={bottonRight} alt="" className="bottonRight" />
              </button>
            </div>

            <p className="title-gray__name">Fresh Long Sleeve Tee Colors</p>
            <p className="subtitle-gray__name">
              It’s crisp, clean and ready for wherever the day takes you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
