import React from "react"
import { Helmet } from "react-helmet"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import googleLogo from "../../public/icon/logo-google.png"
import pulseCheckLogo from "../../public/icon/pulse-check-logo.png"
import picisLogo from "../../public/icon/logo-picis.png"
import boaLogo from "../../public/icon/logo-bofa.png"
import pattersonLogo from "../../public/icon/patterson-logo.png"
import roiLogo from "../../public/icon/logo-roi-dental.png"
import hrHealthLogo from "../../public/icon/logo-hrforhealth.png"
import jllLogo from "../../public/icon/logo-jll.png"
import thinArrowRight from "../img/right-arrow.svg"

import "../styles/partnerships.scss"

export default props => (
  <DefaultPageLayout location={props["*"]}>
    <Helmet>
      <title>Value Added Partnerships | Let's Talk | View our Featured Partners</title>
      <meta name="description" content="Learn about our partnership program that leverages our strong performance driven marketing platform with your existing customer base or technology." />
    </Helmet>
    <div className={props["*"]}>
      <div className="hero">
        {/* Hero will be a layout component */}

        <Container>
          <div className="valign-wrapper row">
            <div className="col-sm-12">
              <div className="hero-content">
                <div className="hero-content accent-block">
                  <h1>Partnerships</h1>
                  <h2>
                    <span>Being Partners With Us </span>makes it more possible
                  </h2>
                  <div className="accented-paragraph">
                    <p>
                      Explore opportunities to establish a value-added
                      partnership with an organization whose central focus is
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Main>
        <Container>
          <div className="row padded">
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="content-block">
                <div className="inner-title center thin-heading">
                  <h3 className="strapline">Partnerships</h3>
                  <h2 className="underline">
                    <span>
                      <b>Your Success is Our Goal</b> and We're Here to{" "}
                      <b>Help You Achieve It</b>
                    </span>
                  </h2>
                </div>
                <div className="accented-paragraph">
                  <p>
                    By investing in Doctor Genius, you are investing in a
                    partnership with a company in the forefront of the
                    healthcare digital marketing space. In each step of the way,
                    our team of experts will take you through the process and
                    capture the goal and mission of your organization. Call us
                    or enter your contact information for more details today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row padded panel-row featured-partners-row">
            <div className="col-sm-12">
              <div className="content-block">
                <div className="inner-title center thin-heading">
                  <h2 className="underline">
                    <b>Featured Partners</b>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="logo-partnership-item col-sm-6 col-lap-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <img
                      className="img-icon"
                      src={googleLogo}
                      alt="Icon of Google Logo"
                    />
                  </div>
                </div>
              </div>
              <div className="logo-partnership-item col-sm-6 col-lap-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <img
                      className="img-icon"
                      src={pulseCheckLogo}
                      alt="Icon of Pulse Check Logo"
                    />
                  </div>
                </div>
              </div>
              <div className="logo-partnership-item col-sm-6 col-lap-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <img
                      className="img-icon"
                      src={picisLogo}
                      alt="Icon of Pulse Check Logo"
                    />
                  </div>
                </div>
              </div>
              <div className="logo-partnership-item col-sm-6 col-lap-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <img
                      className="img-icon"
                      src={boaLogo}
                      alt="Icon of Bank of America Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="logo-partnership-item col-sm-6 col-lap-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <img
                      className="img-icon"
                      src={pattersonLogo}
                      alt="Icon of Patterson Dental Logo"
                    />
                  </div>
                </div>
              </div>
              <div className="logo-partnership-item col-sm-6 col-lap-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <img
                      className="img-icon"
                      src={roiLogo}
                      alt="Icon of ROI Logo"
                    />
                  </div>
                </div>
              </div>
              <div className="logo-partnership-item col-sm-6 col-lap-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <img
                      className="img-icon"
                      src={hrHealthLogo}
                      alt="Icon of HR for Health Logo"
                    />
                  </div>
                </div>
              </div>
              <div className="logo-partnership-item col-sm-6 col-lap-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <img
                      className="img-icon"
                      src={jllLogo}
                      alt="Icon JLL Logo"
                    />
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

          <div className="row padded tall-top request-demo-footer">
            <div className="col-sm-8  order-sm-2 col-md-6 offset-md-0 order-md-1">
              <div className="content-block">
                <div className="innerTitle">
                  <h2 className="font-weight-normal">
                    Let's{" "}
                    <span className="font-weight-semibold">
                      Talk Partnership
                    </span>
                  </h2>
                  <div className="accented-paragraph">
                    <p>
                      We are based in Irvine, California, USA. Dental Genius has
                      consistent 5 Star Ratings on Google. We employ and
                      all-star development, support, and sales team to provide
                      high level online marketing solutions to medical & health
                      practices within the United States.
                    </p>
                    <a
                      href="/demo"
                      className="link-with-icon font-weight-semibold"
                    >
                      <img
                        src="/icon/right-arrow-blue.svg"
                        className="link-icon"
                        alt="Icon of a Right Arrow"
                      />
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 order-sm-1 col-md-6 offset-md-0 order-md-2">
              <img
                className="img-responsive"
                src="/png/computer-and-mobile-detail.png"
                alt="Device Screens"
              />
            </div>
          </div>
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)
