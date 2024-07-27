import React from "react";
import lady from "../../../assets/img/custom/lady.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec13() {
  return (
    <section className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-img-wrap">
              <img src={lady} alt="img" className="main-img" />
              <img src={lady} alt="img" />
              <img src={aa} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title mb-25 tg-heading-subheading animation-style2">
                <h2 className="title tg-element-title">WEBSITE DESIGN</h2>

                <h2 className="title tg-element-title">
                  The Prime Website Design For Your Brand To Shine Brighter Than
                  The Sun….
                </h2>
              </div>
              <p>
                Offering you the personalized websites for easy accessibility
                and the well-versed content, illustrations communicable message
                without conflicts and confusion in understanding. Lifting up
                your business and highlighting as a Bigger Brand in the online
                market for boon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec13;
