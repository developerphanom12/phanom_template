import React from "react";
import styled from 'styled-components';


function Sec13() {
  return (
    <Root>
    <section className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-img-wrap">
              <iframe
               className="video"
                src="https://www.youtube.com/embed/OLX34J33GOE?si=F5BKHQvWtqhIaz2Z"
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
                  Why should your brand has A Great Brand Story?
                </h2>
              </div>
              <p>
                A good brand is a story that the world likes to retell. Getting
                that to happen, is not by chance. We work with our clients on
                strategy, positioning and storytelling execution. This allows
                our clients to serve their marketplace through education and
                inspiration, which also has the effect of leaving a far greater
                impact on all who they come into contact with. We are a
                full-service branding, packaging, logo designing, and personal
                branding agency that has worked with more than 3000 of the top
                entrepreneurs and professionals in 63 countries around the
                world. From book publishing to television appearances and even
                feature films, our Experts will customize a strategy that helps
                you tell your story in the most effective way to grow your
                brand, your influence, and your business! Get Consult with Best
                brand agency in India.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
    </Root>
  );
}

export default Sec13;



const Root = styled.section`
 
iframe{
 width:460px;
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