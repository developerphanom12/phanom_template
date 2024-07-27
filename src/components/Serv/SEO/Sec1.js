import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { H2_BANNER_IMG } from "../../../lib/assets";
import a from "../../../assets/img/custom/a.png";
import b from "../../../assets/img/custom/b.png";
import c from "../../../assets/img/custom/c.png";

export default function Sec1() {
  return (
    <Root>
      <section className="banner-area-two banner-bg-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content-two">
                {/* <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  We Are Expert In This Field
                </span> */}
                <h2 className="title" data-aos="fade-up" data-aos-delay="300">
                  Savage For The Market And Beast Of SEO Marketing
                </h2>
                <p data-aos="fade-up" data-aos-delay="500">
                  At Phanom Professionals, we provide tech-driven solutions to
                  become a partner that voyages with your needs in the market
                  via SEO-generated lead business and bring massive
                  transformation in how a real company operates. Being your
                  Digital partner, we provide credence to make smarter SEOs on a
                  plethora of content, and more informed decisions on even the
                  most complex project. We are just a snap away!
                </p>
                <div className="banner-btn">
                  <Link
                    to="/"
                    className="btn"
                    data-aos="fade-right"
                    data-aos-delay="700"
                  >
                    CONNECT WITH US
                  </Link>
{/* 
                  <VideoPlayerOne
                    src="https://www.youtube.com/embed/XMWYZ-uZjnQ"
                    text="Watch The Video"
                    data-aos="fade-left"
                    data-aos-delay="700"
                  /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img text-center">
                <img
                  src={H2_BANNER_IMG}
                  alt=""
                  data-aos="fade-left"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape-wrap">
          <img src={a} alt="" />
          <img src={b} alt="" />
          <img
            src={c}
            alt=""
            data-aos="zoom-in-up"
            data-aos-delay="800"
          />
        </div>
      </section>
    </Root>
  );
}
const Root = styled.section`

`;
