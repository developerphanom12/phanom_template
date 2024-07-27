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
                Do you have a YouTube channel? Invest in YouTube advertising and marketing to develop now!
                </h2>

                <h2 className="title tg-element-title">
                How an awful lot does YouTube pay for 1000 perspectives in India?
                </h2>
              </div>
              <p>
              If you create movies on YouTube and need to earn from YouTube through monetizing the YouTube channel, then you may expect to pay 50 INR to 300 INR for 1000 views in India. It varies greatly depending on location.Why Wait? Let’s talk now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec7;
