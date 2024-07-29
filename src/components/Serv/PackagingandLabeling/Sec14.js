import React from "react";
import styled from "styled-components";

function Sec14() {
  return (
    <Root>
    <section className="features-area-three">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-7">
            <div className="section-title-two text-center mb-40 tg-heading-subheading animation-style1">
              {/* <span className="sub-title tg-element-title">
              What We Do For You
            </span> */}
              {/* <h2 className="title tg-element-title">
                Our Quality Designing with MADCAP OPUS AND PERFORM WITH:
              </h2> */}
            </div>
          </div>
        </div>

        <div className="features-item-wrap-two">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <iframe
           
                src="https://www.youtube.com/embed/nL2pFho0Pwo?si=fqQcv7ULsn4gsXYD"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h2 style={{fontSize:"18px", marginTop:"10px", borderRadius:"10px",  marginBottom:"30px"}}>Food Product Packaging & Labeling</h2>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <iframe
             
                src="https://www.youtube.com/embed/6B_7nitNIsc?si=tVEiMgRoL4D_uaoB"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h2 style={{fontSize:"18px", marginTop:"10px", borderRadius:"10px",  marginBottom:"30px"}}>Cosmetic Product Packaging & Labeling</h2>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <iframe
               
                src="https://www.youtube.com/embed/sJlVc5eghx4?si=84Wm2rz8jd1ygTkk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>

              <h2 style={{fontSize:"18px", marginTop:"10px", borderRadius:"10px",  marginBottom:"30px"}}>Perfume Product Packaging & Labeling</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <iframe
             
                src="https://www.youtube.com/embed/QwUqD3oW8HQ?si=kq_Jq999-1W_cHIA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h2 style={{fontSize:"18px", marginTop:"10px", borderRadius:"10px",  marginBottom:"30px"}}>Foods Industry Packaging & Labeling</h2>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <iframe
                
                src="https://www.youtube.com/embed/pFa9LBdtAqE?si=ODcMzp2uieMcMo9_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h2 style={{fontSize:"18px", marginTop:"10px", borderRadius:"10px",  marginBottom:"30px"}}>Bear & Wine, Shakes Bottles Packaging & Labeling</h2>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <iframe
               
                src="https://www.youtube.com/embed/OLX34J33GOE?si=9k2jUhK5N4uHgd8D"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h2 style={{fontSize:"18px", marginTop:"10px", borderRadius:"10px",  marginBottom:"30px"}}>Tattoo Animation Logo</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Root>
  );
}

export default Sec14;
const Root = styled.section`
iframe{
 width:360px;
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

@media(min-width: 567px) and (max-width: 992px){

  iframe{
 width:100%;
 height:315px;
}


}


`;
