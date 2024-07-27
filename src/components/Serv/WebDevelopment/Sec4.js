import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";





function Sec4() {
  const list = [
    "Full Stack Development",
    "E-Commerce Web Development",
    "Content Management Systems",
    "B2B E-Commerce Solutions",
    "Web Database",
    "Web Applications",
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

          <div className="col-lg-6">
            <div className="about-content-three">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Get To know US</span> */}
                <h2 className="title tg-element-title">
                Your WIZARD OF BEHIND THE SENSES To Make Efforts Presentable
                </h2>
              </div>
              <p className="info-one">
              Your “WIZARD OF BEHIND THE SENSES” To Make Efforts Presentable Being a professional our ideal agenda in this cutthroat Competitive market is to reserve the higher rank with client satisfaction. The brilliant piece of frame work is done on both front and back-end and managing the data on the server as well, we are best to facilitate for the best and to stand along to PREPARE, PERFORM, AND PROSPER for the best.
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