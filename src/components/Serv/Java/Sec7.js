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
            <Typography>1. How Outsourcing To A Java Web Development Company Toil?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            For your requirements and assess the project scope our SME will get in touch to understand. We will propose you our suitable engagement models to choose from. We begin immediately after the signing of the contract.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>2. If I Don’t Have Much Acquainted Of Java Can I Still Outsource Java Mobile App Development?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes, you absolutely can. We are happy to assist in Java development for your company. Our SMEs will assist
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
              3. Can I Hire Java Developer On A Full-Time Basis?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes, you can. As an experienced Java web development company, we provide ready-to-hire skilled resources that are highly experienced in Java and related technologies for project development, on a full-time basis.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>4. How Much Does It Cost To Outsource The Project To A Java Mobile App Development Firm?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The cost of the project depends on multiple factors— project scope, technology stack, required, hours, engagement prototype, objective, and many more.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>5. How Can I’ll Be Able To Assess The Progress Of My Java Mobile App Development Project?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            We will be regularly communicating regarding the project progress to clients, concerned teams, managers, and other stakeholders, we provide login information for assessing real-time progress.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>6. How Long It Take To Go Live With A Custom Project?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Depending on the scope &the project duration from a few weeks to a few months. We follow the Responsive development approach to deliver the project on time.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>7. Can You Help If I Want To Hire Java Developers For My Ongoing Project?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Sure, we can and will offer suitable engagement models.
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
              8. What Supportdoes Java Development Company Offer On Post-Development?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes we do. Our extended software protection plans, helps post-development maintenance, and updates. We also offer support for case-by-case basis.
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
