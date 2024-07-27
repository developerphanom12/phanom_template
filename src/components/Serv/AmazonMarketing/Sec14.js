import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec14() {
  return (
    <section className="about-area-three">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="about-img-wrap-three">
              <img
                src={girl}
                alt="img"
                data-aos="fade-down-right"
                data-aos-delay="0"
              />
              <img
                src={bb}
                alt="img"
                data-aos="fade-left"
                data-aos-delay="400"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-three">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Get To know US</span> */}
                <h2 className="title tg-element-title">
                  THE AMAZON SUSPENSION APPEAL
                </h2>
              </div>
              <p className="info-one">
                BOOST YOUR SALES AND GET REPEAT CUSTOMERS.
              </p>
              <p className="info-one">
                A better functioning Amazon account will help in boosting your
                presence and sales. But if you have a suspended account, that
                could bring a halt to your business. Every time, being available
                for your customers shows credibility. So, we address this issue
                of halting your Amazon product if, somehow, you get struck by
                this. A proper Amazon suspension appeal process will be managed
                by our guidance for your Amazon account. We will help you
                address this issue by talking to the Amazon account
                representative. Get your Amazon suspension resolved easily by
                using our services.
              </p>
              <p className="info-one">
                To flourish your business and bring it to the next level, we
                help you put in the best practices to handle all the glitches in
                your business presence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-wrap-two">
        <img src={aa} alt="img" />
        <img src={cc} alt="img" />
      </div>
    </section>
  );
}

export default Sec14;
