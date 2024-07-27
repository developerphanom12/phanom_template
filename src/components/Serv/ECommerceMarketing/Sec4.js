import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec4() {
  return (
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
                <h2 className="title tg-element-title">
                  Get Our unrestricted Pitch
                </h2>
              </div>
              <p className="info-one">
                The Blessing of the Lord brings wealth without painful toil for
                it.
              </p>

              <p className="info-one">
                Phanom Professional can perform as a valuable platform for all
                that chunks that is required by your business to be on the track
                of your “to be the Brand” journey. The platform that can create
                an interface among your consumers to get in-touch with you and
                your services. Nothing less but a great opportunity for making
                an online best market.
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
  );
}

export default Sec4;
