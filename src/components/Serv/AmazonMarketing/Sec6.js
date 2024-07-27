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

                <h2 className="title tg-element-title">
                  Our Marketing Agency:
                </h2>
              </div>
              <p className="info-one">
                This ensures whether your listing has been updated correctly or
                not.
              </p>

              <p className="info-one">
                Complete details of the metadata will be optimized for your
                better customer retention.
              </p>

              <p className="info-one">
                A thorough keyword research allows you to give your products
                more exposure on Amazon and generate more revenue with a higher
                ranking result in the form of organic search ranking.
              </p>

              <p className="info-one">
                Focuses on making your product easily visible and discoverable
                on Amazon. It will be done by maximizing your product titles as
                well as with a unique description that will attract customers to
                easily get your products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec6;
