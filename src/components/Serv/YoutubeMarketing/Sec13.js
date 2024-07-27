import React from 'react'
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
function Sec13() {
  return (
    <section className="about-area-three">
      <div className="container">
        <div className="row align-items-center justify-content-center">

        <div className="col-lg-6">
            <div className="about-content-three">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Get To know US</span> */}
                <h2 className="title tg-element-title">
                Why should you choose to invest in YouTube marketing in India?
                </h2>

              </div>
              <p className="info-one">
              YouTube, being one of the most thrilling and traffic-rich systems, can provide wings to your marketing and marketing plans, and we, at Phanom Professionals, the principle Youtube advertising organisation in India, make it virtually feasible for you. We have a dedicated crew of skilled YouTube advertising specialists who will market your video on YouTube for multiplied publicity, so don’t wait and take a look at what we will offer you beneath.
              </p>



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

    </section>
  )
}

export default Sec13