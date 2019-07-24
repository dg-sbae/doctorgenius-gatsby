import React from "react"
import { Helmet } from "react-helmet"
//import { graphql } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
// import InnerTitle from "../components/inner-title.js"

import "../styles/contact.scss"

import thinArrowRight from "../img/right-arrow.svg"
import newPatientAcquisitions from "../img/new-patient-acquisitions.png"
import dgDifferent from "../img/what-makes-doctorgenius-different.png"
import dgClientSatisfaction from "../img/client-satisfaction.png"
import homepageMarketingDashboard from "../img/marketing-dashboard.jpg"
import homepageMarketingDashboardMobile from "../img/marketing-dashboard-mobile.jpg"

export default props => (
  <DefaultPageLayout location={props["*"]}>
    <Helmet>
      <title>Contact Us - Doctor Genius</title>
      <meta name="description" content="We are located in Irvine, CA." />
    </Helmet>
    <div className={props["*"]}>
      <div className="hero">
        {/* Hero will be a layout component */}
        <Container>
          <div className="row padded panel-row title-and-desc">
            <div className="col-sm-12">
              <div className="header inner-title center">
                <h1>Contact Us</h1>
                <h3 className="strapline">Have a question? Need help?</h3>
                <p className="form-desc">
                  Fill the form below to get directly in contact with our
                  support staff.
                </p>
              </div>
            </div>

            <div className="row panel-row contact-form">
              <div
                style={{
                  height: "600px",
                  width: "800px",
                  border: "2px solid steelblue",
                }}
              >
                <h1 className="text-center valign-wrapper">
                  FORM <br />
                  GOES <br />
                  HERE
                </h1>
              </div>
            </div>

            <div className="row full-bleed-img-john">
              <div className="col-12">
                <center>
                  <img
                    className="img-responsive marketing-dashboard-lg"
                    src={homepageMarketingDashboard}
                    alt="Digital Marketing Dashboard"
                  />
                  <img
                    src={homepageMarketingDashboardMobile}
                    className="img-responsive marketing-dashboard-sm"
                    alt="Digital Marketing Dashboard"
                  />
                </center>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="row padded panel-row info-and-map">
            <div className="col-sm-12 col-md-12 col-lap-4 company-info valign-wrapper">
              <p className="phone-number">
                <a href="tel:877-477-2311">(877) 477-2311</a>
              </p>
              <p className="mt-4 contact-address">
                2121 Alton Pkwy, Suite 150 <br />
                Irvine, CA 92606
              </p>
              <button className="mt-4 button nav-button transparent get-directions">
                <a href="https://www.google.com/maps/dir//Doctor+Genius,+2121+Alton+Pkwy+%23150,+Irvine,+CA+92606/@33.6944898,-117.8412595,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcde9f23745717:0x9660a06c68c4bd1!2m2!1d-117.839795!2d33.69453!3e0">
                  Get Directions
                </a>
              </button>
              <p className="mt-4 contact-hours">
                Monday to Friday <br />8 AM to 5 PM PST
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lap-7 map-holder">
              <iframe
                className="dg-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37557.65712271714!2d-117.83748222010603!3d33.69188625008202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9660a06c68c4bd1!2sDoctor+Genius!5e0!3m2!1sen!2sus!4v1563921417170!5m2!1sen!2sus"
                allowFullScreen
                height="340"
                width="475"
                title="Map to Doctor Genius"
              ></iframe>
            </div>
          </div>
        </Container>
      </div>

      {/*HIDDEN UNTIL THE END */}
      <Main>
        <Container>
          <div className="row padded">
            <div className="col-sm-10">
              <div className="inner-title center">
                <h3 className="strapline">Built for Success</h3>
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
                  with transparent reporting to measure our results.
                </p>
              </div>
            </div>
          </div>
        </Container>

        <div className="row">
          <div className="col-12">
            <center>
              <img
                className="img-responsive marketing-dashboard-lg"
                src={homepageMarketingDashboard}
                alt="Digital Marketing Dashboard"
              />
              <img
                src={homepageMarketingDashboardMobile}
                className="img-responsive marketing-dashboard-sm"
                alt="Digital Marketing Dashboard"
              />
            </center>
          </div>
        </div>

        <Container>
          <div className="row padded short-top short-bottom">
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
                alt="New Patient Acquisitions"
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
                alt="What makes Doctor Genius different?"
              />
            </div>
          </div>
          <div className="row padded short-top tall-bottom">
            <div className="col-sm-12 col-md-6">
              <img
                className="img-responsive blur-bleed"
                src={dgClientSatisfaction}
                alt="Client Satisfaction"
              />
            </div>
            <div className="col-sm-9 col-md-5">
              <div className="content-block">
                <div className="inner-title">
                  <h2>
                    How would you rate Doctor Genius' client satisfaction?
                  </h2>
                  <div className="accented-paragraph">
                    <p className="s-thin">
                      Don't take our word for it, see what our clients say about
                      our 100+ 5 Star Reputation. Check out our{" "}
                      <a
                        href="https://www.google.com/search?q=doctorgenius&rlz=1C1GCEA_enUS780US780&oq=doctorgenius&aqs=chrome..69i57j69i60l3.1719j0j1&sourceid=chrome&ie=UTF-8#lrd=0x80dcde9f23745717:0x9660a06c68c4bd1,1,,,"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        reviews here.
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
