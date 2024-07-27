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
                  GO FOR E_COMMERCE MARKETING, WHY?
                </h2>
              </div>
              <p className="info-one">
                Gratify your customers with highly branded products and get
                qualified leads. E-commerce is the way to let people shop with
                GREATER CONVENIENCE, and e-commerce marketing is the relevant
                way to meet all the necessities with one click. It really set
                aside you time to endow in your customers and give enduring
                results for your business. Plump for e-commerce marketing
                services and beat the competition in the market
              </p>

              <h2 className="title tg-element-title">
                WHAT IS E-COMMERCE MARKETING?
              </h2>
              <p className="info-one">
                OPTIMIZE YOUR BUSINESS CENTRALLY Your business needs fulfledged
                optimization to make it a BRAND. There is a complete organized
                system of siloed channels and Phanom Professionals can assist in
                scrutinizing all the tools associated with your business market.
                Along with lead generation and brand kins, product listings, and
                more, we can succour to triumph the best results for your
                “Brand”.
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
