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
                  Search Engine Optimisation
                </h2>

                <h2 className="title tg-element-title">
                  Make You Mark With SEO Plus Operations For Your Brand
                </h2>
              </div>
              <p>
                Search Engine Optimization Make You Mark With SEO Plus
                Operations For Your Brand We render the building blocks with
                more efficient optimization on popular search engines that will
                represent you on their top viewer’s list as well as users too;
                hence you will have the max flow of customers.
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
