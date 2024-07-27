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
                Obsessive Approach With Our Animation Services
                </h2>

                <h2 className="title tg-element-title">
                Next Level
                </h2>
              </div>
              <p>
              We make Custom Animated Videos according to customer requirements. We have served E-Learning, Institutes, corporates, Marketing Animation, Medical Animation, Product Animation, safety, creative characters, 3D/2D characters, and E-commerce. If you are seeking Professional Animated Videos you have come to the right place. In our 3d animation Service in Chennai, we produce 2D & 3D Animation Services at affordable cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec7;
