import React from "react";
import lady from "../../../assets/img/custom/lady.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec8() {
  return (
    <section className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title mb-25 tg-heading-subheading animation-style2">
                <h2 className="title tg-element-title">PAY-PER-CLICK</h2>
              </div>

              <p>
                With the use of pay per click advertising, tasks or performing
                best become easier because PPC advertising allows your business
                to take complete charge of the ad spend and it is the thrifty
                way to reach your targeted audience easily. In a short span of
                time and in the right place, it helps to bring more customers to
                your platform.{" "}
              </p><br/>

              <p>
                Building brand awareness and increasing the credibility rate
                directly increase the probability of getting more conversions,
                and this can also be intensified with the help of pay-per-click
                advertising services.{" "}
              </p><br/>

              <p>
                If a business wants to grow online, working on the proper
                strategies and planning can help in achieving Kuwait and
                targeted results. Therefore, the SCO and PPC advertising
                strategies give maximum output for your business reach, and you
                can easily deliver the long-term benefits to your customers.
                Using digital marketing services, promoting your brands and
                products can directly generate a good rate of conversion.
              </p><br/>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-img-wrap">
              <img src={lady} alt="img" className="main-img" />
              <img src={lady} alt="img" />
              <img src={aa} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec8;
