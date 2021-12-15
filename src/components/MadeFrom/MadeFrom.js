import React from "react";
import "./MadeFrom.css";
import tree from "./img/tree.png";
import nikeBlack from "./img/nikeBlack.png";
import bottonLefttwo from "./img/bottonLefttwo.png";
import nikeWhite from "./img/nikeWhite.png";
import nikeRed from "./img/nikeRed.png";
import bottonRighttwo from "./img/bottonRighttwo.png";

export const MadeFrom = () => {
  return (
    <div className="MadeFrom">
      <div className="tree-img">
        <img src={tree} alt="" className="tre-img" />
      </div>

      <div className="block-made">
        <p className="made">Made From Nature, For Nature</p>
        <p className="planet-friendly">
          We craft with planet-friendly natural materials, like merino wool and
          eucalyptus trees, because they're our best chance for a sustainable
          future.{" "}
        </p>
        <button className="button-see">See How</button>
      </div>

      <div className="shop-new">
                    <p className="title-shop__new">Shop The Collections</p>

        <div className="title-new-cros">


          <div className="nikeBlack-block">
            <div className="img-nikeBlack">
              <button className="botton-swipe" >
                              <img src={bottonLefttwo} alt="" className="bottonLefttwo" />

              </button>
              <img src={nikeBlack} alt="" className="nike" />
            </div>
            <p className="tittle-name__big">Men's Trail Runner SWT</p>
            <p className="tittle-name__small">Classic Color, Natural Black</p>
          </div>

          <div className="nikeWhite-block">
            <img src={nikeWhite} alt="" className="nike" />
            <p className="tittle-name__big">Natural Run Collection</p>
            <p className="tittle-name__small">
              Looking for more sustainable ways to break a sweat? We’ve got you
              covered from head to toe.
            </p>
          </div>

          <div className="nikeRed-block">
            <div className="img-nikeRed">
              <img src={nikeRed} alt="" className="nike" />
              <button className="botton-swipe" >
                {" "}
                <img src={bottonRighttwo} alt="" className="bottonRighttwo" />
              </button>
            </div>

            <p className="tittle-name__big">Fresh Long Sleeve Tee Colors</p>
            <p className="tittle-name__small">
              It’s crisp, clean and ready for wherever the day takes you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
