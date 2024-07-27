import React from "react";
import { CHOOSE_SHAPE } from "../../../lib/assets";

function Sec9() {
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
                  KNOW ABOUT E- COMMERCE MARKETING
                </h2>
              </div>
              <p>
                Get aware where you stand Before taking advantage of any
                service, it is quite important to know about each and every
                detail of it. As a result, when using pay per click marketing
                services, it is critical to understand what it is. So this is a
                paid search model that does directly apply to your business, and
                this will directly help in promoting your brand products and
                increasing your brand awareness among the customers who will
                search for your products and services in a single click.{" "}
              </p>
              <p>Using a PPC service, businesses who want to give their advertisements of their businesses and want to reach their target audience just need to pay each time a user clicks on their PPC Ads.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec9;
