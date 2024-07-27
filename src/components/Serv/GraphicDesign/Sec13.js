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
                <h2 className="title tg-element-title">GRAPHIC DESIGN</h2>

                <h2 className="title tg-element-title">
                  Illustrative Enactment With Best Gambits For Your Brand{" "}
                </h2>
              </div>
              <p>
                From Logo Designing, pamphlets, Leaflets, catalogs, stationery
                design, product design, etc. are ideal for interactive forecast
                of communicating and other promoting tactics of brand building
                and reputation that will exemplify ranking also the reviews to
                amplify your smart grooves which make you feel proud and more
                confident for your bidding approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec13;
