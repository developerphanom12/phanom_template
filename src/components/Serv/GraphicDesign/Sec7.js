import React from "react";
import lady from "../../../assets/img/custom/lady.png";
import aa from "../../../assets/img/custom/aa.png";


function Sec7() {
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
                <h2 className="title tg-element-title">
                Grab Our Hand For Ramping Your Website To The
                </h2>

                <h2 className="title tg-element-title">
                Next Level
                </h2>
              </div>
              <p>
                  Witness how easy and epic it become while you handle your own website like a pro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec7;
