import React from "react"
import { Helmet } from "react-helmet"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import TestimonialsSlider from "../components/testimonials-slider"

import googleLogo from "../../public/icon/logo-google.png"
import pulseCheckLogo from "../../public/icon/pulse-check-logo.png"
import picisLogo from "../../public/icon/logo-picis.png"
import boaLogo from "../../public/icon/logo-bofa.png"
import pattersonLogo from "../../public/icon/patterson-logo.png"
import roiLogo from "../../public/icon/logo-roi-dental.png"
import hrHealthLogo from "../../public/icon/logo-hrforhealth.png"
import jllLogo from "../../public/icon/logo-jll.png"

import "../styles/partnerships.scss"

export default props => (
  <DefaultPageLayout location={props["*"]}>
    <Helmet>
      <title>Value Added Partnerships | Let's Talk | Doctor Genius</title>
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
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
            <div className="col-sm-9 offset-sm-1">
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text
                    ever. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text
                    ever. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row padded panel-row">
            <div className="col-sm-12">
              <div className="content-block">
                <div className="inner-title center thin-heading">
                  <h2 className="underline">
                    <b>Featured Partners</b>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
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
            <div className="col-sm-3">
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
            <div className="col-sm-3">
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
            <div className="col-sm-3">
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
            <div className="col-sm-3">
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
            <div className="col-sm-3">
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
            <div className="col-sm-3">
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
            <div className="col-sm-3">
              <div className="panel">
                <div className="icon-wrapper">
                  <img className="img-icon" src={jllLogo} alt="Icon JLL Logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="row padded tall-top request-demo-footer">
            <div className="col-sm-6">
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
                      consistent 5 Star Ratings on Google+, and A Rated with the
                      BBB. We employ and all-star development, support, and
                      sales team to provide high level online marketing
                      solutions to medical & health practices within the United
                      States.
                    </p>
                    <a
                      href="/demo/"
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
            <div className="col-sm-6">
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
