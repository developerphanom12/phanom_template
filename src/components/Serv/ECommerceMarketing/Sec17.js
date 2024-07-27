import React from "react";
import { CHOOSE_SHAPE } from "../../../lib/assets";

function Sec17() {
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
                  Trusted eCommerce marketing firm
                </h2>
              </div>
              <p>
                Grab more possibilities to be a brand by driving unlimited
                sales.
              </p>
              <p>
                We are a reliable and innovative digital marketing agency that
                has the compatibility to pacify your customers and can grow your
                business by generating more leads online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec17;
