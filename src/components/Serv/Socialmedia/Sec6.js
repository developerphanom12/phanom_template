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
                  Increase E-commerce Sales Through Social Media
                </h2>
              </div>
              <p className="info-one">
                Social media marketing has become a crucial part of doing
                business in today’s digital age. As an online business owner,
                tapping into the potential of social media to increase sales can
                be a great opportunity. With the help of a professional social
                media marketing team in Mumbai, it is possible to gain more
                visibility and engagement for your products and services. The
                social media marketing experts in Mumbai can help you create
                effective campaigns that will help you reach out to your target
                audience and generate more leads. They can create content and
                campaigns that will help you reach out to customers who are
                interested in your products and services. The team can also help
                you craft engaging stories that can connect customers with your
                brand.
              </p>

              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Get To know US</span> */}
              </div>

              <p className="info-one">
                The team can help you create promotional campaigns that can help
                you reach out to a larger audience and get more engagement from
                them. They can also help you create and post engaging content
                that can help you build trust among your customers and increase
                your sales. We can help you promote your products and services
                on different social media platforms like Facebook, Twitter,
                Instagram, Pinterest and YouTube. They can also help you with
                paid marketing campaigns that can help you reach out to more
                potential customers
              </p>

              <p className="info-one">
                We can also help you with profile handling and daily posting.
                They can help you create and manage social media accounts that
                can help you reach out to more potential customers. The team can
                create content and campaigns that are tailored to your target
                audience, helping you reach out to the right kind of customers.
                Overall, with the help of the best social media marketing Agency
                in Mumbai, it is possible to increase the visibility of your
                brand, engage with customers and get more sales
              </p>

              {/* <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="about-list-two">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>How-To Videos</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Video Blogs</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Corporate Promos</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Video Ads</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="about-list-two">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Video Ads</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Video Testimonials</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Explainer Videos</p>
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <p>Social Engagement Videos & More</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

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
