import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";





function Sec4() {
  const list = [
    "Keyword Research & Strategy",
    "Link Building",
    "Technical SEO",
    "Local SEO",
    "On-Page SEO",
    "Off-Page SEO",
  ];
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
              <div
                className="experience-wrap"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">
                  25 <span>Years</span>
                </h2>
                <p>Of Experience in This Finance Advisory Company.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-three">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Get To know US</span> */}
                <h2 className="title tg-element-title">
                  The Idea For SEO Expertise For Exceptional Upshots
                </h2>
              </div>
              <p className="info-one">
                Hence the providence is to make your website more eye-catchy and
                Search Engine over the top performer in ranking is divinely act
                by our experts &amp; seek for you and your users &amp; visitors
                the best outcomes desired or searched. To create your online
                reputation we are here to facilitate your agenda via our ideal
                keys to become on top of the links of every search
              </p>

              <div className="about-list-two">
                <ul className="list-wrap">
                  {list.map((item, idx) => (
                    <li key={idx}>
                      <i className="fas fa-arrow-right"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <p>
                Morem ipsum dolor sit amet, consectetur adipiscing elita florai
                psum dolor sit amet, consecteture.
              </p> */}

            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-wrap-two">
      <img src={aa} alt="img" />
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

export default Sec4;
