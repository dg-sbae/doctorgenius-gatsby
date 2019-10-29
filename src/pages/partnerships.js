import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import thinArrowRight from "../img/right-arrow.svg"
import rightArrowBlue from "../img/icon/right-arrow-blue.svg"

import "../styles/partnerships.scss"
import PageStyles from "./partnerships.module.scss"
import RowStyles from "../components/Row.module.scss"

const Partnerships = data => {
  const images = data.data
  return (
    <div className={PageStyles.partnershipsPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="partnerships">
        <Helmet>
          <title>
            Value Added Partnerships | Let's Talk | View our Featured Partners
          </title>
          <meta
            name="description"
            content="Learn about our partnership program that leverages our strong performance driven marketing platform with your existing customer base or technology."
          />
        </Helmet>
        <div className="partnerships">
          <BackgroundImage fluid={images.heroBg.childImageSharp.fluid}>
            <div className={PageStyles.hero + " hero"}>
              {/* Hero will be a layout component */}

              <Container>
                <div className={RowStyles.row + " valign-wrapper"}>
                  <div className="col-sm-12">
                    <div className={PageStyles.heroContent + " hero-content"}>
                      <div
                        className={
                          PageStyles.heroContent + " hero-content accent-block"
                        }
                      >
                        <h1>Partnerships</h1>
                        <h2>
                          <span>Being Partners With Us </span>makes it more
                          possible
                        </h2>
                        <div
                          className={
                            PageStyles.accentedParagraph + " accented-paragraph"
                          }
                        >
                          <p>
                            Explore opportunities to establish a value-added
                            partnership with an organization whose central focus
                            is success.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </BackgroundImage>
          <Main>
            <Container>
              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <div className={PageStyles.contentBlock + " content-block"}>
                    <div
                      className={
                        PageStyles.thinHeading +
                        " inner-title center thin-heading"
                      }
                    >
                      <h3 className="strapline">Partnerships</h3>
                      <h2 className="underline">
                        <span>
                          <b>Your Success is Our Goal</b> and We're Here to{" "}
                          <b>Help You Achieve It</b>
                        </span>
                      </h2>
                    </div>
                    <div
                      className={
                        PageStyles.accentedParagraph + " accented-paragraph"
                      }
                    >
                      <p>
                        By investing in Doctor Genius, you are investing in a
                        partnership with a company in the forefront of the
                        healthcare digital marketing space. In each step of the
                        way, our team of experts will take you through the
                        process and capture the goal and mission of your
                        organization. Call us or enter your contact information
                        for more details today.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  PageStyles.panelRow +
                  " " +
                  PageStyles.featuredPartnersRow
                }
              >
                <div className="col-sm-12">
                  <div className={PageStyles.contentBlock + " content-block"}>
                    <div
                      className={
                        PageStyles.thinHeading +
                        " inner-title center thin-heading"
                      }
                    >
                      <h2 className="underline">
                        <b>Featured Partners</b>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className={RowStyles.row + " " + PageStyles.fullWidthRow}>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.googleLogo.childImageSharp.fixed.src}
                          alt="Google Partner"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.pulseCheckLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner PulseCheck"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.picisLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner Picis"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.boaLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner Bank of America"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={RowStyles.row + " " + PageStyles.fullWidthRow}>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.pattersonLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner Patterson Companies, Inc."
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.roiLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner Roi Dental Coaching"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.hrHealthLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner HR for Health"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.logoPartnershipItem + " col-sm-6 col-lap-3"
                    }
                  >
                    <div className={PageStyles.panel}>
                      <div className={PageStyles.iconWrapper}>
                        <img
                          className={PageStyles.imgIcon}
                          src={images.jllLogo.childImageSharp.fixed.src}
                          alt="Digital Marketing Partner JLL"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Begin Demo Footer */}
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.tallTop +
                  " " +
                  PageStyles.requestDemoFooter +
                  " request-demo-footer"
                }
              >
                <div className="col-md-1" />
                <div className="col-sm-9 col-md-5">
                  <div className={PageStyles.contentBlock + " content-block"}>
                    <div className="inner-title">
                      <h2>
                        Start your <span>success</span> with Doctor Genius
                        today!
                      </h2>
                      <div
                        className={
                          PageStyles.accentedParagraph + " accented-paragraph"
                        }
                      >
                        <p>
                          The Genius platform makes every part of your company
                          process more efficient. Our support team is very
                          excited to help you and get your company on the right
                          path of success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-9 col-md-5">
                  <div className="center">
                    <a href="/demo" className="button flat white-text">
                      Request Demo{" "}
                      <img src={thinArrowRight} alt="Arrow Right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Demo Footer */}

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.tallTop +
                  " " +
                  PageStyles.requestDemoFooter +
                  " request-demo-footer"
                }
              >
                <div className="col-sm-8  order-sm-2 col-md-6 offset-md-0 order-md-1">
                  <div className={PageStyles.contentBlock + " content-block"}>
                    <div className="innerTitle">
                      <h2 className="font-weight-normal">
                        Let's{" "}
                        <span className="font-weight-semibold">
                          Talk Partnership
                        </span>
                      </h2>
                      <div
                        className={
                          PageStyles.accentedParagraph + " accented-paragraph"
                        }
                      >
                        <p>
                          We are based in Irvine, California, USA. Dental Genius
                          has consistent 5 Star Ratings on Google. We employ and
                          all-star development, support, and sales team to
                          provide high level online marketing solutions to
                          medical & health practices within the United States.
                        </p>
                        <a
                          href="/demo"
                          className="link-with-icon font-weight-semibold"
                        >
                          <img
                            src={rightArrowBlue}
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
                  <Img
                    fluid={
                      images.digitalMarketingPartnershipImage.childImageSharp
                        .fluid
                    }
                    alt="Digital Marketing Partnership"
                    className="img-responsive"
                  />
                </div>
              </div>
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default Partnerships

export const ImageQuery = graphql`
  query PartnershipImages {
    googleLogo: file(relativePath: { eq: "google-partner.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pulseCheckLogo: file(
      relativePath: { eq: "digital-marketing-partner-pulsecheck.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    picisLogo: file(
      relativePath: { eq: "digital-marketing-partner-picis.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    boaLogo: file(relativePath: { eq: "digital-marketing-partner-bofa.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pattersonLogo: file(
      relativePath: { eq: "digital-marketing-partner-patterson.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    roiLogo: file(
      relativePath: { eq: "digital-marketing-partner-roi-dental.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    hrHealthLogo: file(
      relativePath: { eq: "digital-marketing-partner-hrforhealth.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    jllLogo: file(relativePath: { eq: "digital-marketing-partner-jll.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    digitalMarketingPartnershipImage: file(
      relativePath: { eq: "digital-marketing-partnership.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroBg: file(relativePath: { eq: "partnerships-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
