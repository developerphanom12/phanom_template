import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styled from "styled-components";

function Sec17() {
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
            <span>Frequently   </span>
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
              1. What is YouTube?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            YouTube is a video-sharing platform that lets customers examine, like, share, comment, and upload their films.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>2. How Often Will I Get Reports?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Reporting through Phanom Professionals is solely dependent on the Youtube Marketing package chosen.You can probably assume it takes place every month or every week.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>3. Is it paintings?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Youtube boosts search engine optimization, pressures site visitors, constructs logo consciousness, makes your social attainment bigger, markets to audiences in foreign countries, grows your ROI, and will increase your video advertising plan with more than one channel.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>4. What Are the Benefits of YouTube Marketing?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Capture and expand your target market. Businesses can be easier to find on YouTube. promote activities and merchandise.
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
              5. What package deal do I have to pick out?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The YouTube marketing package must be chosen in accordance with your company’s desires and objectives.Our Twitter marketing packages were designed to benefit all types of groups, whether small, medium, or large.
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
              6. What details do I have to provide?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The YouTube marketing package must be chosen in accordance with your company’s desires and objectives.Our Twitter marketing packages were designed to benefit all types of groups, whether small, medium, or large.
            </Typography>
            <br/>
            
                <Typography>YouTube account access</Typography><br/>
                <Typography>Google Analytics Details</Typography><br/>
                <Typography>Google Tag Manager</Typography><br/>

                <Typography>In India, how much does YouTube pay for 1000 views (in INR)?</Typography><br/>

                <Typography>If you are a YouTuber in India and make YouTube videos, you can earn up to Rs 2,300 per 1,000 views. 

</Typography><br/>

                
            
          </AccordionDetails>
        </Accordion>


      </div>
    </Root>
  );
}

export default Sec17;
const Root = styled.section`
  background-color: #ffffffd4;
  padding:0 100px 50px;

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
    color: #13c9DF;
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
