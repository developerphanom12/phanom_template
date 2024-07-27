import React from "react";
import lady from "../../../assets/img/custom/lady.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec8() {
  return (
    <section className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title mb-25 tg-heading-subheading animation-style2">
                <h2 className="title tg-element-title">
                  UTILIZE THE BEST AMAZON MARKETING SERVICES
                </h2>
              </div>

              <p>
                Consider the best option for getting your product to customers.
                This is only possible with an effective Amazon service marketing
                strategy. Now, if you are new to business and want to bring it
                online, we can make it confidently better and more competitive
                in the online market.
              </p>
              <br />

              <p>
                Our services can give you more clues and best practices to
                optimize the products with a high rate of conversions. Our
                strategies include promotional offers with a wide range of
                ultimate savings that include
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

export default Sec8;
