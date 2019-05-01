import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import contentMarketingIcon from "../img/contract.svg"
import responsiveWebsitesIcon from "../img/website.svg"
import digitalAdvertisingIcon from "../img/digital-advertising.svg"
import onlineReputationIcon from "../img/online-reputation.svg"
import ourTechnologyIcon from "../img/our-technology.svg"
import hostingSolutionsIcon from "../img/hosting-solutions.svg"
import lighthouseResultsOnMarketingPage from "../img/lighthouse-results-on-marketing-page.png"
import portalDashboard from "../img/portal-dashboard.png"

import { FaArrowRight } from "react-icons/fa"

import "../styles/marketing-solutions.scss"
import "../styles/global-styles.scss"

export default props => (
  <DefaultPageLayout>
    <div className={props["*"]}>
      <div className="hero">
        {/* Hero will be a layout component */}
        {/* @todo: Heros need a thin grey border underneath, not included in pic */}
        <Container>
          <div className="valign-wrapper row">
            <div className="col-sm-12">
              <div class="hero-content accent-block">
                <h1>Marketing Solutions</h1>
                <h2>
                  Predictable <span>Practice Growth Solution</span>
                </h2>
                <div className="accented-paragraph">
                  <p>
                    Proven and innovative solutions to move your business
                    forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Main>
        <Container>
          {/* Begin secondary nav Component: */}
          <div className="row">
            <div className="col-sm-12 panel-row">
              <div className="secondary-nav">
                <div className="panel">
                  <div className="icon-wrapper">
                    <a href="/marketing-solutions/websites/">
                      <img
                        className="img-icon"
                        src={responsiveWebsitesIcon}
                        alt="Responsive Websites"
                      />
                    </a>
                  </div>
                  <p>Responsive Websites</p>
                </div>
                <div className="panel">
                  <div className="icon-wrapper">
                    <a href="/marketing-solutions/content-marketing/">
                      <img
                        className="img-icon"
                        src={contentMarketingIcon}
                        alt="Content Marketing"
                      />
                    </a>
                  </div>
                  <p>Content Marketing</p>
                </div>
                <div className="panel">
                  <div className="icon-wrapper">
                    <a href="/marketing-solutions/digital-advertising/">
                      <img
                        className="img-icon"
                        src={digitalAdvertisingIcon}
                        alt="Digital Advertising"
                      />
                    </a>
                  </div>
                  <p>Digital Advertising</p>
                </div>
                <div className="panel">
                  <div className="icon-wrapper">
                    <a href="/marketing-solutions/online-reputation-management/">
                      <img
                        className="img-icon"
                        src={onlineReputationIcon}
                        alt="Online Reputation"
                      />
                    </a>
                  </div>
                  <p>Online Reputation</p>
                </div>
                <div class="panel">
                  <div className="icon-wrapper">
                    <a href="/marketing-solutions/our-technology/">
                      <img
                        className="img-icon"
                        src={ourTechnologyIcon}
                        alt="Our Technology"
                      />
                    </a>
                  </div>
                  <p>Our Technology</p>
                </div>
                <div class="panel">
                  <div className="icon-wrapper">
                    <a href="/marketing-solutions/hosting-solutions/">
                      <img
                        className="img-icon"
                        src={hostingSolutionsIcon}
                        alt="Hosting Solutions"
                      />
                    </a>
                  </div>
                  <p>Hosting Solutions</p>
                </div>
              </div>
            </div>
          </div>
          {/* End secondary nav Component */}
          {/* Begin Split Row of content and image */}
          <div class="row padded short-top short-bottom odd-row proven-results-row">
            <div class="col-sm-6">
              <div class="content-block">
                <div class="inner-title">
                  <h2>Proven and tested results in every step of the way</h2>
                  <div class="accented-paragraph">
                    <p className="m-thin">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc dui turpis, sodales ut mollis quis, ullamcorper a
                      metus
                    </p>
                    <a href="$#" className="link-with-icon">
                      <img
                        src="/icon/right-arrow-blue.svg"
                        class="link-icon"
                        alt="Icon of a Right Arrow"
                      />
                      See Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <img
                className="img-responsive blur-bleed lighthouse-image"
                src={lighthouseResultsOnMarketingPage}
                alt="Ligthhouse Page Speed Score"
              />
            </div>
          </div>
          {/* End Split Row of content and image */}
          {/* Begin Split Row of image and content */}
          <div class="row padded short-top tall-bottom even-row dashboard-row">
            <div class="col-sm-6">
              <img
                className="img-responsive blur-bleed"
                src={portalDashboard}
                alt="Our Client Dashboard"
              />
            </div>
            <div class="col-sm-6">
              <div class="content-block">
                <div class="inner-title">
                  <h2>All the tools you'll need to be in control. </h2>
                  <div class="accented-paragraph">
                    <p className="m-thin">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc dui turpis, sodales ut mollis quis, ullamcorper a
                      metus
                    </p>
                    <a href="$#" className="link-with-icon">
                      <img
                        src="/icon/right-arrow-blue.svg"
                        class="link-icon"
                        alt="Icon of a Right Arrow"
                      />
                      Our Technology
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Split Row of image and content */}
          {/* Begin Full bleed content row (reversed) */}
          <div className="full-bleed-wrapper pad-md">
            <div className="full-bleed check-plans-background-image flipped" />
            <div className="full-bleed-content-wrapper">
              <div className="row">
                <div className="col-sm-5">
                  <div className="content-block">
                    <div className="inner-title">
                      <h2>Check which plan works for your practice</h2>
                    </div>
                    <div className="accented-paragraph medium-width">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc dui turpis, sodales ut mollis quis, ullamcorper a
                        metus
                      </p>
                      <a href="$#" className="link-with-icon">
                        <img
                          src="/icon/right-arrow-blue.svg"
                          class="link-icon"
                          alt="Icon of a Right Arrow"
                        />
                        See Our Plans
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7" />
              </div>
            </div>
          </div>
          {/* End Full bleed content row (reversed)*/}
          {/* Begin Demo Footer */}
          <div class="row padded tall-top tall-bottom request-demo-footer">
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
                  Request Demo <FaArrowRight />
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
