import React from "react";
import baby from "../../../assets/img/custom/baby.jpg";

import goal from "../../../assets/img/custom/gaol.jpg";

import dot from "../../../assets/img/custom/dot.png";
function Sec16() {
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
                  We Entrust To-Provide You On Your Mark Performance With :
                </h2>
              </div>
              <h2>Expertise</h2>
              <p className="info-one">
                We naturally reconcile the deployed number for the utmost
                websites that knack the performance based competence. We ensure
                our clients to present your business with what the market desire
                and the best numbers for visiting your website.
              </p>

              <h2>Culpability</h2>
              <p className="info-one">
                Even if you are starting from the scratch we are right and right
                here to formulate your website thoroughly for everything it is
                needed to make it worth. With higher rate of sale & services on
                your website is made free from any obligatory aspect.
              </p>

              <h2>Acquaintance</h2>
              <p className="info-one">
                Our proficiency is always with techy aspect and upgrading with
                the trends on going in the market to make everything new and
                catchy for the benefit of your website. Software designed for
                your website definitely assists to become Savvy.
              </p>

              <h2>Approach</h2>
              <p className="info-one">
                We prepare a line of attack with some easy and understandable
                creation for your website for avoiding any snag. Rightfully
                creating your website and making it for the best use of the
                visitors and active users for best boosted results, our team
                have potential to strive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec16;
