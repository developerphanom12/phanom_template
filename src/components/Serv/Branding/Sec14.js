import React from "react";
import product from "../../../assets/img/custom/product.webp";
import book from "../../../assets/img/custom/book.webp";
import illustration from "../../../assets/img/custom/illustration.webp";

import logo from "../../../assets/img/custom/logo.webp";

import social from "../../../assets/img/custom/social.webp";

import web from "../../../assets/img/custom/web.webp";

import postcard from "../../../assets/img/custom/postcard.webp";

import business from "../../../assets/img/custom/business.webp";

import album from "../../../assets/img/custom/album.webp";

import threed from "../../../assets/img/custom/threed.webp";

import beer from "../../../assets/img/custom/beer.webp";

import ban from "../../../assets/img/custom/ban.webp";

import box from "../../../assets/img/custom/box.webp";

import booklet from "../../../assets/img/custom/booklet.webp";

import bev from "../../../assets/img/custom/bev.webp";

import cos from "../../../assets/img/custom/cos.webp";
import styled from 'styled-components';




function Sec14() {
  return (
    <Root>
    <section className="features-area-three">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-7">
            <div className="section-title-two text-center mb-40 tg-heading-subheading animation-style1">
   
               <h2 className="title tg-element-title">
                  Inspiring work made on Phanom Professionals
              </h2> 

            </div>
          </div>
        </div>

        <div className="features-item-wrap-two">

          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={product} alt="img" style={{borderRadius:"10px"}} />
              <h2 style={{fontSize:"18px", marginTop:"10px", borderRadius:"10px",  marginBottom:"30px"}}>Product Packaging</h2>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-6" >
              <img src={book} alt="img"  style={{borderRadius:"10px"}}/>
              <h2 style={{fontSize:"18px", marginTop:"10px",  marginBottom:"30px" }}>Book Cover</h2>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={illustration} alt="img" style={{borderRadius:"10px"}} />
              <h2 style={{fontSize:"18px", marginTop:"10px",  marginBottom:"30px"}}>Illustration or Graphics</h2>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={logo} alt="img"  style={{borderRadius:"10px"}}/>
              <h2 style={{fontSize:"18px", marginTop:"10px",  marginBottom:"30px"}}>Logo Design</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={social} alt="img" style={{borderRadius:"10px"}} />
              <h2 style={{fontSize:"18px", marginTop:"10px", borderRadius:"10px",  marginBottom:"30px"}}>Logo & Social Media</h2>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={web} alt="img"  style={{borderRadius:"10px"}}/>
              <h2 style={{fontSize:"18px", marginTop:"10px", marginBottom:"30px" }}>Web Page Design</h2>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={postcard} alt="img" style={{borderRadius:"10px"}} />
              <h2 style={{fontSize:"18px", marginTop:"10px",   marginBottom:"30px"}}>Postcard & Flyer</h2>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={business} alt="img"  style={{borderRadius:"10px"}}/>
              <h2 style={{fontSize:"18px", marginTop:"10px",   marginBottom:"30px"}}>Business or Advertising</h2>
            </div>
          </div>


          
          <div className="row justify-content-center ">
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={album} alt="img" style={{borderRadius:"10px"}} />
              <h2 style={{fontSize:"18px", marginTop:"10px", borderRadius:"10px",   marginBottom:"30px"}}>Album Cover Product Detail</h2>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={threed} alt="img"  style={{borderRadius:"10px"}}/>
              <h2 style={{fontSize:"18px", marginTop:"10px",   marginBottom:"30px" }}>3D Logo Video</h2>
            </div>
            
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={beer} alt="img" style={{borderRadius:"10px"}} />
              <h2 style={{fontSize:"18px", marginTop:"10px",   marginBottom:"30px"}}>Beer Label</h2>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={ban} alt="img"  style={{borderRadius:"10px"}}/>
              <h2 style={{fontSize:"18px", marginTop:"10px",   marginBottom:"30px"}}>Banner and Product Detail</h2>
            </div>
          </div>


          <div className="row justify-content-center ">
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={box} alt="img" style={{borderRadius:"10px"}} />
              <h2 style={{fontSize:"18px", marginTop:"10px", borderRadius:"10px",   marginBottom:"30px"}}>Box Product Detail</h2>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={booklet} alt="img"  style={{borderRadius:"10px"}}/>
              <h2 style={{fontSize:"18px", marginTop:"10px",   marginBottom:"30px"}}>Booklet Product Detail</h2>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={bev} alt="img" style={{borderRadius:"10px"}} />
              <h2 style={{fontSize:"18px", marginTop:"10px",   marginBottom:"30px"}}>Beverage Label</h2>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <img src={cos} alt="img"  style={{borderRadius:"10px"}}/>
              <h2 style={{fontSize:"18px", marginTop:"10px",   marginBottom:"30px"}}>Cosmetics Packaging</h2>
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


@media(min-width: 567px) and (max-width: 992px){

  .col-md-6 img{
    width:100%
  }


}


`;
