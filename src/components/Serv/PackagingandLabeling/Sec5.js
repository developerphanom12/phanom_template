import React from "react";
import aa from "../../../assets/img/custom/aa.png";
import styled from 'styled-components';


function Sec5() {
  return (
    <Root>
    <section className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-img-wrap">
              {/* <img src={lady} alt="img" className="main-img" />
              <img src={lady} alt="img" />*/}
              <img src={aa} alt="img" />
              <iframe
               className="video"
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
                  In addition if you are Keen to know more:
                </h2>
                <h2>Bring in touch and engage with your customers?</h2>
              </div>
              <p>
                Packaging will do that and labeling will enticingly be the
                integral part of that.
              </p>
              <br />
              <p>
                Traditional way: There was nothing much except the print media
                and electronic one excluding social media.
              </p>
              <br />
              <p>
                Latest & Trending way: Streamline on social media in real time
                and post for more exclusive reactions this is what a business
                needs.
              </p>
              <br />
              <p>
                Creating customized broadcast marketing packages for your
                complete business by thorough analysis of your brand and goal.
              </p>
              <br />
              <p>
                Taking utmost care about your targeted audience and put
                superfluous research efforts before initiating a marketing plan
                is donee by our team of experts.
              </p>
              <p></p>Broadcast marketing services that are user-friendly and
              cost- efficient to start-ups and reputed companies is taken care
              with senstivity.
            </div>
          </div>
        </div>
      </div>
    </section>
    </Root>
  );
}

export default Sec5;


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