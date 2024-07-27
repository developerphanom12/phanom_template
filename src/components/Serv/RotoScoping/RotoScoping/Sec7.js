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
                  Keep Things Up Ahead For Cut
                </h2>

                <h2 className="title tg-element-title">Throat Competition</h2>
              </div>
              <p>
                About the website content, the imperious things are its quality
                and compatibility that matters the most. There is no room for
                the content if there is no efficient credibility. It needs to be
                fascinating and exceedingly proficient. The enchantment of the
                content must be appealing and in harmony with your business& can
                help boost in every input and output. The web design content
                support the utmost possibility of growth and development with
                constant profitability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec7;
