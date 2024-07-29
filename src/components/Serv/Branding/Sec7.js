import React from "react";
import aa from "../../../assets/img/custom/aa.png";
import lady from "../../../assets/img/custom/lady.png";


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
                Phanom for Business.
                </h2>
                <h2 className="title tg-element-title">
                A Complete solution built for businesses
                </h2>
              </div>
              <p>
              Upgrade your experiences with our talented and dedicated teams.
              </p>
              <br />
              <ul>
                <li>Guranteed Project delivered on time.</li>
                <li>Biggest Marketplace for all your Digital Needs</li>
                <li>100% Payment Security</li>
                <li>24*7 Support Available</li>
                <li>Regular Project Tracking</li>
                <li>Dedicated Project Manager</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec7;
