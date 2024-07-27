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
                  EXCELLENT AMAZON CATALOG ORGANIZATION
                </h2>
              </div>
              <p>
              MAXIMIZE YOUR AMAZON PRODUCT DETAIL PAGE & GET MORE CONVERSIONS.
              </p><br/>

              <p>
              Keeping a better and finer Amazon catalog can give customers an enchanting experience. Leads are generated by effectively representing your products, offers, prices, and catalogs. We are experts at creating the best catalog designs by incorporating parent-child variations. Complete optimization will be done on the basis of an appropriate variation strategy that can bring accolades to your revenue. A proper comparison by our team before putting the catalogs together makes it more efficient to generate the maximum output.
              </p><br/>

              <p>
              If the catalogs were managed or designed according to the brand, they would directly hit the customers. Moreover, we can significantly drive it to a higher pace of retention. Building a brand on Amazon directly shows off your fine identity on Amazon. Get sponsored brand advertisements as well to boost your sales.
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
