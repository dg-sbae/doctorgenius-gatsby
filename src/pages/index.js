import React from "react"
//import { graphql } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
// import InnerTitle from "../components/inner-title.js"

import "../styles/global-styles.scss"
import "../styles/homepage.scss"

import { FaArrowRight } from "react-icons/fa"

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
  <DefaultPageLayout>
    <div className={props["*"] || "homepage"}>
      <div className="hero">
        {/* Hero will be a layout component */}
        <Container>
          <div className="row">
            <div className="col-sm-12">
              <div class="hero-content">
                <div class="accent-block">
                  <div class="border-horizontal border-top-left" />
                  <div class="border-horizontal border-top-right" />
                  <div class="border-horizontal border-bottom-left" />
                  <div class="border-horizontal border-bottom-right" />
                  <div class="border-vertical border-left-top" />
                  <div class="border-vertical border-right-top" />
                  <div class="border-vertical border-left-bottom" />
                  <div class="border-vertical border-right-bottom" />
                  <h1>
                    <span class="font-weight-light">The Leader in</span> New
                    Patient Acquisition
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
                <div class="demo-cta">
                  <a href="/" className="button flat white-text">
                    Request Demo <img src={thinArrowRight} />
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
            <div className="col-sm-12">
              <div className="header inner-title center">
                <h3 className="strapline">Performance, Results, Excellence</h3>
                <h2 className="underline">We Care About Your Success</h2>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="panel">
                <div class="icon-wrapper">
                  <img className="img-icon" src={medal} alt="Icon of a medal" />
                </div>
                <p class="panel-heading">1,125%</p>
                <p class="panel-body">Increase in Google First-Page Results</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="panel">
                <div class="icon-wrapper">
                  <img className="img-icon" src={money} alt="Icon of money" />
                </div>
                <p class="panel-heading">100%</p>
                <p class="panel-body">Increase in Revenue!</p>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="panel">
                <div class="icon-wrapper">
                  <img
                    className="img-icon"
                    src={groupChat}
                    alt="Icon of a Groupchat"
                  />
                </div>
                <p class="panel-heading">88%</p>
                <p class="panel-body">Increase in New Patient Calls!</p>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="panel">
                <div class="icon-wrapper">
                  <img className="img-icon" src={stars} alt="Icon of Stars" />
                </div>
                <p class="panel-heading">4+ Stars</p>
                <p class="panel-body">We take pride in our Google reviews</p>
              </div>
            </div>
          </div>
          <div class="row padded">
            <div class="col-sm-12">
              <div class="inner-title center">
                <h3 class="strapline">Built for success</h3>
                <h2 className="underline font-weight-light">
                  All-in-One
                  <span class="font-weight-semibold"> Marketing Dashboard</span>
                </h2>
              </div>
            </div>
            <div class="col-sm-12 col-md-8 col-lg-6">
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
                <div className="col-sm-1 " />
                <div className="col-sm-10">
                  <img
                    src={homepageMobileMockup}
                    alt=""
                    className="img-responsive"
                  />
                </div>
                <div className="col-sm-1" />
              </div>
            </div>
          </div>

          <div class="row padded tall-top short-bottom">
            <div class="col-sm-12">
              <div class="inner-title center">
                <h3 class="strapline">Setting the foundation for success</h3>
                <h2 className="underline font-weight-light">
                  Why Choose
                  <span class="font-weight-semibold"> Doctor Genius</span>
                </h2>
              </div>
            </div>
            <div class="col-sm-6">
              <img
                className="img-responsive blur-bleed"
                src={newPatientAcquisitions}
                alt=""
              />
            </div>
            <div class="col-sm-5">
              <div className="content-block">
                <div class="inner-title">
                  <h2>Why is Doctor Genius # 1 in new patient acquisitions?</h2>
                  <div class="accented-paragraph">
                    <p className="s-thin">
                      When you join the Doctor Genius Family, we are now
                      partnered. We have a direct interest in your business
                      doing well.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-1" />
            </div>
          </div>
          <div class="row padded short-top short-bottom">
            <div className="col-sm-1" />
            <div class="col-sm-5">
              <div class="content-block">
                <div class="inner-title">
                  <h2>What makes Doctor Genius different?</h2>
                  <div class="accented-paragraph">
                    <p className="m-thin">
                      We are not a cookie cutter type program. We are a
                      performance based program and take pride in your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <img
                className="img-responsive blur-bleed"
                src={dgDifferent}
                alt=""
              />
            </div>
          </div>
          <div class="row padded short-top tall-bottom">
            <div class="col-sm-6">
              <img
                className="img-responsive blur-bleed"
                src={dgClientSatisfaction}
                alt=""
              />
            </div>
            <div class="col-sm-5">
              <div class="content-block">
                <div class="inner-title">
                  <h2>How would you rate Doctor Genius client satisfaction?</h2>
                  <div class="accented-paragraph">
                    <p className="s-thin">
                      Don't take our word for it, see what our clients say about
                      us 100+ 5 Stars. Check our <a href="/reviews">reviews</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-1" />
            </div>
          </div>
          {/* Begin Demo Footer */}
          <div class="row padded tall-top request-demo-footer">
            <div className="col-sm-1" />
            <div class="col-sm-5">
              <div class="content-block">
                <div class="inner-title">
                  <h2>
                    Start your
                    <span class="font-weight-semibold"> success </span>
                    with Doctor Genius today!
                  </h2>
                  <div class="accented-paragraph">
                    <p class="s-thin">
                      The Genius platform makes every part of your company
                      process more efficient. Our support team is very excited
                      to help you and get your company on the right path of
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="center">
                <a href="/" className="button flat white-text">
                  Request Demo <img src={thinArrowRight} />
                </a>
              </div>
            </div>
            <div className="col-sm-1" />
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
