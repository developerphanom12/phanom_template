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
                  Engaging, Entertaining,Exploring
                </h2>
              </div>
              <p>
              Diversity of content we prefer to deliver. We intend to bestow an exceptional marks and bring a impressive video invention practise to our clients.
              </p>
              
              <p>Video Production</p>
              <p>Video Editing</p>
              <p>Video Marketing</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec15;
