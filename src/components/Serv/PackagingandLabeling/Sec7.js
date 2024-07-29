import React from "react";
import aa from "../../../assets/img/custom/aa.png";

function Sec7() {
  return (
    <section className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-img-wrap">
              {/* <img src={lady} alt="img" className="main-img" />
              <img src={lady} alt="img" />*/}
              <img src={aa} alt="img" />
              <iframe
                width="500"
                height="315"
                src="https://www.youtube.com/embed/OLX34J33GOE?si=lT-cYV9vIVYqVF8X"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title mb-25 tg-heading-subheading animation-style2">
                <h2 className="title tg-element-title">
                  Why Should You Use Explainer Video Services In India?
                </h2>
              </div>
              <p>
                In this hectic world, where everyone has less time and more
                work. No customer will prefer spending his precious time in
                traversing your entire website and looking out for desired
                services. In such type of world, if you don’t present your
                services in a straight forward way, then it may even lead you to
                loose many of your potential customers. Keep reading to know how
                an explainer video company in India can help you to make your
                brand more famous with the help of animated videos.
              </p>
              <br />
              <p>
                An explainer video is an efficient and effective way of
                presenting all your services/products in an instant way. The
                video consists of your company’s logo, a commercially licensed
                background music, and brand title. Along with this, it consists
                of all your services and products that help the visitor to get
                complete information in an instant way. In simple words, an
                explainer video is a dynamic way of presenting all the services
                and products of the company. An explainer video can be regarded
                as one of the best ways to append the number of the target
                audience because:-
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec7;
