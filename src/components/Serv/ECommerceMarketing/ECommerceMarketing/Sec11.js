import React from 'react'
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
                WHAT IS PAY PER CLICK AND HOW DOES IT WORK?
                </h2>
                <p className="info-one">
                Expand your business using optimised paid search campaigns.
              </p>
                <h2 className="title tg-element-title">
                GET ADVANCED PPC MARKETING SERVICES.
                </h2>

                <p className="info-one">
                Many businesses are in the market in industry and they have completely grown with a high conversion rate. This could be only possible using digital marketing services because everything is completely digital in today’s time. Along with this, most of the users do most of their shopping online, and they mostly prefer other online platforms for their convenience.
              </p>
              <p className="info-two">
              As a result, businesses are focusing on how to provide their customers with a better reach in less time, based on their level of inconvenience. If your customers are pleased with your services, your brand’s identity or awareness will undoubtedly grow rapidly. But to do all this process, many businesses prefer some good marketing plans that help to boost their sales and give a nurtured customer list to them.
              </p>

              <p className="info-two">
              So, with the help of digital platforms, pay per click has completely become one of the most widely used strategies for building the best businesses in the market and top-level industries that are booming in less time. It can also generate a higher ROI and it can easily ramp up your business.
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
  )
}

export default Sec11