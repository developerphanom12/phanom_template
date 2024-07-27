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
          Our Paid YouTube Marketing Offerings Encompass
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
                  <h2 className="title tg-element-title">Pre-Roll Video Ads</h2>
                </div>
                <p className="info-one">
                  This form of YouTube video advertisement appears earlier than
                  a video load and performs for approximately 30 seconds. There
                  could be an alert that asserts that “Video will play after the
                  ad.”{" "}
                </p>

                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                  {/* <span className="sub-title">Get To know US</span> */}
                  <h2 className="title tg-element-title">In-Stream Ads</h2>
                </div>
                <p className="info-one">
                  Your movies are probably proven to customers before they view
                  an ordinary video. Get an option there of the “Skip Ad”
                  button.
                </p>

                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                  {/* <span className="sub-title">Get To know US</span> */}
                  <h2 className="title tg-element-title">Bumper Ads</h2>
                </div>
                <p className="info-one">
                  If you don’t have the budget to create an extended video to
                  run advertisements on YouTube, then use the bumper ad format
                  to expose a 6-second, non-skippable clip earlier than a
                  regular video.
                </p>

                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                  {/* <span className="sub-title">Get To know US</span> */}
                  <h2 className="title tg-element-title">In-Display Ads</h2>
                </div>
                <p className="info-one">
                  If you don’t need your ads to appear in YouTube motion
                  pictures, then skip on in-display advertisements. You may be
                  charged for the impressions and clicks you get from your
                  in-show commercials on YouTube.
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
