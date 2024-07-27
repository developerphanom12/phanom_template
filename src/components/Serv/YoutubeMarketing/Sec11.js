import React from 'react'
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
              <h2 className="title tg-element-title">
              How Our YouTube Marketing Services Help Businesses in India
              </h2>
            </div>
            <p>As a trusted YouTube advertising company, we examine and develop a better YouTube marketing strategy while you hire our YouTube advertising enterprise to manage your YouTube marketing campaigns. We rely on YouTube Marketing Tools to analyse your competition and optimise your YouTube videos to make sure their optimization rating is high.</p>
            <div className="section-title-two white-title mb-20 tg-heading-subheading animation-style3">
              <h2 className="title tg-element-title">
              What is our YouTube marketing company's entire process?
              </h2>
            </div>
             
              <p>Our top-rated YouTube advertising and Youtube marketing company In India affords various varieties of YouTube promotional offerings.

</p>
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
  )
}

export default Sec11