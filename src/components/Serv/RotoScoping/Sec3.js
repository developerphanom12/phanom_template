import React from "react";
import { CHOOSE_SHAPE } from "../../../lib/assets";

function Sec3() {
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
                <h2 className="title tg-element-title">OVERVIEW</h2>
              </div>
              <p>
              Rotoscoping studio is one of the best platforms for delivering unrivaled rotoscope solutions in a short period of time. We have been in the market for over a decade and have over 1.3 million frames with satisfied solutions. Realistic actions and live action movie images as well as motion picture footage, etc all can be done impeccably here with us. We are known for our most exclusive projects like Jupiter Ascending, The Hunger Games, and Rise of an Empire, etc. We handle all television, web projects as well as a variety of films that include The Boys, Arrow, Breaking Bad, The Chilling Adventures of Sabrina and Salvation and Legends of Tomorrow etc. We create matte and use chroma keys because of its intense speed that provides a higher level accuracy & perfectly makes us the best. 
              </p>
            </div>

            {/* <div className="choose-content">
              <div className="section-title-two white-title mb-20 tg-heading-subheading animation-style3">
                <h2 className="title tg-element-title">
                  Why do you need Best Graphic Designing Services for your
                  Brand?
                </h2>
              </div>
              <p>
                Curbing your dream work at any stage can backlog your vision.
                Eyeing for an extravagant logo or some striking flyers, the
                endowed global neighborhood of designers at Phanom Professionals
                can make it transpire. Phanom Professionals take pride on its
                high ascribes designers who dispense the best graphic design
                services. “Well begun is half done” – get design you’ll honey
                endlessly !
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec3;
