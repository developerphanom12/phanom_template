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
                GROW 10X YOUR E-COMMERCE MARKETING CAMPAIGNS!
                </h2>
              </div>
              <p>
              To eliminate denials and low conversions, every seller should consider implementing a customer-centric ecommerce marketing strategy. All in all, it is about to have a great and tremendous user experience.

We also put an end to your search by turbocharging online campaigns and developing e-commerce website marketing solutions. To entice more customers, strategic implementation is required. E-commerce is really helpful in growing businesses with good competition.
              </p><br/>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec7;
