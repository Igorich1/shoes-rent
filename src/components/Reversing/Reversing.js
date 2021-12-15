import React from "react";
import "./Reversing.css";
import nature from "./img/nature.png";
import adidas from "./img/adidas.png";
import bottonLeftthree from "./img/bottonLeftthree.png";
import sneakersAdidas from "./img/sneakersAdidas.png";
import coze from "./img/coze.png";
import bottonRightthree from "./img/bottonRightthree.png";

export const Reversing = () => {
  return (
    <div className="Reversing">
      <div className="nature-img">
        <img src={nature} alt="" className="nature-img" />
      </div>

      <div className="block-Climate">
        <p className="Climate">
          Reversing Climate Change Through Better Business
        </p>
        <p className="environmental">
          Reducing our environmental impact has been a top priority since day
          one. But now, we’re taking things further. Explore our overall
          sustainability approach, our progress thus far, and our bold list of
          commitments for 2025.
        </p>
        <button className="button-Our">Our Sustainable Practices</button>
      </div>

      <div className="shop-new__adidas">
                              <p className="title-shop__adidas">Stories</p>

        <div className="title-adidas">

          <div className="adidas-block">

            <div className="img-adidas">
              <button className="botton-swipe">
                <img src={bottonLeftthree} alt="" className="bottonLeftthree" />
              </button>
              <img src={adidas} alt="" className="adidas" />
            </div>
            <p className="tittle-name__bigtwo">Planet-Friendly Activewear</p>
            <p className="tittle-name__smalltwo">
              The Natural Run Collection is made with sustainable materials that
              can stand up to your toughest workout.
            </p>
          </div>

          <div className="sneakersAdidas-block">
            <img src={sneakersAdidas} alt="" className="adidas" />
            <p className="tittle-name__bigtwo">Adidas and Allbirds</p>
            <p className="tittle-name__smalltwo">
              Learn more about FUTURECRAFT.FOOTPRINT, our collaborative shoe
              coming soon.
            </p>
          </div>

          <div className="coze-block">
            <div className="img-coze">
              <img src={coze} alt="" className="adidas" />
              <button className="botton-swipe">
                {" "}
                <img
                  src={bottonRightthree}
                  alt=""
                  className="bottonRightthree"
                />
              </button>
            </div>

            <p className="tittle-name__bigtwo">
              How much did your outfit cost the planet?
            </p>
            <p className="tittle-name__smalltwo">
              Now any brand can use our Carbon Footprint tools to label their
              emissions.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="block-First">
        <p className="First">Want First Dibs? </p>
        <p className="Join">
          Join our email list and be the first to know about new limited edition
          products, material innovations, and lots of other fun updates.
        </p>

        <input
          type="email"
          name="login"
          className="email-input"
          placeholder="Enter Your Email Address"
        />

        <button className="button-Practices">Sign Up</button>
        <a href="s" className="Note">
          Note: You can opt-out at any time. See our
        </a>
      </div>
    </div>
  );
};
