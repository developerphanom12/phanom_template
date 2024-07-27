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
              1. How Much Time It Will Take To Prepare A WordPress Based
              Project?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Better design, CSS processing, as well as reduce upgrade and
              installation efforts which provides better performance.
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
              2. How Much Time It Will Take To Prepare A WordPress Based
              Project?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              On an average the time period reach up to six month. Rather it
              depends on the type of project
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
              3. Is WordPress A Good Platform For Web Development?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, there will be a simple interface for creating and managing
              the website using WordPress as a content management system (CMS).
              Join our free consulting session to know more at 78891-45109
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
              4. Can I Make Changes To The Website After It's Been Built?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, it is possible to keep updating a website after it has been
              built; otherwise, you risk losing online visibility in search
              engines. Join our free consulting session to know more at
              78891-45109
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
              5. How Much Does WordPress Website Development Cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Costing is fixed and based on project modification and
              customization.
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
              6. Can I Be Able To Use WordPress Based Website After
              Implementation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Surely, with the assistance of our team customer training is
              provided to get use to the website.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>7. How Many Pages Will My Website Have?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The pages of a website are entirely dependent on the requirements,
              and many pages will be required to be added in order to optimize
              your website in the future. Join our free consulting session to
              know more at 78891-45109
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>8. What Happens If My Website Breaks?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The primary cause of site outages could be temporary issues,
              issues with web hosting, and so on. We are confident in our
              ability to repair your website. Join our free consulting session
              to know more at 78891-45109
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
