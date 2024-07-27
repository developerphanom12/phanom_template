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
                  An Ounce Of Illustrative Effort Is Worth A Pound Of Hard Work</h2>
                <p data-aos="fade-up" data-aos-delay="500">
                    The “Jump on the bandwagon” performance in terms of creating a dream work and execute best Graphic Designing Services in Mohali, Phanom Professionals are doing coherent with the Graphical Artwork as a requisite form of expertise. The creative illustrations, like Logos, signboards visiting cards, Branding, Packaging and labeling other artefact are vital for making a apparition to a cut above picture. Different dimensions are used and focused for making Vector or Graphic presentations enchanting and intriguing. The liberty to design new stuff for your brand is refined and gracious.
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
