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
                  Marketing TACT’S AND TICS In Branding
                </h2>

                <h2 className="title tg-element-title">
                  Your Business Throughout
                </h2>
              </div>
              <p>
                With help of accurate strategy of Social Media Optimization we
                can hits the target audience to propagate a brand’s esteem. More
                views take the brand to a new next level. We at Phanom
                Professionals prepare the tactics for the greater growth rate
                and offer you a hand to prosper the sales and achieve the goal
                to become a brand of peoples’ choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec7;
