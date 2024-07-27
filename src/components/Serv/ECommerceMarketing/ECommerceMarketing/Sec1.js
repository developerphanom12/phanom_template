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
                E- Commerce marketing
                </h2>



                <p data-aos="fade-up" data-aos-delay="500">
                Acquire High Business Growth with Phanom Professional
                to convince your shoppers into reimbursing customers. E- Commerce marketing is like a butterfly in your notch. It is the most attractive spot for every business BRAND as well as the consumers. This is like a Butterfly flying for the “first time every time” when your product is being displayed on the on E-Commerce shopping platform. Phanom Professionals are the presenters for your brand on the E-Commerce platform for the best exemplification of Plethora of diversification of the products. Our e-commerce marketing services can metamorphose your bone & grout store into an exceedingly triumphing and result-oriented online business.                </p>
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
