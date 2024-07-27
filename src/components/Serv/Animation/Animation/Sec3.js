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
                <h2 className="title tg-element-title">
                  We're Phanom Professionals, Your Growth Partner
                </h2>
              </div>
              <p>
                With changing scenario of Digital Marketing, Animation is
                something that turns a boring aspect into perfection and clear
                the background in well-known practice, we evidently take care of
                that. The technicality of designing a website or page is based
                on the high level of animation and frame works with the
                programmers to run in the background that act as the support
                system of each task performed on that site or page.
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
