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
                <h2 className="title tg-element-title">OPEN UP STRAGLULATIONS FOR BONDING WITH YOUR CUSTOMERS</h2>
              </div>

              <p>
              Have valued outcomes for your company. Gathering quality customers and generating targeted traffic can be a more challenging task to tackle for business owners. It is now possible to attract more customers by building your own online business. Because in traditional business, there are many complexities to growing and meeting the demands of customers on their doorstep. Our e-commerce marketing solution can be tailored to the needs and requirements of the customers and can take them to massive levels. We are also into making use of cross-channel digital marketing strategies. This can lead to meeting your marketing goals with high optimization methods.

              </p><br/>



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
