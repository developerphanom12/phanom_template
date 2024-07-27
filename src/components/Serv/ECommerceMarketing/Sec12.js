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
            <Typography>1. What is PPC campaign?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              PPC campaigns or Pay-per-click campaigns is a wholesome concept to
              effective advertisements. From adding PPC keywords to negative
              keywords, split ad words, reviewing costly PPC keywords and
              refining landing pages, PPC campaigns make sure that every bit of
              an ad is constructed properly. If you are concentration more on
              paid search account, campaigns play a selective and highest-level
              role. Bing Ads or single Ad Words may account for only one
              campaign. PPC campaign demands logic, relevancy, and organized
              content for placing the bids at high stakes. If any of the three
              elements fall short, then it would not draw traffic. Paid search
              management campaigns can also be ensured through online services.{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>2. Why should we use PPC marketing?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              PPC marketing is an exclusive nomenclature for people to search
              for your products or search engines or services. You should use
              Pay-per-click marketing not because it will earn you money but
              because it will let the viewers receive the ads strategically. PPC
              advocates marketing to search for your business. It can yield you
              immediate results. The entire working of the PPC marketing depends
              on the first look. If you get into a store and obtain at first
              sight that you have desired for, it will make you happy.
              Similarly, PPC marketing enables searchers to view what they have
              typed. PPC marketing pulls in quality traffic. Pay-per-click
              marketing increases lead to revenue and sales.
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
              3. How much time it takes to launch a PPC campaign?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              PPC campaigning performance depends on the goals you have fixed
              for your website. According to surveys and technological analysts,
              a minimum period of 3 months will be required to ramp results. As
              PPC works in the short term strategy, so a minimum of three months
              is required to run your campaigns for Pay-per-click. As Google’s
              algorithm is complex and strict, in the first week, your account
              will be analyzed by Google, which will affect your performance.
              The three months periodic time will include constant campaign
              budget management, exploring new keywords to expand your account,
              adjusting keyword bids to get a read on performance, engagement
              and costs, test new ad copy and ad extensions, identification of
              new genres to direct and bid on your accounts like demographics,
              devices, and locations. After this, you can take more time to dive
              into results directly.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>4. How does PPC help my business to grow?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The benefits of PPC can be outlined in various ways. There are
              some proven pints that amount to successful search engine
              marketing strategy. PPC yields fast results, which are much needed
              for small businesses to grow. PPC is the fastest way to run an
              advertising campaign to get instant results. As you can measure
              the profits, costs, visits, and clicks, you can learn how much you
              have spent and is it a loss or profit. You need to determine this
              that helps in growing on the faulty part. PPC campaign formulates
              that particular segment that needs to be set in for right
              audiences. PPC recognizes the brand, opens doors to local
              customers, budget-friendly, and a great tool for functionality and
              rich reporting. All these characteristics facilitate growth in
              business.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>5. Are PPC results measurable?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Google and Bing supply with certain full-proved metrics that will
              help you to measure PPC results. Google has added certain words in
              the Ad words Glossary that can determine the test results.
              Clicks:- The number of times when someone clicks on your ads is
              addressed as clicks. Impressions:- In a search results page, the
              number of times your ad is displayed is known as impressions.
              Cost:- The number of click calculated in total amounts to cost.
              Click Through Rate (CTR):- The result obtained by dividing the
              percentage of clicks divided by Impressions. Average Cost per
              Click (CPC):- When the total cost is divided by the number of
              clicks, you get CPC. Average Position:- The place in the results
              page obtained by your ad is considered to be the average position.
              Impression Share:- The percentage or the approximation your ad
              could have been seen vs. the actual number of times it was shown.
              Conversions:- Within a specific period, how many times someone
              clicked on an ad and completed action is defined as a conversion.{" "}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>6. What is Quality Score?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A Google Quality Score or Quality Score refers to a Google metric
              that is used to determine the relevancy and usefulness of your ad
              to the user. The determination of the two main vital points is
              based formerly on your keyword relevancy; ad’s CTR and the landing
              page’s quality. Higher quality score will yield you better
              rankings of the ad and save money. It is only a part of the
              advertisement positioning process. Google’s quality score has been
              emerging higher and higher with passing years. It can determine
              your cost per click or CPC. It can also rank in the ad auction
              process keeping maximum bid as a determinant.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>7. Should PPC be used by big bands only?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You should bid on big brands so that you can dominate your search
              engine results. On clicking with some great brands, you can
              control your messaging. There are acute chances that your
              competitors might crossover your territory using the big brands.
              So, beforehand, you should take over the opportunity. Brands will
              accelerate the rate of buying decisions from current prospects.
              People clicking on branded terms formulate the landing pages and
              thus increasing the conversion rates. Damages can be controlled
              without coming in the notice of press coverage. These are the
              reasons you should aid your website with branded PPC campaign{" "}
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
              8. Does pay per click marketing services available in Chandigarh?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Pay per Click (PPC) is a channel or an en route to uplift the web
              activity and online permeability of business. Through paid
              postings on Search engines, PPC indulges in ‘purchasing activity.’
              Various marketing agencies deal in PPC in Chandigarh. Those
              agencies provide marketing services in different fields. They
              campaign mapping, diminish negative keywords, advertises the
              creation of content, greeting page optimization, perform
              geo-targeted PPC, analyzes, and monitors reports. High business
              threads demand high watchwords. To lead an exchange, you need a
              solid purpose. PPC enhances the number of traffic and is easily
              available in Chandigarh.
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
