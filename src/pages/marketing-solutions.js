import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import MobileSecondaryNav from "../components/MobileSecondaryNav"
import InnerTitle from "../components/inner-title.js"
import SecondaryNavigation from "../components/SecondaryNavigation"
import RequestDemoFooter from "../components/request-demo-footer"

import rightArrowBlue from "../img/icon/right-arrow-blue.svg"

import "../styles/marketing-solutions.scss"
import PageStyles from "./marketing-solutions.module.scss"
import RowStyles from "../components/Row.module.scss"

const MarketingSolutions = data => {
  const images = data.data
  return (
    <div
      className={PageStyles.marketingSolutionsPage + " " + RowStyles.rowStyling}
    >
      <DefaultPageLayout location="marketing-solutions">
        <Helmet>
          <title>
            Medical Digital Marketing Solutions | Predictable Practice Growth
            Solution
          </title>
          <meta
            name="description"
            content="Premier Google Partner and full-service digital marketing agency serving practices nationwide with a results-driven approach. Get new patients today."
          />
        </Helmet>
        <div className="marketing-solutions">
          <BackgroundImage fluid={images.heroBg.childImageSharp.fluid}>
            <div className={PageStyles.hero + " hero"}>
              {/* Hero will be a layout component */}

              <Container>
                <div className={RowStyles.row + " valign-wrapper"}>
                  <div className="col-sm-12">
                    <div
                      className={
                        PageStyles.heroContent + " hero-content accent-block"
                      }
                    >
                      <h1>Marketing Solutions</h1>
                      <h2>
                        <span>Predictable</span> Practice Growth Solution
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
          </BackgroundImage>
          <Main>
            <Container>
              {/* Begin secondary nav Component: */}
              <div className={RowStyles.row}>
                <div className="col-sm-12 panel-row">
                  <SecondaryNavigation
                    pageType="marketingSolutions"
                    currentPage="parent"
                  />
                </div>
              </div>
              {/* End secondary nav Component */}
              {/* Begin mobile secondary navigation component */}
              <MobileSecondaryNav
                parentPage="marketingSolutions"
                titleItem="Responsive Websites"
              />
              {/* End mobile secondary navigation component */}
              {/* Begin Split Row of content and image */}
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop +
                  " " +
                  RowStyles.shortBottom +
                  " " +
                  PageStyles.oddRow
                }
              >
                <div className="col-sm-9 col-md-5 offset-md-1 order-sm-2 order-md-1">
                  <div className="content-block">
                    <InnerTitle
                      title="Proven and tested results in every step of the way"
                      inContentBlock
                    />
                    <div>
                      <div className="accented-paragraph">
                        <p className="s-thin">
                          Powerful data-driven technology helps you leverage
                          comprehensive reporting to achieve best-practice
                          performance metrics, make informed business decisions,
                          and improve efficiencies
                        </p>
                        <a
                          href="/case-study"
                          className={PageStyles.linkWithIcon}
                        >
                          <img
                            src={rightArrowBlue}
                            className={PageStyles.linkIcon}
                            alt="Icon of a Right Arrow"
                          />
                          See Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">
                  <Img
                    fluid={
                      images.lighthouseResultsOnMarketingPage.childImageSharp
                        .fluid
                    }
                    alt="Ligthhouse Page Speed Score"
                    className={
                      PageStyles.lighthouseImage + " " + PageStyles.blurBleed
                    }
                  />
                </div>
              </div>
              {/* End Split Row of content and image */}
              {/* Begin Split Row of image and content */}
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop +
                  " " +
                  RowStyles.tallBottom +
                  " " +
                  PageStyles.evenRow
                }
              >
                <div className="col-sm-10 col-md-6">
                  <Img
                    fluid={images.portalDashboard.childImageSharp.fluid}
                    className={
                      PageStyles.portalDashboard + " " + PageStyles.blurBleed
                    }
                    alt="Our Client Dashboard"
                  />
                </div>
                <div className={PageStyles.toolsYouNeed + " col-sm-9 col-md-5"}>
                  <div className="content-block">
                    <InnerTitle
                      title="All the tools you'll need to be in control."
                      inContentBlock
                    />
                    <div>
                      <div className="accented-paragraph">
                        <p>
                          In order to for you to thrive online, you must also
                          utilize software to effectively manage the
                          interactions you and your staff has with your leads,
                          prospective patients, and eventual patients.
                        </p>
                        <a
                          href="/marketing-solutions/our-technology"
                          className={PageStyles.linkWithIcon}
                        >
                          <img
                            src={rightArrowBlue}
                            className={PageStyles.linkIcon}
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
                <BackgroundImage
                  fluid={images.OurClientsFullBleed.childImageSharp.fluid}
                  className={
                    PageStyles.checkPlansBackgroundImage +
                    " full-bleed check-plans-background-image flipped"
                  }
                ></BackgroundImage>
                <div className="full-bleed-content-wrapper">
                  <div className={RowStyles.row}>
                    <div
                      className={
                        PageStyles.fullBleedContent + " col-sm-8 col-md-5"
                      }
                    >
                      <div className="content-block">
                        <InnerTitle
                          title="Check which plan works for your practice"
                          inContentBlock
                        />

                        <div className="accented-paragraph medium-width">
                          <p>
                            From new patient acquisition to retention, Doctor
                            Genius has you covered.
                          </p>
                          <a href="/plans" className={PageStyles.linkWithIcon}>
                            <img
                              src={rightArrowBlue}
                              className={PageStyles.linkIcon}
                              alt="Icon of a Right Arrow"
                            />
                            See Our Plans
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-7" />
                  </div>
                </div>
              </div>
              {/* End Full bleed content row (reversed)*/}

              {/* Begin Demo Footer */}
              <RequestDemoFooter smWidth="9" />
              {/* End Demo Footer */}
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default MarketingSolutions

export const ImageQuery = graphql`
  query MarketingSolutionsImages {
    lighthouseResultsOnMarketingPage: file(
      relativePath: { eq: "lighthouse-results-on-marketing-page.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    portalDashboard: file(relativePath: { eq: "portal-dashboard.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroBg: file(relativePath: { eq: "marketing-solutions.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    OurClientsFullBleed: file(
      relativePath: { eq: "our-clients-fullbleed-image.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
