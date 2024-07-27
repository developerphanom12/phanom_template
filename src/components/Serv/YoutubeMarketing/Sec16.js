import React from 'react'
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
                Would You Like To Discuss Your Project With Our Experienced Team members?

                </h2>

              </div>
              <p className="info-one">
              A member of our team will contact you shortly after receiving the details of your project by clicking “Get in touch.”
              </p>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sec16