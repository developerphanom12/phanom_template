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
                  SEARCH ENGINE OPTIMIZATION
                </h2>
              </div>
              <p>
                Undoubtedly, search engine optimization is the relevant and
                exact way to optimize your website or your content related to
                your business to bring intensified growth for your business on
                search engines. You can rank in the top 10 most searched
                websites and can generate good credibility and customer trust by
                building your brand awareness easily. Not only this but this can
                also improve the organic traffic as well as by coming in the top
                performing webpages your business will automatically go to the
                next level and these results actually need 2 to 6 months to get
                on the top 10.{" "}
              </p><br/>

              <p>
                A business cannot grow in a day or two as it takes some time and
                we assure you, if you take the SEO optimization services in
                India or digital marketing services in India, you won’t regret
                it ever. Because of this, there will be heavy organic search
                results that can directly meet your marketing goals within the
                timeline. Also, for having better credibility and the ability to
                provide flexibility to the customer, SEO and pay-per-click
                marketing are the direct ways to go.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec7;
