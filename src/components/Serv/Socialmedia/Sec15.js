import React from "react";
import lady from "../../../assets/img/custom/lady.png";
import aa from "../../../assets/img/custom/aa.png";

function Sec15() {
  return (
    <section className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-img-wrap">
              <img src={lady} alt="img" className="main-img" />
              <img src={lady} alt="img" />
              <img src={aa} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title mb-25 tg-heading-subheading animation-style2">
                <h2 className="title tg-element-title">Why Choose Us?</h2>
              </div>
              <p>
                At Phanom Professionals, we strive to provide our clients with
                the best services when it comes to social media marketing Agency
                in Mumbai. Our team of experienced professionals is committed to
                helping our clients to achieve their goals and reach their
                target audience. We are dedicated to providing our clients with
                the best solutions that are tailored to their specific needs and
                objectives
              </p>

              <p>
                We understand the importance of engaging in social media
                marketing, also known as SMO (Social Media Optimization). We
                have the knowledge and experience to ensure that your business
                is well-represented on the various social media platforms and
                that your messages are reaching the right audience.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-cente mt-3">
          <div className="col-lg-12">
            <div className="about-content">
              <p>
                Businesses can also use these services to measure their progress
                and create monthly reports. Reports can include essential
                metrics such as engagement rate, post reach, number of likes,
                and comments. With accurate reporting, businesses can measure
                the success of their campaigns and make necessary changes.
                Overall, social media marketing in Mumbai can help businesses
                reach their goals and make the most of their efforts. By
                implementing the right strategies and leveraging the latest
                tools, businesses can generate leads, increase brand visibility,
                and improve customer loyalty.
              </p>

              <p>
                We also understand that social media is a constantly changing
                industry, so we are continuously adapting our strategies to stay
                ahead of the curve. Our team of experienced professionals can
                help you stay on top of trends and leverage the most effective
                tactics to keep your campaigns running smoothly. We have the
                tools, technology, and experience to make sure your social media
                marketing efforts are successful. With Phanom Professionals, you
                can rest assured that your brand is in good hands and that your
                messages are reaching the right people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec15;
