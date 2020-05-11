import React from "react";
import toppic from "../../img/mothersdaytop.png";
import bottompic1 from "../../img/mothersdaybottom1.png";
import bottompic2 from "../../img/mothersdaybottom2.png";
import bottompic3 from "../../img/mothersdaybottom3.png";

const Recommendations = () => {
  return (
    <div className="blog">
      <h3 className="title">Weekly Recommendations</h3>
      <div className="top">
        <a>
          <img className="topimg" src={toppic} />
        </a>

        <p className="title">IT'S NOT TOO LATE! GIFT SMART WITH GIFTNOW®</p>
        <p>
          Let Mom choose the size and color! Just select GiftNow at checkout to
          see how easy gift-giving can be.
        </p>
      </div>
      <div className="bottom">
        <section className="bottom-1">
          <a>
            <img className="bottomimg" src={bottompic1} />
          </a>
          <p className="title">T-SHIRTS COLLECTION</p>
          <p>
            Find your new favorites in our wide variety of styles and colors.
          </p>
        </section>
        <section className="bottom-1">
          <a>
            <img className="bottomimg" src={bottompic2} />
          </a>
          <p className="title">T-SHIRTS COLLECTION</p>
          <p>
            Find your new favorites in our wide variety of styles and colors.
          </p>
        </section>
        <section className="bottom-1">
          <a>
            <img className="bottomimg" src={bottompic3} />
          </a>
          <p className="title">T-SHIRTS COLLECTION</p>
          <p>
            Find your new favorites in our wide variety of styles and colors.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Recommendations;
