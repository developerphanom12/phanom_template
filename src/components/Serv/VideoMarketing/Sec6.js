import React from "react";

import baby from "../../../assets/img/custom/baby.jpg";

import goal from "../../../assets/img/custom/gaol.jpg";

import dot from "../../../assets/img/custom/dot.png";

function Sec6() {
  return (
    <section className="overview-area pt-4 pb-120">
      {/* <div
        className="overview-shape"
        data-aos="fade-left"
        data-aos-delay="200"
      ></div> */}
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="overview-img-wrap">
              <img src={baby} alt="" />
              <img src={goal} alt="" data-parallax='{"x" : 50 }' />
              <img src={dot} alt="" />
              <div className="icon">
                <i className="flaticon-report-1"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="overview-content">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Company Overview</span> */}
                <h2 className="title tg-element-title">Clear and precise</h2>
                <p className="info-one">
                  Message must be clear and cut to the point, that’s what the
                  crowed ask for, well this is the one clear reason that videos
                  are the best made by us.
                </p>
                <h2 className="title tg-element-title">
                  End-to-end, and fully managed
                </h2>
                <p className="info-one">
                  The reason why video marketing services are in huge demand
                  across the world, from small to giants. They need _ production
                  in just a click.
                </p>
                <h2 className="title tg-element-title">Dynamic and evergreen </h2>
                <p className="info-one">
                  Fun and engaging video content that can be watched in every
                  era that’s the CREATIVITY which makes us dynamic & evergreen
                  just like the videos.
                </p>
              </div>

              {/* <div className="content-bottom">
              <ul className="list-wrap">
                <li>
                  <div className="icon">
                    <i className="flaticon-trophy"></i>
                  </div>
                  <div className="content">
                    <h2 className="count">
                      <Odometer end={235} />+
                    </h2>
                    <p>Best Award</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="flaticon-rating"></i>
                  </div>
                  <div className="content">
                    <h2 className="count">
                      <Odometer end={98} />k
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </li>
              </ul>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec6;