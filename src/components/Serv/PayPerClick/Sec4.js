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
                Making Mountains                </h2>
                <h2 className="title tg-element-title">
                Increase the reach with PPC advertising               </h2>
              </div>
              <p className="info-one">
              Every business is growing rapidly thanks to digital marketing services, and there are many websites that are proliferating at work speed and with high-end resolutions and customer retention. Many E-commerce businesses are making greater sales, and this could only be possible by increasing their marketing reach and brand awareness.              </p>


                  <p className="info-one">If a business is not growing faster on online portals, there could be some scarcity of resources and advertising tools as well as digital marketing channels. This positive can be replenished with our strategic planning to give great progress to your business with our Best Pay Per Click Services.</p>
 


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
