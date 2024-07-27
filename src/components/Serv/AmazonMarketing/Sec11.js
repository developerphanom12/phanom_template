import React from "react";
import baby from "../../../assets/img/custom/baby.jpg";
import goal from "../../../assets/img/custom/gaol.jpg";
import dot from "../../../assets/img/custom/dot.png";

function Sec11() {
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
                  UNLOCK THE BEST AMAZON BRAND STRATEGY!{" "}
                </h2>
                <p className="info-one">
                  ON THE PRODUCT LIST, INCLUDE THE AMAZON ENHANCED BRAND
                  CONTENT.
                </p>

                <p className="info-one">
                  To take the business to the next level, the right strategy for
                  reaching out to clients is required. Also, for a brand, you
                  will need a trademark that directly gives a visual identity to
                  your brand among other products. When a product becomes a
                  brand, we can do that for you. We help our clients to apply
                  for a trademark for their brand recognition. If you are
                  optimizing your brands and services with a proper strategy of
                  Amazon brand registry, it will go to high levels of
                  achievement. Proper Amazon product listings, enhanced brand
                  content, and Amazon certified strategies help our clients push
                  their sales to the A level. With Amazon A+ content, you get
                  additional products. listings and details with proper
                  information, which would help in getting a With a surge in
                  your traffic, conversion rates, and sales, with the foremost
                  and aristocratic repercussions.
                </p>

                <p className="info-one">
                  Keeping your business safe is very essential for you as a
                  brand in the market. And we help you to get your brand
                  security so that no one can infringe on your copyrights. This
                  will help in maintaining the products’ safety and there won’t
                  be any illegal selling of your brand’s products. With a proper
                  monitoring system, it will help in guarding your products for
                  unethical infringement. It can directly send the automated
                  removal request and will protect you against leech scams as
                  well.
                </p>
              </div>

              {/* <div className="content-bottom">
              <ul className="list-wrap">
                <li>
                  <div className="icon">
                    <i className="flaticon-trophy"></i>
                  </div>
                  <div className="content">
                    <h2 className="count">
                      <Odometer end={235} />+
                    </h2>
                    <p>Best Award</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="flaticon-rating"></i>
                  </div>
                  <div className="content">
                    <h2 className="count">
                      <Odometer end={98} />k
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </li>
              </ul>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec11;
