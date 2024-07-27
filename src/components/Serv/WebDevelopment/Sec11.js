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
              Freeze The Eyes Of Your Viewers With Your Potential!
              </h2>
            </div>
            <p>
            The brand you will become for the users will definitely take your aim higher and higher with our consultation.
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