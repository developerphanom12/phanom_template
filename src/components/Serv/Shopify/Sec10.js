import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styled from "styled-components";

function Sec10() {
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
            <span>Public APP </span>
            <span className="text"> v/s </span> <span>Private App</span>
          </div>
          <div className="col-lg-2 col-md-12 col-12"></div>
        </div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>1. What is a public app on Shopify?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A public shopify app is a third-party application available on the
              Shopify App Store. It’s developed by external developers and can
              be installed by any Shopify merchant.
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
              2. How can a public shopify app benefit my Shopify store?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Public Shopify apps provide additional features and
              functionalities beyond Shopify’s core offerings. They can enhance
              the shopping experience, streamline processes, and boost
              productivity.
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
              3. Are public shopify apps secure for my store?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, public Shopify apps listed on the Shopify App Store undergo a
              review process to ensure they meet security standards. It’s
              recommended to install apps from trusted developers with positive
              reviews.
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
              4. How do I install a public app on my Shopify store?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Installing a public shopify app is straightforward. You can find
              and install apps directly from the Shopify App Store through your
              store’s admin dashboard.
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
              5. Can I customize a public app to fit my store's specific needs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Public Shopify apps are generally designed to be customizable to
              some extent. However, the level of customization varies from one
              app to another. Check the app’s documentation for details.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>6. What is a private app on Shopify?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A private app is a custom-built application created exclusively
              for a specific Shopify store. It’s not available on the Shopify
              App Store and is tailored to the unique requirements of the
              merchant.
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
              7. In what scenarios would I need a private app?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Private Shopify apps are useful when you require custom
              functionalities specific to your business that aren’t fulfilled by
              existing public apps. They are ideal for unique workflows and
              integrations.
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
              8. How do I create a private app for my Shopify store?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Private Shopify apps are created through the Shopify Admin or API.
              You’ll need to generate API credentials and follow the
              documentation provided by Shopify for creating custom
              functionalities.
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
              8. Is the development of a private app more secure than using
              public apps?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Private Shopify apps are specific to your store, which can enhance
              security. However, the security also depends on the development
              practices and measures taken during the creation of the private
              app.
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
              8. Can a private app be later converted into a public app?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, it’s possible to convert a private app into a public app.
              However, this involves additional steps, such as submission to the
              Shopify App Store and meeting their guidelines.
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
              8. What Kind Of Businesses Are Not Permitted On Shopify?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you run a smoking-related business, you won’t be able to join
              Shopify as a merchant. Tobacco, cigarettes, e-cigarettes, and
              e-juices will all be illegal to sell. Join our free consulting
              session to know more at 78891-45109
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
              8. How long will it take to hire a Shopify developer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Depending upon your requirement, you can onboard Shopify
              developers with Phanom with in 48 Hours
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>8. Can your developer help me with Q&A?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We have in-house team of Q&A also, they can help better than any
              developer. You don’t need to worry about Q&A
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
              8. Can I integrate third-party apps with my Shopify store?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Certainly! Shopify has a vast app ecosystem, and our best shopify
              developers can integrate third-party apps to enhance
              functionality.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Root>
  );
}

export default Sec10;
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
