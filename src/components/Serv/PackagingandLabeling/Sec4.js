import React from "react";
import cc from "../../../assets/img/custom/cc.png";
import aa from "../../../assets/img/custom/aa.png";
import styled from 'styled-components';


function Sec4() {
  return (
    <Root>
    <section className="about-area-three">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="about-img-wrap-three">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wwCntx1Kub0?si=8FvXgg2kD6P4rHi8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-three">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                <h2 className="title tg-element-title">
                  Innovation And Original Display
                </h2>
              </div>
              <p className="info-one">
                The under laying project for product visibility as per market
                and consumer need, we deliver the remarkably prominent
                illustrative.
              </p>
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
    </Root>
  );
}

export default Sec4;

const Root = styled.section`
 
iframe{
 width:560px;
 height:315px;
}

@media(max-width: 567px){
 iframe{
 width:100%;;
 height:315px;
}
div#movie_player {
   width: 100%;
   height: 315px;
}


}
`;