import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styled from "styled-components";

function Sec7() {
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
            <Typography>
              1. Cost of developing a PHP website?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Proposing a plan that details the expense and amount of time the project would require is what is valued. Being a leading PHP development company we quote approximate costs based on project requirements. Join our free consulting session to know more at 78891-45109
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
              2. How do you test for quality?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Phanom Professionals has a fanatical team that takes on the tasks of testing and maintaining the website. There are a series of research methods. Checking the application on various platforms and devices are done before deploying them for final implementation. Join our free consulting session to know more at 78891-45109
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
              3. Can I ensure the quality of the project?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Once you agree to our services, your project will move through our various departments for development, design, and quality testing. Hence, we ensure you get the best results. Join our free consulting session to know more at 78891-45109
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
              4. How much time will it take to preapre website on PHP?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Our experts will calculate the length of time needed based on the work they are assigned. Which is why we also address all the relevant specifications and then settle on the time needed to complete the work. Join our free consulting session to know more at 78891-45109
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
              5. Can I modify my website design in the future?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes, you can have the designs updated later on. We are the best PHP development company and our qualified developers will make all the obligatory amendments to the site’s interface, functionality and outline based on your needs. Join our free consulting session to know more at 78891-45109
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
              6. What are the gains of PHP web development services?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            We leverage high-end strategies to create engaging websites. Using a far-reaching knowledge base to meet the core needs & interactive UI/UX, and a / coding framework lets us use our skill set and technologies to create exactly what you need. Join our free consulting session to know more at 78891-45109
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>7. Are they mobile-friendly PHP websites?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Definitely yes, these websites are mobile-friendly. Developers are well versed in advanced technologies based on CSS3 and HTML5. We develop web applications that are engaging, consumer-centric, and graphically compelling, ideal for mobile devices. Join our free consulting session to know more at 78891-45109
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>8. Is there any maintenance and support services after development?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Being the top php web development company we ensure performance enhancement, fixing bugs, SEO-related amendments etc. Phanom Professionals provides a full perpetuation and sustenance cycle after accomplishment of your PHP project. Join our free consulting session to know more at 78891-45109
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Root>
  );
}

export default Sec7;
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
