import React from "react";
import { CHOOSE_SHAPE } from "../../../lib/assets";

function Sec15() {
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
                  Create Your Own Website And Unlock Business Potential!
                </h2>
              </div>
              <p>
              Tell us what your Vision is “We will assist you to reach”

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec15;
