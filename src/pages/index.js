import React from "react"
import { Helmet } from "react-helmet"
//import { graphql } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
// import InnerTitle from "../components/inner-title.js"

import "../styles/homepage.scss"

import medal from "../img/medal.png"
import money from "../img/money.png"
import stars from "../img/stars.png"
import groupChat from "../img/group-chat.png"
import thinArrowRight from "../img/right-arrow.svg"
import homepageMobileMockup from "../img/homepage-mobile-mockup.png"
// import fullBleedBackgroundSlanted from "../img/full-bleed-bg-slanted.png"
import newPatientAcquisitions from "../img/home-new-patient-acquisitions.png"
import dgDifferent from "../img/home-dg-different.png"
import dgClientSatisfaction from "../img/home-dg-client-satisfaction.png"

export default ({ data }, props) => (
  <DefaultPageLayout location={props["*"]}>
    <Helmet>
      <title>
        High Conversion Dental Websites | Healthcare Digital Marketing | Doctor
        Genius
      </title>
    </Helmet>
    <div className={props["*"] || "homepage"}>
      <div className="hero">
        {/* Hero will be a layout component */}
        <Container>
          <div className="row">
            <div className="col-sm-12">
              <div className="hero-content">
                <div className="accent-block">
                  <div className="border-horizontal border-top-left" />
                  <div className="border-horizontal border-top-right" />
                  <div className="border-horizontal border-bottom-left" />
                  <div className="border-horizontal border-bottom-right" />
                  <div className="border-vertical border-left-top" />
                  <div className="border-vertical border-right-top" />
                  <div className="border-vertical border-left-bottom" />
                  <div className="border-vertical border-right-bottom" />
                  <h1>
                    <span>The Leader in</span> New Patient Acquisition
                  </h1>
                  <div className="accented-paragraph">
                    <p>
                      Doctor Genius offers high-end web marketing services to
                      health professionals throughout the United States. Learn
                      how we funnel traffic to converted patient directly to
                      your practice.
                    </p>
                  </div>
                </div>
                <div className="demo-cta">
                  <a href="/" className="button flat white-text">
                    Request Demo <img src={thinArrowRight} alt="Arrow Right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Main>
        <Container>
          <div className="row padded panel-row">
            <div className="col-sm-10">
              <div className="header inner-title center">
                <h3 className="strapline">Performance, Results, Excellence</h3>
                <h2 className="underline">We Care About Your Success</h2>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="panel">
                <div className="icon-wrapper">
                  <img className="img-icon" src={medal} alt="Icon of a medal" />
                </div>
                <p className="panel-heading">1,125%</p>
                <p className="panel-body">
                  Increase in Google First-Page Results
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="panel">
                <div className="icon-wrapper">
                  <img className="img-icon" src={money} alt="Icon of money" />
                </div>
                <p className="panel-heading">100%</p>
                <p className="panel-body">Increase in Revenue!</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="panel">
                <div className="icon-wrapper">
                  <img
                    className="img-icon"
                    src={groupChat}
                    alt="Icon of a Groupchat"
                  />
                </div>
                <p className="panel-heading">88%</p>
                <p className="panel-body">Increase in New Patient Calls!</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="panel">
                <div className="icon-wrapper">
                  <img className="img-icon" src={stars} alt="Icon of Stars" />
                </div>
                <p className="panel-heading">4+ Stars</p>
                <p className="panel-body">
                  We take pride in our{" "}
                  <a
                    href="https://www.google.com/search?q=doctorgenius&rlz=1C1GCEA_enUS780US780&oq=doctorgenius&aqs=chrome..69i57j69i60l3.1719j0j1&sourceid=chrome&ie=UTF-8#lrd=0x80dcde9f23745717:0x9660a06c68c4bd1,1,,,"
                    target="_blank"
                  >
                    Google reviews
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row padded">
            <div className="col-sm-10">
              <div className="inner-title center">
                <h3 className="strapline">Built for success</h3>
                <h2 className="underline font-weight-light">
                  All-in-One
                  <span className="font-weight-semibold">
                    {" "}
                    Marketing Dashboard
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-sm-11 col-md-8 col-lg-6">
              <div className="accented-paragraph">
                <p>
                  Our robust, comprehensive marketing solutions helps keep your
                  online digital marketing presence ahead of competition. We
                  provide tools and analysis to improve new patient acquisition
                  with transparent reporting to measure our results. with
                  transparent reporting to measure our results.
                </p>
              </div>
            </div>
          </div>
          <div className="full-bleed-wrapper pad-md">
            <div className="full-bleed marketing-dashboard-background" />
            <div className="full-bleed-content-wrapper">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-sm-9">
                  <img
                    src={homepageMobileMockup}
                    alt=""
                    className="img-responsive"
                  />
                </div>
                <div className="col-lg-1" />
              </div>
            </div>
          </div>

          <div className="row padded tall-top short-bottom">
            <div className="col-sm-12">
              <div className="inner-title center">
                <h3 className="strapline">
                  Setting the foundation for success
                </h3>
                <h2 className="underline font-weight-light">
                  Why Choose
                  <span className="font-weight-semibold"> Doctor Genius</span>
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <img
                className="img-responsive blur-bleed"
                src={newPatientAcquisitions}
                alt=""
              />
            </div>
            <div className="col-sm-9 col-md-5">
              <div className="content-block">
                <div className="inner-title">
                  <h2>Why is Doctor Genius # 1 in new patient acquisitions?</h2>
                  <div className="accented-paragraph">
                    <p className="s-thin">
                      When you join the Doctor Genius Family, we are now
                      partnered. We have a direct interest in your business
                      doing well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row padded short-top short-bottom">
            <div className="col-md-1" />
            <div className="col-sm-9 col-md-5 order-sm-2 order-md-1">
              <div className="content-block">
                <div className="inner-title">
                  <h2>What makes Doctor Genius different?</h2>
                  <div className="accented-paragraph">
                    <p className="m-thin">
                      We are not a cookie cutter type program. We are a
                      performance based program and take pride in your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">
              <img
                className="img-responsive blur-bleed"
                src={dgDifferent}
                alt=""
              />
            </div>
          </div>
          <div className="row padded short-top tall-bottom">
            <div className="col-sm-12 col-md-6">
              <img
                className="img-responsive blur-bleed"
                src={dgClientSatisfaction}
                alt=""
              />
            </div>
            <div className="col-sm-9 col-md-5">
              <div className="content-block">
                <div className="inner-title">
                  <h2>How would you rate Doctor Genius client satisfaction?</h2>
                  <div className="accented-paragraph">
                    <p className="s-thin">
                      Don't take our word for it, see what our clients say about
                      us 100+ 5 Stars. Check our{" "}
                      <a
                        href="https://www.google.com/search?q=doctorgenius&rlz=1C1GCEA_enUS780US780&oq=doctorgenius&aqs=chrome..69i57j69i60l3.1719j0j1&sourceid=chrome&ie=UTF-8#lrd=0x80dcde9f23745717:0x9660a06c68c4bd1,1,,,"
                        target="_blank"
                      >
                        reviews
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Begin Demo Footer */}
          <div className="row padded tall-top request-demo-footer">
            <div className="col-md-1" />
            <div className="col-sm-9 col-md-5">
              <div className="content-block">
                <div className="inner-title">
                  <h2>
                    Start your <span>success</span> with Doctor Genius today!
                  </h2>
                  <div className="accented-paragraph">
                    <p>
                      The Genius platform makes every part of your company
                      process more efficient. Our support team is very excited
                      to help you and get your company on the right path of
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-9 col-md-5">
              <div className="center">
                <a href="/demo" className="button flat white-text">
                  Request Demo <img src={thinArrowRight} alt="Arrow Right" />
                </a>
              </div>
            </div>
          </div>
          {/* End Demo Footer */}
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)

// export const pageQuery = graphql`
// query {
//     allWordpressPage {
//       edges {
//         node {
//           id
//           title
//           excerpt
//           slug
//           date(formatString: "MMMM DD, YYYY")
//         }
//       }
//     }
//   }
//   `
