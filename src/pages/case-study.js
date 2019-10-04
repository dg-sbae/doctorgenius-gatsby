import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import "../styles/case-study.scss"
import CaseStudyStyles from "../components/case-study.module.scss"

import thinArrowRight from "../img/right-arrow.svg"
import newPatientOppIcon from "../img/icon/new-patient-opportunity.svg"
import marketingSolutionsIcon from "../img/icon/marketing-solutions-suite.svg"
import liveSupportIcon from "../img/icon/live-support-concierge.svg"
import performanceCampaignIcon from "../img/icon/performance-driven-campaigns.svg"

const CaseStudy = data => {
  const images = data.data
  return (
    <DefaultPageLayout location="case-study">
      <div className={CaseStudyStyles.caseStudy}>
        <Helmet>
          <title>
            In-Depth Healthcare Marketing Case Study | New Patient Acquisition
            Strategies
          </title>
          <meta
            name="description"
            content="An in-depth case study of a performance driven marketing platform highlighting how content marketing done right impacts new patient acquisition."
          />
        </Helmet>
        <div>
          <BackgroundImage fluid={images.heroBg.childImageSharp.fluid}>
            <div className={CaseStudyStyles.hero + " hero"}>
              {/* Hero will be a layout component */}

              <Container>
                <div className="valign-wrapper row">
                  <div className="col-sm-12">
                    <div className="hero-content">
                      <div
                        className={
                          CaseStudyStyles.accentBlock +
                          " hero-content accent-block"
                        }
                      >
                        <h1>Case Study</h1>
                        <h2>
                          <span>Challenge</span> Accepted
                        </h2>
                        <div className="accented-paragraph">
                          <p>
                            The problem, the answer, and the outcome. Doctor
                            Genius’ performance driven marketing platform in
                            action.
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
              <div className="row padded panel-row">
                <div className="col-sm-12">
                  <div
                    className={
                      CaseStudyStyles.innerTitle + " header inner-title center"
                    }
                  >
                    <h2 className="underline">The Client</h2>
                  </div>
                </div>
              </div>
              <div className="row padded short-top">
                <div
                  className={
                    CaseStudyStyles.logoBlock +
                    " col-sm-8 col-md-6 col-lap-6 col-lg-6 logo-block"
                  }
                >
                  <img
                    className={
                      CaseStudyStyles.imgResponsive + " img-responsive"
                    }
                    src={images.titanDentalLogo.childImageSharp.fixed.src}
                    alt="Titan Dental Care - Digital Marketing Client"
                  />
                </div>
                <div className="col-sm-12 col-md-10 col-lap-6 col-lg-6">
                  <div className="">
                    <p>
                      Dr. Rami Tahhan came to us a few years ago and was hardly
                      found anywhere on the first page of Google. The tracking
                      of any organic traffic related to online search was
                      non-existent. Online branding complete online presence had
                      much left to be desired and needed further expanding upon.
                      <br />
                      <br />
                      Bottom line, Dr Tahhan wanted a marketing plan of action
                      that would translate to results and revenue.
                    </p>
                  </div>
                  <div
                    className={
                      CaseStudyStyles.clientQuoteBlock + " client-quote-block"
                    }
                  >
                    <p
                      className={CaseStudyStyles.clientQuote + " client-quote"}
                    >
                      "Over the past 12 months, the office has doubled in
                      revenue due to proper marketing methods!"
                    </p>
                    <p
                      className={
                        CaseStudyStyles.clientAuthor + " client-author"
                      }
                    >
                      - Rami Tahhan, D.D.S.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row padded panel-row">
                <div className="col-sm-12">
                  <div
                    className={
                      CaseStudyStyles.innerTitle + " header inner-title center"
                    }
                  >
                    <h2 className="underline">The Challenge</h2>
                  </div>
                </div>
              </div>
              <div className="row padded short-top">
                <div className="col-sm-12 col-md-10 order-2 col-lap-6 order-lap-1 col-lg-6 order-lg-1">
                  <div className="">
                    <p>
                      The plan was to rebuild his complete online branding with
                      a new website. Expand his full digital presence across the
                      myriad of relevant online directories. Enhance his
                      practice’s ever important social profiles. Focus on
                      customer satisfaction and increasing his positive online
                      reputation. Persistent and never-ending content publishing
                      to rise above his competitors in the online ranking
                      battle.
                      <br />
                      <br />
                      Providing all of this, as well as offering reporting and
                      metrics for full transparency on the performance of this
                      tailored marketing plan. This would allow Dr. Rami Tahhan
                      to see the success of our marketing efforts and measure a
                      true ROI.
                    </p>
                  </div>
                  <div
                    className={
                      CaseStudyStyles.clientQuoteBlock + " client-quote-block"
                    }
                  >
                    <p
                      className={
                        CaseStudyStyles.clientQuote + " client-quote s-thin"
                      }
                    >
                      "I can sleep well knowing marketing dollars are being well
                      spent."
                    </p>
                    <p
                      className={
                        CaseStudyStyles.clientAuthor + " client-author"
                      }
                    >
                      - Rami Tahhan, D.D.S.
                    </p>
                  </div>
                </div>
                <div
                  className={
                    CaseStudyStyles.imgContainer +
                    " col-sm-12 col-md-10 order-1 col-lap-6 order-lap-2 col-lg-6 order-lg-2 img-container"
                  }
                >
                  <Img
                    fluid={images.theChallengeImage.childImageSharp.fluid}
                    className={
                      CaseStudyStyles.imgResponsive + " img-responsive"
                    }
                    alt="Dental Office"
                  />
                </div>
              </div>

              <div className="row padded panel-row">
                <div className="col-sm-12">
                  <div
                    className={
                      CaseStudyStyles.innerTitle + " header inner-title center"
                    }
                  >
                    <h2 className="underline">The Solutions</h2>
                  </div>
                </div>
              </div>
              <div className="row padded short-top">
                <div
                  className={
                    CaseStudyStyles.OurPlansIMGContainer +
                    " col-md-12 col-lap-7 col-lg-7 our-plans-img-container"
                  }
                >
                  <img
                    className={
                      CaseStudyStyles.imgResponsive +
                      " img-responsive blur-bleed"
                    }
                    src={images.theSolutionsImage.childImageSharp.fixed.src}
                    alt="Acquire New Patients"
                  />
                </div>
                <div
                  className={
                    CaseStudyStyles.PanelQuadrant +
                    " col-sm-10 col-md-10 col-lap-5 col-lg-5 panel-quadrant"
                  }
                >
                  <div className={CaseStudyStyles.row + " row"}>
                    <div
                      className={
                        CaseStudyStyles.PanelQuadItem +
                        " col-sm-12 col-md-6 panel-quad-item"
                      }
                    >
                      <div className={CaseStudyStyles.Panel + " panel"}>
                        <div
                          className={
                            CaseStudyStyles.iconWrapper + " icon-wrapper"
                          }
                        >
                          <img
                            className="img-icon"
                            src={newPatientOppIcon}
                            alt="Handshake icon"
                          />
                        </div>
                      </div>

                      <div
                        className={
                          CaseStudyStyles.PanelQuadTextBlock +
                          " panel-quad-text-block"
                        }
                      >
                        <h4>
                          New Patient
                          <br />
                          Opportunity
                        </h4>
                        <p>
                          The goal is to reach every patient wherever they are.
                          In the 6 months we were able to increase new quality
                          patient call volume with extending with our program.
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        CaseStudyStyles.PanelQuadItem +
                        " col-sm-12 col-md-6 panel-quad-item"
                      }
                    >
                      <div className={CaseStudyStyles.Panel + " panel"}>
                        <div className="icon-wrapper">
                          <img
                            className="img-icon"
                            src={marketingSolutionsIcon}
                            alt="Webpage icon"
                          />
                        </div>
                      </div>

                      <div
                        className={
                          CaseStudyStyles.PanelQuadTextBlock +
                          " panel-quad-text-block"
                        }
                      >
                        <h4>
                          Marketing
                          <br />
                          Solutions Suite
                        </h4>
                        <p>
                          Our exclusive all-in-one marketing solution keeps our
                          clients digital marketing ahead of there industry. We
                          are proud to have all our product inhouse for our
                          client's needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={CaseStudyStyles.row + " row"}>
                    <div
                      className={
                        CaseStudyStyles.PanelQuadItem +
                        " col-sm-12 col-md-6 panel-quad-item"
                      }
                    >
                      <div className={CaseStudyStyles.Panel + " panel"}>
                        <div className="icon-wrapper">
                          <img
                            className="img-icon"
                            src={liveSupportIcon}
                            alt="People chat icon"
                          />
                        </div>
                      </div>
                      <div
                        className={
                          CaseStudyStyles.PanelQuadTextBlock +
                          " panel-quad-text-block"
                        }
                      >
                        <h4>
                          Live Support
                          <br />
                          Concierge
                        </h4>
                        <p>
                          Its our duty in making sure the client and his
                          customers are happy. We provide seamless support by
                          taking the time to understand our clients concerns in
                          areas they need help.
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        CaseStudyStyles.PanelQuadItem +
                        " col-sm-12 col-md-6 panel-quad-item"
                      }
                    >
                      <div className={CaseStudyStyles.Panel + " panel"}>
                        <div className="icon-wrapper">
                          <img
                            className="img-icon"
                            src={performanceCampaignIcon}
                            alt="Newspaper icon"
                          />
                        </div>
                      </div>
                      <div
                        className={
                          CaseStudyStyles.PanelQuadTextBlock +
                          " panel-quad-text-block"
                        }
                      >
                        <h4>
                          Performance Driven
                          <br />
                          Campaigns
                        </h4>
                        <p>
                          We are driven to improve our client's marketing
                          performance in all areas. Our technology has proven
                          for the first 6 months we are guaranteed our clients
                          200% new patients inquire.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row padded short-top">
                <div className="col-sm-12">
                  <div
                    className={
                      CaseStudyStyles.innerTitle + " header inner-title center"
                    }
                  >
                    <h2 className="underline">The Results</h2>
                  </div>
                </div>
                <div
                  className={
                    CaseStudyStyles.caseStudyContainer +
                    " col-md-7 col-lap-7 col-lg-7 case-study-container"
                  }
                >
                  <div
                    className={
                      CaseStudyStyles.innerTitle + " inner-title center"
                    }
                  >
                    <h3 className="m-0">Case Study: Titan Dental</h3>
                    <div
                      className={CaseStudyStyles.subtitle + " subtitle muted"}
                    >
                      The first 6 months
                    </div>
                  </div>
                  <div
                    className={
                      CaseStudyStyles.caseStudyTable + " case-study-table"
                    }
                  >
                    <div
                      className={
                        CaseStudyStyles.caseStudyItem + " case-study-item"
                      }
                    >
                      <p className={CaseStudyStyles.callout + " callout"}>
                        1,125%
                      </p>
                      <p>Increase in Google First-Page Revenue</p>
                    </div>
                    <div
                      className={
                        CaseStudyStyles.caseStudyItem + " case-study-item"
                      }
                    >
                      <p className={CaseStudyStyles.callout + " callout"}>
                        100%
                      </p>
                      <p>Increase in Revenue</p>
                    </div>
                    <div
                      className={
                        CaseStudyStyles.caseStudyItem + " case-study-item"
                      }
                    >
                      <p className={CaseStudyStyles.callout + " callout"}>
                        60%
                      </p>
                      <p>Growth in organic Search Traffic</p>
                    </div>
                    <div
                      className={
                        CaseStudyStyles.caseStudyItem + " case-study-item"
                      }
                    >
                      <p className={CaseStudyStyles.callout + " callout"}>
                        500%
                      </p>
                      <p>Growth in Reviews Across the Web</p>
                    </div>
                    <div
                      className={
                        CaseStudyStyles.caseStudyItem + " case-study-item"
                      }
                    >
                      <p className={CaseStudyStyles.callout + " callout"}>
                        200%
                      </p>
                      <p>New Patient Appointments</p>
                    </div>
                    <div
                      className={
                        CaseStudyStyles.caseStudyItem + " case-study-item"
                      }
                    >
                      <p className={CaseStudyStyles.callout + " callout"}>
                        88%
                      </p>
                      <p>Increase in New Patient Calls!</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lap-5 col-lg-5">
                  <Img
                    fluid={images.searchResultsPage.childImageSharp.fluid}
                    className={
                      CaseStudyStyles.imgResponsive +
                      " img-responsive blur-bleed"
                    }
                    alt="Local Business Search Results Page"
                  />
                </div>
              </div>
              <div
                className={
                  CaseStudyStyles.requestDemoFooter +
                  " row padded tall-top request-demo-footer"
                }
              >
                <div className="col-lg-1" />
                <div className="col-sm-11 col-md-6 offset-md-1 col-lg-5 offset-lg-0">
                  <div className="content-block">
                    <div
                      className={CaseStudyStyles.innerTitle + " inner-title"}
                    >
                      <h2>
                        Start your
                        <span className="font-weight-semibold"> success </span>
                        with Doctor Genius today!
                      </h2>
                      <div className="accented-paragraph">
                        <p className="s-thin">
                          The Genius platform makes every part of your company
                          process more efficient. Our support team is very
                          excited to help you and get your company on the right
                          path of success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-11 col-md-5 col-lg-5">
                  <div className="center">
                    <a href="/demo" className="button flat white-text">
                      Request Demo{" "}
                      <img src={thinArrowRight} alt="Arrow Right" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-1" />
              </div>
            </Container>
          </Main>
        </div>
      </div>
    </DefaultPageLayout>
  )
}

export default CaseStudy

export const ImageQuery = graphql`
  query CaseStudyImages {
    theSolutionsImage: file(
      relativePath: { eq: "new-patient-opportunity.png" }
    ) {
      childImageSharp {
        fixed(width: 653) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    theChallengeImage: file(relativePath: { eq: "dental-marketing.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    titanDentalLogo: file(
      relativePath: { eq: "digital-marketing-client.png" }
    ) {
      childImageSharp {
        fixed(width: 317) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    searchResultsPage: file(
      relativePath: { eq: "local-business-search-result.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroBg: file(relativePath: { eq: "case-study.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
