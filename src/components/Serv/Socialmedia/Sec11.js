import React from "react";
import { CHOOSE_SHAPE } from "../../../lib/assets";
import { Link } from "react-router-dom";

function Sec11() {
  return (
    <section className="choose-area jarallax choose-bg">
      <div className="choose-shape">
        <img
          src={CHOOSE_SHAPE}
          alt=""
          data-aos="fade-right"
          data-aos-delay="0"
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="choose-content">
              <div className="section-title-two white-title mb-20 tg-heading-subheading animation-style3">
                <h2 className="title tg-element-title">Social Media Podium</h2>

                <h2 className="title tg-element-title">
                  Mark Your Imprint On Social Media With Best Manoeuvres For
                  Your Brand
                </h2>
              </div>
              <p>
              Our tested support system for the upliftment of your brand on the Social Media Podium will exemplify you on the top branding list also the user reviews amplify your trendy grooves which your users will make you feel proud to be.
              </p>
              <div className="section-title-two white-title mb-20 tg-heading-subheading animation-style3"></div>

          
              <Link
                to="/"
                className="btn"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                GET 30 MIN FREE CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec11;
