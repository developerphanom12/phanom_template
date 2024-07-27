import React from "react";
import lady from "../../../assets/img/custom/lady.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec10() {
  return (
    <section className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title mb-25 tg-heading-subheading animation-style2">
                <h2 className="title tg-element-title">
                GET ADVANCED PPC MARKETING SERVICES.
                </h2>

              </div>
              <p>
              Before getting any plan or service, it is vital to know each and every detail about the plan and strategies we are going to apply to your business to take it to the next level. As a result, you can easily get a thorough explanation of PPC, PPC advertising, and the pay per click campaign.              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-img-wrap">
              <img src={lady} alt="img" className="main-img" />
              <img src={lady} alt="img" />
              <img src={aa} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec10;
