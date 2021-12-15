import React from "react";
import "./Futer.css";
import skrin from "./img/skrin.png";
import video from "./img/video.png";
export const Futer = () => {
  return (
    <div className="information">
      <div className="block-information">
        <div className="help">
          <p className="help-name">Help</p>
          <a href="1" className="help-name">
            1-888-963-8944
          </a>
          <a href="1" className="help-name">
            1-814-251-9966 (Text)
          </a>
          <a href="1" className="help-name">
            help@allbirds.com
          </a>
          <a href="1" className="help-name">
            Returns/Exchanges
          </a>
          <a href="1" className="help-name">
            FAQ/Contact Us
          </a>
          <a href="1" className="help-name">
            Afterpay
          </a>
        </div>

        <div className="Shop">
          <p className="Shop-name">Shop</p>
          <a href="1" className="Shop-name">
            Women's Shoes
          </a>
          <a href="1" className="Shop-name">
            Men's Apparel
          </a>
          <a href="1" className="Shop-name">
            Women's Apparel
          </a>
          <a href="1" className="Shop-name">
            Socks
          </a>
          <a href="1" className="Shop-name">
            Gift Cards
          </a>
          <a href="1" className="Shop-name">
            Download the Allbirds App
          </a>
        </div>

        <div className="Company">
          <p className="Company-name">Company</p>
          <a href="1" className="Company-name">
            Our Stores
          </a>
          <a href="1" className="Company-name">
            Our Story
          </a>
          <a href="1" className="Company-name">
            Our Materials
          </a>
          <a href="1" className="Company-name">
            Sustainability
          </a>
          <a href="1" className="Company-name">
            Gift Cards
          </a>
          <a href="1" className="Company-name">
            Partnerships
          </a>
          <a href="1" className="Company-name">
            Product Testing
          </a>
          <a href="1" className="Company-name">
            Affiliates
          </a>
          <a href="1" className="Company-name">
            Bulk Orders
          </a>
          <a href="1" className="Company-name">
            Careers
          </a>
          <a href="1" className="Company-name">
            Press
          </a>
          <a href="1" className="Company-name">
            California Transparency Act
          </a>
        </div>
      </div>

      <div className="Follow">
        <p className="Follow-Flock">Follow the Flock</p>
        <p className="Follow-name">
          WExclusive offers, a heads up on new things, and sightings of Allbirds
          in the wild. Oh, we have cute sheep, too. #weareallbirds
        </p>
      </div>

      <div className="photo-img">
        <img src={skrin} alt="" className="img-skrin" />
        <img src={video} alt="" className="img-video" />
      </div>
      <div className="bottomm"> 
        <p className="Reserved">
          © 2021 Allbirds, Inc. All Rights Reserved. Terms,
          Privacy&Accessibility
        </p>
      </div>
    </div>
  );
};
