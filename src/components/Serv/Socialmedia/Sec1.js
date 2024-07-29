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
                  For Being In Touch With The World, Here We Come
                </h2>
                <p data-aos="fade-up" data-aos-delay="500">
                  Medium of our dimension to perform and inform better in the
                  Digital Marketing, Phanom Professionals are doing the same
                  with the Podium of Social Media Marketing as a required form
                  of expertise. The fine line of work and artifact are vital for
                  making a small vision – a bigger picture. There are all modes
                  of social media platforms we use to excel the brand and give
                  it a breakthrough via those modes which define a parameter of
                  brand status.
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
          <img src={c} alt="" data-aos="zoom-in-up" data-aos-delay="800" />
        </div>
      </section>
    </Root>
  );
}
const Root = styled.section``;
