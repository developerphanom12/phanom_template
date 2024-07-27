import React from "react";
import lady from "../../../assets/img/custom/lady.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec15() {
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
                  Do you want to promote your video on YouTube and on other
                  extraordinary structures?
                </h2>
              </div>
              <p>
                Phanom Professionals, a main YouTube marketing Company in India,
                is the call you have to make for your YouTube video advertising
                wishes, as we’ve got years of experience doing video marketing
                for numerous groups and producing ideal outcomes at a brilliant
                price. Visit our YouTube advertising programmes now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec15;
