import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import jag from "../../../assets/img/custom/jaquar.webp";
import phoenix from "../../../assets/img/custom/phoenix.webp";
import install_aware from "../../../assets/img/custom/install_aware.webp";
import lease_plan from "../../../assets/img/custom/lease_plan.webp";
import longhorn from "../../../assets/img/custom/longhorn.webp";
import nielsen from "../../../assets/img/custom/nielsen.webp";
import pearson from "../../../assets/img/custom/pearson.webp";



function Sec2() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <Root>
<div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={jag} alt="img"/>
        </div>
        <div>
        <img src={phoenix} alt="img"/>
        </div>
        <div>
        <img src={install_aware} alt="img"/>
        </div>
        <div>
        <img src={lease_plan} alt="img"/>
        </div>
        <div>
        <img src={longhorn} alt="img"/>
        </div>
        <div>
        <img src={nielsen} alt="img"/>
        </div>
        <div>
        <img src={pearson} alt="img"/>
        </div>
      </Slider>
    </div>
    </Root>
  )
}

export default Sec2

const Root = styled.section`
    Padding: 30px 60px;

`;