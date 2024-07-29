import React from "react";

import baby from "../../../assets/img/custom/baby.jpg";

import goal from "../../../assets/img/custom/gaol.jpg";

import dot from "../../../assets/img/custom/dot.png";

function Sec3() {
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
                <h2 className="title tg-element-title">Brand Auditing</h2>
                <p className="info-one">
                  Having more than 5 years of experience in branding allow us to
                  understand your brand strategy & vision, identify loophole in
                  branding & share our ideas will gives wings to your brand
                </p>
                <h2 className="title tg-element-title">
                  Brand Story & Designs!
                </h2>
                <p className="info-one">
                  Our experts are as tremendous as the are communicative. All
                  our designers & experts are closely work towards your brand
                  and creative designs to build your brand story!
                </p>
                <h2 className="title tg-element-title">Digital Strategy</h2>
                <p className="info-one">
                  We are about to launch your brand in Market with effectively
                  online presence. The digital strategy for promoting your
                  business, generating new leads and grooming them into a loyal
                  customer base.
                </p>

                <h2 className="title tg-element-title">Why Phanom?</h2>
                <p className="info-one">
                  We're an 360° Marketing Agency and Branding Agency in India
                  with 5 years of experience in B2B and B2C building brands. We
                  create complete branding solutions, using concepts that are
                  strongly aligned to your corporate vision and values.
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

export default Sec3;
