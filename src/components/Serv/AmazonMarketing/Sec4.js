import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec4() {
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
                PHANOM MADE SIMPLE AMAZON ACCOUNT MANAGEMENT!
                </h2>
                <h2>ACQUIRE THE MOST ROI BY MAXIMIZING YOUR AMAZON BUDGET.
                </h2>
              </div>
              <p className="info-one">
              In this competitive market, there are millions of people who shop online. Likewise, if you have also listed your products on Amazon but they are getting buried and not getting sold, you need a better strategy to expand your business market online. The proper account management of your Amazon account will be managed by our experts. And if you don’t know how you can start and distinguish your products or services, we can endorse you here.
              </p>

              <p className="info-one">
              The best team in our agency with experts makes it reliable and result-oriented. They will apply a custom strategy to give you the maximum output for your budget. Not only this, but we can commit you to giving splendid results, which will help you to get most outcomes in the form of a return on investment. This will be for your Amazon marketing to get sure leads.
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

export default Sec4;
