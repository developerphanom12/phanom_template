import React from "react";

import baby from "../../../assets/img/custom/baby.jpg";

import goal from "../../../assets/img/custom/gaol.jpg";

import dot from "../../../assets/img/custom/dot.png";

function Sec6() {
  return (
    <section className="overview-area pt-4 pb-120">
      {/* <div
        className="overview-shape"
        data-aos="fade-left"
        data-aos-delay="200"
      ></div> */}
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="overview-img-wrap">
              <img src={baby} alt="" />
              <img src={goal} alt="" data-parallax='{"x" : 50 }' />
              <img src={dot} alt="" />
              <div className="icon">
                <i className="flaticon-report-1"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="overview-content">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Company Overview</span> */}

                <h2 className="title tg-element-title">
                  MAGNIFICENT LEVELS OFFICIALDOM CAN ACHIEVE WITH US.
                </h2>
              </div>
              <p className="info-one">
              “Happy is the man who finds wisdom, and the man who gains understanding;”

E-commerce marketing has truly been a boon for both dealers and customers.Because, in general, it aids in transforming the difficult and tricky methods of selling products into a simple form.It simplifies the business and reduces the amount of hard work on papers. As well, it results in great efficiency and a faster process.

Many have admitted that e-commerce development is enormous and helps in expanding business nationally and internationally rapidly. Because e-commerce is a fully technologically enabled, fully transparent, and less expensive business platform,Also, it increases the retention level of the customers by providing them with a return facility according to their gratification. In promoting businesses online, e-commerce marketing can be proven as a way to acquire higher levels by getting more leads.
              </p>

              <p className="info-one">
              As compared to holding a traditional business, e-commerce is growing 14.1% year-on-year (YOY). The reason for this is that buyers only want substantial services delivered to their door, and e-commerce platforms are meeting their needs on time.It saves customers’ time and reduces the time it takes to grow digitally in the stores. Digital marketing is really giving leverage to businesses to boom in a shorter time with high market revenue and great productivity.
Digital shops get high traffic, brand recognition, affordable investment, authenticity, trendy strategies, and high growth with wide exposure. In e-commerce marketing, the entire optimization is done for businesses. Personalized online campaigns contribute to a 10% increase in sales.Not only this, but creating a personalised user experience also boosts the brand identity.

With the help of our services, you can do more in your business with a high rate of success.
              </p>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec6;
