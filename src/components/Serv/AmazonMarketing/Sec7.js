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
                  PRICING AND STRATEGY TESTING TO GENERATE MORE LEADS
                </h2>
              </div>
              <p>
                GET PARAMOUNT RESULTS BY BEING AMONG THE TOP AMAZON SELLERS.
              </p>

              <p>
                If you have listed the products on Amazon but are not following
                a proper strategy to put them up for sale with suitable offers,
                you won’t be able to generate more leads. Because the price and
                description of the products decide the ranking, conversion, and
                revenue level. We will examine you and guarantee that you will
                receive the best price that is competitive in the market and
                will provide the best services to your customers.
              </p>

              <p>
                To get a top ranking, there are some measures that need to be
                followed. So, Amazon optimization should be completely managed.
                But for that, you do need to change your price list frequently.
                This will have a direct impact on the brand’s performance and
                credibility with customers. Because updating the best prices for
                people can attract them more quickly. More offers with your
                products will bring a good reach. Boost your profit margins and
                drive abundant sales with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec7;
