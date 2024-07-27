import React from "react";

import baby from "../../../assets/img/custom/baby.jpg";

import goal from "../../../assets/img/custom/gaol.jpg";

import dot from "../../../assets/img/custom/dot.png";


function Sec7() {
  return (
    <section className="overview-area pt-4 pb-120">
      {/* <div
        className="overview-shape"
        data-aos="fade-left"
        data-aos-delay="200"
      ></div> */}
      <div className="container">
        <div className="row align-items-center justify-content-center">
        <div className="col-lg-6">
            <div className="overview-content">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Company Overview</span> */}
                <h2 className="title tg-element-title">
                 
Keen To Know More - About What SEO
                </h2>
                <h2 className="title tg-element-title">
                 
                Related Services We Adhere?
                                 </h2>
              </div>
              <p className="info-one">
              Turn up your cursor to our stage and schedule your precious time with our worthy demos today!
              </p>
              {/* <p className="info-two">
                Hence, the more wanted in the cascaded market we will make you
                stand on the top listing on the SEO Platform. Becasue We are
                Best SEO Company In India.
              </p> */}
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
   
        </div>
      </div>
    </section>
  );
}

export default Sec7;
