import React from "react";
import lady from "../../../assets/img/custom/lady.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec13() {
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
                <h2 className="title tg-element-title">ANIMATION</h2>

                <h2 className="title tg-element-title">
                  Illustrative Enactment With Best Gambits For Your Brand
                </h2>
              </div>
              <p>
                2D, 3D, Motion, Flash Animation, and VFX etc. are ideal tools
                for interactive website animations and other similar multimedia
                that will exemplify your website on ranking also the user
                reviews amplify your smart grooves which make you feel proud and
                more confident for your forecasting approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec13;
