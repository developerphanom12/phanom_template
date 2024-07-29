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
              {/* <img
                src={girl}
                alt="img"
                data-aos="fade-down-right"
                data-aos-delay="0"
              /> */}

              <iframe
               
                className="video"
                src="https://www.youtube.com/embed/HThXcDLEV0A?si=tSUfg9png1mt_pIL"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              {/* <div
                className="experience-wrap"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">
                  25 <span>Years</span>
                </h2>
                <p>Of Experience in This Finance Advisory Company.</p>
              </div> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-three">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                {/* <span className="sub-title">Get To know US</span> */}
                <h2 className="title tg-element-title">
                  The best part? Everything.
                </h2>
              </div>
              <h4>Best work under budget</h4>
              <p>
                Find the right service for every price point. Minimum hourly
                Charges & project-based pricing.
              </p>
              <br />

              <h4>Get quality work done with Timly Project Delivery</h4>
              <p>
                Hand your project over to a 200+ talented team in minutes, get
                long-lasting results.
              </p>
              <br />

              <h4>Pay Securely with Escrow</h4>
              <p>
                Upfront quotes mean no surprises. Payments only get released
                when you approve.
              </p>
              <br />

              <h4>Marketplace for all Digital Needs</h4>
              <p>
                Best Marketplacce for your all Digital Needs. Such as Website
                Development, App Development, Software Development, Digital
                Marketing, Branding,Packaging & Labeling, Animation, Video
                Editing & many more.
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