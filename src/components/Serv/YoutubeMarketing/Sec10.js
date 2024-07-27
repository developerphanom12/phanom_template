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
                  Are You New To The Marketplace?
                </h2>

                <h2 className="title tg-element-title">
                  Boost Business Exposure Right Away With Our YouTube Marketing
                  Services!{" "}
                </h2>
              </div>
              <p>
                Nowadays, one of the hardest occupations is making an emblem
                popular because it takes a lot of money, work, and time.
                Utilizing YouTube advertising, you can easily and affordably
                raise brand recognition.{" "}
              </p>
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
