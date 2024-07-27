import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";


function Sec5() {
  const list = [
    "Facebook Marketing",
    "Instagram Marketing",
    "Twitter Marketing",
    "LinkedIn Marketing",
    "YouTube Marketing",
    "Pinterest Marketing",
  ];
  return (
    <section className="about-area-three">
    <div className="container">
      <div className="row align-items-center justify-content-center">

        <div className="col-lg-6">
          <div className="about-content-three">
            <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
              {/* <span className="sub-title">Get To know US</span> */}
              <h2 className="title tg-element-title">
              Pay Per Click Marketing Company in Mohali.
              </h2>
            </div>
            <p className="info-one">
                  Many companies in the market industry can confront frequent challenges to their business growth, and they include:
            </p>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="about-list-two">
                  <ul className="list-wrap">
                    <li>
                      <i className="fas fa-arrow-right"></i><p>Increased Rivalry</p>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i><p>The growth of Ad Blockers</p>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i><p>Strict Industry Standards</p>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i><p>
                      Adapting to Customer Requirements</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="about-list-two">
                <ul className="list-wrap">
                    <li>
                      <i className="fas fa-arrow-right"></i><p>Digital Advertising is Expensives</p>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i><p>
                      Different Market Norms</p>
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i><p>
                      Evasive Customers</p>
                    </li>
  
                  </ul>
                </div>
              </div>
            </div>

            <p className="info-one">
              
Evasive Customers
Well, in the time of digital marketing, with the help of Pay Per Click (Google Ads), it can be possible to reach millions of customers, but for grabbing the services to get more leads, Pay Per Click giants have made it costlier to get a good reach to customers and attain leads. So many businesses or companies need to start some social media campaigns through which they tend to reach their targeted audience.
            </p>

            <p className="info-one">But along with these services like Google Ads or Pay Per Click there is another helping tool which can help your business in getting a good rank on the search engine that is a search engine optimization. By optimizing your website order the content written on it can help you in growing your business and attracting more customers to your platform to generate good revenue.</p>
            <p className="info-one">However, if you want to grow your business quickly, instead of using all of these customer services, there is an additional way to get a good and immediate reach to quality customers and better leads, which is pay per click advertising. Yes, it can definitely boost your business and give a fast return on investment for you.</p>
  
          </div>
        </div>

        <div className="col-lg-6 col-md-9">
          <div className="about-img-wrap-three">
            <img
              src={girl}
              alt="img"
              data-aos="fade-down-right"
              data-aos-delay="0"
            />
            <img
              src={bb}
              alt="img"
              data-aos="fade-left"
              data-aos-delay="400"
            />
            {/* <div
              className="experience-wrap"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="title">
                25 <span>Years</span>
              </h2>
              <p>Of Experience in This Finance Advisory Company.</p>
            </div> */}
          </div>
        </div>

      </div>
    </div>
    <div className="about-shape-wrap-two">
      {/* <img src={aa} alt="img" /> */}

      <img src={cc} alt="img" />

      {/* <img
        src={aa}
        alt="img"
        data-aos="fade-left"
        data-aos-delay="500"
      />  */}
    </div>
  </section>
  );
}

export default Sec5;
