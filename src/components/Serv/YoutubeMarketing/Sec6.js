import React from "react";
import girl from "../../../assets/img/custom/girl.jpg";
import bb from "../../../assets/img/custom/bb.jpg";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec6() {
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
                  Services For Organic YouTube Management Include{" "}
                </h2>
              </div>
              <p className="info-one">
                If you need to rank organically on YouTube, then our natural
                YouTube search engine optimization offerings will help your
                video rank higher. We handle YouTube’s complete search engine
                optimization for you while you lease us for YouTube marketing
                services. Here is how our YouTube advertising business
                enterprise helps your YouTube movies rank:
              </p>

              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Get To know US</span> */}
                <h2 className="title tg-element-title">Video Creation </h2>
              </div>

              <p className="info-one">
                We are a team of professional video videographers, editors, and
                voice-over professionals in India, and we can assist you in
                creating an excellent video for your YouTube channel to have
                interaction with your subscribers. We can create first-class,
                notable movies to help your YouTube channel reach new heights.
              </p>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="about-list-two">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-arrow-right"></i><p>How-To Videos</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i><p>Video Blogs</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i><p>Corporate Promos</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i><p>
                        Video Ads</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="about-list-two">
                  <ul className="list-wrap">
                      <li>
                        <i className="fas fa-arrow-right"></i><p>Video Ads</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i><p>
                        Video Testimonials</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i><p>
                        Explainer Videos</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i><p>
                        
Social Engagement Videos & More</p>
                      </li>
                    </ul>
                  </div>
                </div>
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

export default Sec6;
