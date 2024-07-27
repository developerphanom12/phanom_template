import React from "react";
import { CHOOSE_SHAPE } from "../../../lib/assets";

function Sec8() {
  return (
    <section className="choose-area jarallax choose-bg">
      <div className="choose-shape">
        <img
          src={CHOOSE_SHAPE}
          alt=""
          data-aos="fade-right"
          data-aos-delay="0"
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="choose-content">
              <div className="section-title-two white-title mb-20 tg-heading-subheading animation-style3">
                <h2 className="title tg-element-title">
                  Grab Our Hand For Ramping Your Website To The
                </h2>
                <h2 className="title tg-element-title">Next Level</h2>
              </div>
              <p>
                Witness how easy and epic it become while you handle your own
                website like a pro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec8;
