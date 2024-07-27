import React from "react";
import { CHOOSE_SHAPE } from "../../../lib/assets";

function Sec3() {
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
                  We're Phanom Professionals, Your Growth Partner
                </h2>
              </div>
              <p>
                It only takes creative business minds to make effective business
                strategies! With over a Decade in the Digital Marketing
                industry, Phanom Professionals has proved to be the benchmark of
                SEO services in India. We’re a team of experienced web
                designers, front-end developers, digital marketers, and SEO
                champs who pride themselves on excellence. We always strive to
                deliver the best-in-class, functional, and scale-able web design
                Toronto solutions to meet business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec3;
