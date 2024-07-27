import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styled from "styled-components";

function Sec12() {
  return (
    <Root>
      {" "}
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-12"></div>
          <div
            className="col-lg-8 col-md-12 col-12 text_div"
            data-aos="fade-up"
          >
            <span>Frequently </span>
            <span className="text">Asked </span> <span>Questions</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>1. What is an E-Commerce website?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              An E-Commerce website is an online real-time store where you can
              buy or sell products electronically.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              2. What is the best E-Commerce website builder?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To create a professional website, think through the E-Commerce
              store features you need to start selling online, like a unique
              store-front, secure online payments and more. Next, think about
              pricing. Choose the price idea that best suits your business to
              start retailing online.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>3. How can I build an E-Commerce website?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Phanom Professionals is E-Commerce website builder that supports
              in the launch of your E-Commerce business hastily and
              successfully. Build your E-Commerce website with Phanom and
              acquire everything you need to scale for a successful online
              business. From thoughtful website design to must-have features, &
              advanced E-Commerce solutions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              4. How do I choose a name for my E-Commerce website?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is an essential part of establishing your business. Pick a name
              that best fits your brand. Type in your business’ industry, any
              keywords relevancy to your brand of business name ideas that will
              assist your brand on E-Commerce website.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>5. My E-Commerce website, Where can I host?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Secure and free web hosting as soon as you publish your site. Your
              site runs on the unified power of Google Cloud, AWS and Fastly.
              This multi-cloud hosting improves your load times and provides
              full global coverage.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              6. Without any coding skills or design, can I still use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. Business on our platform, You can create your E-Commerce
              website entirely from a blank canvas or customize for your
              business needs.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>7. How do you test for quality?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Phanom Professionals has a fanatical team that takes on the tasks
              of testing and maintaining the website. There are a series of
              research methods. Checking the application on various platforms
              and devices are done before deploying them for final
              implementation.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              8. How much time will it take to prepare website?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our experts will calculate the length of time needed based on the
              work they are assigned. Which is why we also address all the
              relevant specifications and then settle on the time needed to
              complete the work.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Root>
  );
}

export default Sec12;
const Root = styled.section`
  background-color: #ffffffd4;
  padding: 0 100px 50px;

  .MuiAccordionSummary-content.MuiAccordionSummary-contentGutters.css-eqpfi5-MuiAccordionSummary-content
    p {
    font-size: 20px;
  }

  .MuiAccordionDetails-root.css-15v22id-MuiAccordionDetails-root p {
    font-size: 16px;
  }

  .css-eqpfi5-MuiAccordionSummary-content.Mui-expanded {
    margin: 10px 0 0px 0;
  }

  .css-15v22id-MuiAccordionDetails-root {
    padding: 0px 16px 16px;
  }

  .MuiAccordionSummary-expandIconWrapper.css-yw020d-MuiAccordionSummary-expandIconWrapper {
    color: #13c9df;
  }

  .text_div {
    margin-bottom: 0.7em;
    padding: 30px;
    text-align: center;
    .text {
      background: linear-gradient(70deg, #cd1ce6, #13c9df, #9059e4);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
    span {
      font-weight: bold;
      font-size: 35px;
      line-height: 1.3em;
    }
  }
  /* .que {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    button {
      background-color: transparent;
      color: #147888;
      border: none;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  } */
  @media (max-width: 567px) {
    padding: 0;
    .text_div {
      padding: 0;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .text_div {
      padding: 0;
    }
  }
`;
