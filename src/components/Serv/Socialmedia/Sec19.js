import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec19() {
  return (
    <>
      <div className="section-title-two mb-20  tg-heading-subheading animation-style3">
        {/* <span className="sub-title">Get To know US</span> */}
        <h2 className="title tg-element-title text-center">
          SMM- Paid Marketing On Social Media
        </h2>
      </div>

      <section className="about-area-three">
        <div className="container">
          <div className="row align-items-center justify-content-center">
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
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content-three">
                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                  {/* <span className="sub-title">Get To know US</span> */}
                </div>
                <p className="info-one">
                  The use of paid social media marketing is becoming
                  increasingly popular for businesses of all sizes. While many
                  traditional forms of advertising are expensive and require a
                  significant amount of labor to execute, social media marketing
                  campaigns are relatively inexpensive and can be managed with
                  minimal effort. There are a variety of services available to
                  help businesses create and manage highly effective social
                  media campaigns.
                </p>

                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                  {/* <span className="sub-title">Get To know US</span> */}
                </div>
                <p className="info-one">
                  When it comes to implementing a successful social media
                  marketing campaign, it’s important to focus on creating
                  quality content that resonates with your target audience.
                  Additionally, businesses should be sure to monitor their
                  campaigns and track the results in order to ensure that the
                  campaign is effective and achieving its goals. Finally,
                  businesses should be sure to monitor the conversation about
                  their brand on social media and respond to any customer
                  feedback or queries in a timely manner.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-wrap-two">
          <img src={aa} alt="img" />
          <img src={cc} alt="img" />
        </div>
      </section>
    </>
  );
}

export default Sec19;
