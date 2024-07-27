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
                  HOW WELL E-COMMERCE MARKETING TOILS?
                </h2>
              </div>
              <p>
                There is a team of experts who will directly assist you in
                making the best use of your time because there is no need to
                struggle anymore searching for different websites to promote
                your business or looking for different campaigns about which you
                are not aware. So, complete guidance and strategic planning with
                all the fundamentals and the PPC management services will be
                given to you whenever you need it. And this can definitely help
                you to achieve success in your business and in less time.
              </p>

              <p>
              There are many social media sites like Facebook, LinkedIn, Pinterest, etc. that directly take their support from pay per click models and many digital marketing services like SEO for getting better Google search engine result pages for their businesses. Because the services can do more than you expect from your business, and in the online era, this makes it easier to reach millions of customers in one click.

Using the PPC marketing service, many online marketing platforms can directly generate a list of the complete or partial services or offers that they are rendering to the customers to attract them all with the more powerful or energetic content in their PPC Ads.
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
