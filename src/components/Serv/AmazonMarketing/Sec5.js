import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec5() {
  // const list = [
  //   "Facebook Marketing",
  //   "Instagram Marketing",
  //   "Twitter Marketing",
  //   "LinkedIn Marketing",
  //   "YouTube Marketing",
  //   "Pinterest Marketing",
  // ];
  return (
    <section className="about-area-three">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="about-content-three">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                <h2 className="title tg-element-title">
                  EFFECTIVE AMAZON LISTING OPTIMIZATION
                </h2>
              </div>
              <p className="info-one">
                GIVE YOUR PRODUCTS AND SERVICES A FINE TOUCH WITH DESCRIPTIONS
                AND IMAGES.
              </p>

              <p className="info-one">
                Your product might not get leads due to not getting listed
                correctly on Amazon. But you just need to focus on it from the
                beginning to end, keeping the complete strategy and the correct
                optimization for your Amazon product listings. This will
                apparently help in getting organic rankings and sales.{" "}
              </p>

              <p className="info-one">
                Every aspect of the product listing page can be seen as an
                opportunity for optimization:{" "}
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="about-list-two">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Product titles.</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Descriptions.</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Bullet points.</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Images</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="about-list-two">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Keywords</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Vital product information.
                        </p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Additional manufacturer’s information.
                        </p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Reviews.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
