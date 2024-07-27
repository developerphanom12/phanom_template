import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec15() {
  const list = [
    "Facebook Marketing",
    "Instagram Marketing",
    "Twitter Marketing",
    "LinkedIn Marketing",
    "YouTube Marketing",
    "Pinterest Marketing",
  ];
  return (
    <section className="about-area-three">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="about-content-three">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Get To know US</span> */}
                <h2 className="title tg-element-title">
                  AMAZON MARKETING AGENCY
                </h2>
              </div>
              <p className="info-one">
                GET IN-DEPTH REPORTS OF YOUR AMAZON ACCOUNT'S STATUS.
              </p>

              <h2 className="title tg-element-title">
                THE AMAZON MARKETING AGENCY BADGE
              </h2>

              <p className="info-one">
                Get the best integrity in the area of your business and get
                proper reports of the performance of your business. Get in touch
                without any worry and get to know how your business is working
                or performing in the market. Attain all reports weekly and
                monthly with complete transparency. Keep an eye on your revenue
                surging status to see the utmost and tireless efforts of our
                services.
              </p>

              {/* 
            <div className="row">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="about-list-two">
                  <ul className="list-wrap">
                    <li>
                      <i className="fas fa-arrow-right"></i><p>Increased Rivalry</p>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i><p>The growth of Ad Blockers</p>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i><p>Strict Industry Standards</p>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i><p>
                      Adapting to Customer Requirements</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="about-list-two">
                <ul className="list-wrap">
                    <li>
                      <i className="fas fa-arrow-right"></i><p>Digital Advertising is Expensives</p>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i><p>
                      Different Market Norms</p>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i><p>
                      Evasive Customers</p>
                    </li>
  
                  </ul>
                </div>
              </div>
            </div> */}
            </div>
          </div>

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
              {/* <div
              className="experience-wrap"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="title">
                25 <span>Years</span>
              </h2>
              <p>Of Experience in This Finance Advisory Company.</p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-wrap-two">
        {/* <img src={aa} alt="img" /> */}

        <img src={cc} alt="img" />

        {/* <img
        src={aa}
        alt="img"
        data-aos="fade-left"
        data-aos-delay="500"
      />  */}
      </div>
    </section>
  );
}

export default Sec15;
