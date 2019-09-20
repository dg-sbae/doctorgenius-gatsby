import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
// import InnerTitle from "../components/inner-title.js"

import "../styles/homepage.scss"

import thinArrowRight from "../img/right-arrow.svg"

export default ({ data }, props) => {
  const images = data
  return (
    <DefaultPageLayout location={props["*"]}>
      <Helmet>
        <title>
          High Conversion Patient Acquisition Websites | Performance, Results,
          Excellence
        </title>
        <meta
          name="description"
          content="Start acquiring the new patients your healthcare practice deserves. Mobile first conversion focused medical websites combined with performance digital marketing."
        />
      </Helmet>
      <SEO page="homepage" />
      <div className={"homepage"}>
        <BackgroundImage fluid={images.heroBg.childImageSharp.fluid}>
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
                        <span>The Leader in</span> New Patient Acquisitions
                      </h1>
                      <div className="accented-paragraph">
                        <p>
                          Doctor Genius offers high-end web marketing services
                          to health care professionals throughout the United
                          States. Learn how we funnel traffic to converted
                          patients directly to your practice.
                        </p>
                      </div>
                    </div>
                    <div className="demo-cta">
                      <a href="/demo" className="button flat white-text">
                        Request Demo{" "}
                        <img src={thinArrowRight} alt="Arrow Right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </BackgroundImage>
        <Main>
          <Container>
            <div className="row padded panel-row">
              <div className="col-sm-10">
                <div className="header inner-title center">
                  <h3 className="strapline">
                    Performance, Results, Excellence
                  </h3>
                  <h2 className="underline">We Care About Your Success</h2>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <Img
                      fixed={images.medal.childImageSharp.fixed}
                      className="img-icon"
                      alt="Increase in Google First-Page Results"
                    />
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
                    <Img
                      fixed={images.money.childImageSharp.fixed}
                      className="img-icon"
                      alt="Increase in Revenue"
                    />
                  </div>
                  <p className="panel-heading">100%</p>
                  <p className="panel-body">Increase in Revenue!</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <Img
                      fixed={images.groupChat.childImageSharp.fixed}
                      className="img-icon"
                      alt="Increase in New Patient Calls"
                    />
                  </div>
                  <p className="panel-heading">88%</p>
                  <p className="panel-body">Increase in New Patient Calls!</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="panel">
                  <div className="icon-wrapper">
                    <Img
                      fixed={images.stars.childImageSharp.fixed}
                      className="img-icon"
                      alt="Icon of Stars"
                    />
                  </div>
                  <p className="panel-heading">4+ Stars</p>
                  <p className="panel-body">
                    We take pride in our{" "}
                    <a
                      href="https://www.google.com/search?q=doctorgenius&rlz=1C1GCEA_enUS780US780&oq=doctorgenius&aqs=chrome..69i57j69i60l3.1719j0j1&sourceid=chrome&ie=UTF-8#lrd=0x80dcde9f23745717:0x9660a06c68c4bd1,1,,,"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    Our robust, comprehensive marketing solutions helps keep
                    your online digital marketing presence ahead of competition.
                    We provide tools and analysis to improve new patient
                    acquisition with transparent reporting to measure our
                    results.
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
                  src={
                    images.homepageMarketingDashboard.childImageSharp.fixed.src
                  }
                  alt="Digital Marketing Dashboard"
                />
                <img
                  src={
                    images.homepageMarketingDashboardMobile.childImageSharp
                      .fixed.src
                  }
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
                <Img
                  fluid={images.newPatientAcquisitions.childImageSharp.fluid}
                  className="img-responsive blur-bleed"
                  alt="New Patient Acquisitions"
                />
              </div>
              <div className="col-sm-9 col-md-5">
                <div className="content-block">
                  <div className="inner-title">
                    <h2>
                      Why is Doctor Genius # 1 in new patient acquisitions?
                    </h2>
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
                        performance based program and take pride in your
                        success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">
                <Img
                  fluid={images.dgDifferent.childImageSharp.fluid}
                  className="img-responsive blur-bleed"
                  alt="What makes Doctor Genius different?"
                />
              </div>
            </div>
            <div className="row padded short-top tall-bottom">
              <div className="col-sm-12 col-md-6">
                <Img
                  fluid={images.dgClientSatisfaction.childImageSharp.fluid}
                  className="img-responsive blur-bleed"
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
                        Don't take our word for it, see what our clients say
                        about our 100+ 5 Star Reputation. Check out our{" "}
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
}

export const ImageQuery = graphql`
  query HomepageImages {
    medal: file(relativePath: { eq: "google-first-page.png" }) {
      childImageSharp {
        fixed(width: 105) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    money: file(relativePath: { eq: "increase-in-revenue.png" }) {
      childImageSharp {
        fixed(width: 105) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stars: file(relativePath: { eq: "stars.png" }) {
      childImageSharp {
        fixed(width: 105) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    groupChat: file(relativePath: { eq: "increase-in-new-patient-calls.png" }) {
      childImageSharp {
        fixed(width: 105) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    newPatientAcquisitions: file(
      relativePath: { eq: "new-patient-acquisitions.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dgDifferent: file(
      relativePath: { eq: "what-makes-doctorgenius-different.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dgClientSatisfaction: file(
      relativePath: { eq: "client-satisfaction.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homepageMarketingDashboard: file(
      relativePath: { eq: "marketing-dashboard.jpg" }
    ) {
      childImageSharp {
        fixed(width: 1287, quality: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    homepageMarketingDashboardMobile: file(
      relativePath: { eq: "marketing-dashboard-mobile.jpg" }
    ) {
      childImageSharp {
        fixed(width: 375) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    heroBg: file(relativePath: { eq: "homepage-option-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

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
