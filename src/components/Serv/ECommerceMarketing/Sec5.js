import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec5() {
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
                  HASTIER GROWTH WITH SASSINESS AND AUDACITY
                </h2>
              </div>
              <p className="info-one">
              Hastier Growth with sassiness and audacity


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

              <p className="info-one">
              Every man jack is chasing after the convenience of online shopping. Corporeal shopping expeditions are a long way to go for customers. With Phanom Professionals helping hand your podium -E-commerce has made it possible for anyone who can’t even go window shopping on their own. Easy going, no wait for billing, receiving free shipping, substantial discounts, and having access to a diverse range of products at unbeatable prices are all at one page.
              </p>

              <p className="info-one">
              About 2.05 billion digital buyers are shopping via E-Commerce Podium. Striding and stiff competition at present, E-Commerce has made it feasible to attain the best benefits and offers with this marketing strategy.
              </p>

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

export default Sec5;
