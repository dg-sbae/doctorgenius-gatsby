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
          <div className="valign-wrapper row">
            <div className="col-lg-7">
              <div className="accent-block">
                <h1>The Leader in New Patient Acquisition</h1>
                <div className="accented-paragraph">
                  <p>
                    Doctor Genius offers high-end web marketing services to
                    health professionals throughout the United States. Learn how
                    we funnel traffic to converted patient directly to your
                    practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Main>
        <Container>
          <div className="row row-medium">
            <div className="col-xl-12 d-flex align-items-center justify-content-center">
              <div className="header inner-title underline center">
                <h3 className="strapline">Performance, Results, Excellence</h3>
                <h2>We Care About Your Success</h2>
              </div>
            </div>
            <div className="col-xl-3 align-self-start">
              <div className="panel d-flex flex-sm-column align-items-center justify-content-start">
                <div class="icon-wrapper">
                  <img className="img-icon" src={medal} alt="Icon of a medal" />
                </div>
                <p class="panel-heading">1,125%</p>
                <p>Increase in Google First-Page Results</p>
              </div>
            </div>
            <div className="col-xl-3 align-self-start">
              <div className="panel d-flex flex-sm-column align-items-center justify-content-start">
                <div class="icon-wrapper">
                  <img className="img-icon" src={money} alt="Icon of money" />
                </div>
                <p class="panel-heading">100%</p>
                <p>Increase in Revenue!</p>
              </div>
            </div>
            <div class="col-xl-3 align-self-start">
              <div class="panel d-flex flex-sm-column align-items-center justify-content-start">
                <div class="icon-wrapper">
                  <img
                    className="img-icon"
                    src={groupChat}
                    alt="Icon of a Groupchat"
                  />
                </div>
                <p class="panel-heading">88%</p>
                <p>Increase in New Patient Calls!</p>
              </div>
            </div>
            <div class="col-xl-3 align-self-start">
              <div class="panel d-flex flex-sm-column align-items-center justify-content-start">
                <div class="icon-wrapper">
                  <img className="img-icon" src={stars} alt="Icon of Stars" />
                </div>
                <p class="panel-heading">4+ Stars</p>
                <p>We take pride in our Google reviews</p>
              </div>
            </div>
          </div>
          <div class="row row-medium d-flex align-items-center justify-content-center">
            <div class="col-xl-12">
              <div class="header inner-title underline center">
                <h3 class="strapline">Built for success</h3>
                <h2>
                  All-in-One <span class="bold">Marketing Dashboard</span>
                </h2>
              </div>
            </div>
            <div class="accented-paragraph col-xl-6">
              <p>
                Our robust, comprehensive marketing solutions helps keep your
                online digital marketing presence ahead of competition. We
                provide tools and analysis to improve new patient acquisition
                with transparent reporting to measure our results.
              </p>
            </div>
          </div>
          <div class="row row-tall">
            <div class="col-xl-12">
              <div class="full-bleed marketing-dashboard-background d-flex justify-content-center align-items-center">
                <img
                  class="full-bleed-image"
                  src={homepageMobileMockup}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="row row-medium d-flex align-items-center">
            <div class="col-xl-12">
              <div class="header inner-title center underline">
                <h3 class="strapline">Setting the foundation for success</h3>
                <h2>
                  Why Choose <span class="bold">Doctor Genius</span>
                </h2>
              </div>
            </div>
            <div class="col-xl-6">
              <img
                className="img-responsive"
                src={newPatientAcquisitions}
                alt=""
              />
            </div>
            <div class="col-xl-6 d-flex justify-content-center align-items-center">
              <div className="content-block">
                <div class="inner-title">
                  <h2>Why is Doctor Genius #1 in new patient acquisitions?</h2>
                  <div class="accented-paragraph">
                    <p>
                      When you join the Doctor Genius Family, we are now
                      partnered. We have a direct interest in your business
                      doing well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-medium">
            <div class="col-xl-6 d-flex justify-content-center align-items-center">
              <div class="content-block">
                <div class="inner-title">
                  <h2>What makes Doctor Genius different?</h2>
                  <div class="accented-paragraph">
                    <p>
                      We are not a cookie cutter type program. We are a
                      performance based program and take pride in your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <img className="img-responsive" src={dgDifferent} alt="" />
            </div>
          </div>
          <div class="row row-medium">
            <div class="col-xl-6">
              <img
                className="img-responsive"
                src={dgClientSatisfaction}
                alt=""
              />
            </div>
            <div class="col-xl-6 d-flex justify-content-center align-items-center">
              <div class="content-block">
                <div class="inner-title">
                  <h2>How would you rate Doctor Genius client satisfaction?</h2>
                  <div class="accented-paragraph">
                    <p>
                      Don't take our word for it, see what our clients say about
                      us 100+ 5 Stars. Check our <a href="/reviews">reviews</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-medium">
            <div class="col-xl-6 d-flex justify-content-center align-items-center">
              <div class="content-block">
                <div class="inner-title">
                  <h2>
                    Start your <span class="bold">success</span> with Doctor
                    Genius today!
                  </h2>
                  <div class="accented-paragraph">
                    <p class="accented-paragraph">
                      The Genius platform makes every part of your company
                      process more efficient. Our support team is very excited
                      to help you and get your company on the right path of
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 d-flex justify-content-center align-items-center">
              <div class="button flat">
                <a href="/" className="white-text">
                  Request Demo <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
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
