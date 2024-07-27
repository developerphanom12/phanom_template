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
                  Our YouTube promotion services in India consist of the
                  following:
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-6">
            <div className="choose-content">
              <p>YouTube video SEO</p>
              <p>Efficient sound syndication</p>
              <p>Video Creation Checklist</p>

              <p>YouTube Channel Creation</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-6">
            <div className="choose-content">
              <p>YouTube Paid Campaign Setup</p>
              <p>YouTube Ad Monitoring</p>
              <p>YouTube Ad Optimization</p>

              <p>Next month's method planning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec3;
