import React from "react"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import TestimonialsSlider from "../components/testimonials-slider"
import MobileSecondaryNav from "../components/MobileSecondaryNav"

import dentalPractices from "../img/icon/tooth-shine-nav.svg"
import urgentCare from "../img/icon/urgent-care-nav.svg"
import chiropractorPractices from "../img/icon/chiropractor-nav.svg"
import cosmeticSurgeons from "../img/icon/surgeon-nav.svg"
import healthcareMarketing from "../img/icon/sphygmomanometer-nav.svg"

import rightArrowBlue from "../img/icon/right-arrow-blue.svg"

import "../styles/our-clients-inner-pages.scss"

export default props => {
  /* These will likely need to be dynamic props */
  const pageTitle = props.pageTitle
  const pageSubtitle = props.pageSubTitle
  const pageIntro = props.pageIntro
  const isCaseStudy = props.caseStudy
  const caseStudyImage = props.caseStudyImage
  const metaTitle = props.metaTitle
  const metaDescription = props.metaDescription

  const contentRows = props.contentRows
  const contentParagraphBlock = contentRows["contentParagraphBlock"]
  const currentPage = props.page
  const backgroundImage = props.backgroundImage
  const fullBleedBackgroundImage = props.fullBleedBackgroundImage

  const fullBleedBgStyle = {
    background: "url(" + fullBleedBackgroundImage + ") no-repeat",
  }

  return (
    <DefaultPageLayout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <div className={"our-clients-inner " + currentPage}>
        <BackgroundImage fluid={backgroundImage}>
          <div className="hero">
            {/* Hero will be a layout component */}

            <Container>
              <div className="valign-wrapper row">
                <div className="col-sm-12">
                  <div className="hero-content accent-block">
                    <h1>{pageTitle}</h1>
                    <h2 dangerouslySetInnerHTML={{ __html: pageSubtitle }} />
                    <div className="accented-paragraph">
                      <p>{pageIntro}</p>
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
            <div className="row">
              <div className="col-sm-12 panel-row">
                <div className="secondary-nav-target">
                  <div className="secondary-nav">
                    <div
                      className={
                        (currentPage === "dental-practices" ? "active " : "") +
                        "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/our-clients/dental-practices">
                          <img
                            className="img-icon"
                            src={dentalPractices}
                            alt="Dental Practices"
                          />
                        </a>
                      </div>
                      <p>Dental Practices</p>
                    </div>
                    <div
                      className={
                        (currentPage === "urgent-care-clinics"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/our-clients/urgent-care-clinics">
                          <img
                            className="img-icon"
                            src={urgentCare}
                            alt="Urgent Care Clinics"
                          />
                        </a>
                      </div>
                      <p>Urgent Care Clinics</p>
                    </div>
                    <div
                      className={
                        (currentPage === "chiropractor-practices"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/our-clients/chiropractor-practices">
                          <img
                            className="img-icon"
                            src={chiropractorPractices}
                            alt="Chiropractor Practices"
                          />
                        </a>
                      </div>
                      <p>Chiropractor Practices</p>
                    </div>
                    <div
                      className={
                        (currentPage === "cosmetic-surgeons" ? "active " : "") +
                        "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/our-clients/cosmetic-surgeons">
                          <img
                            className="img-icon"
                            src={cosmeticSurgeons}
                            alt="Cosmetic Surgeons"
                          />
                        </a>
                      </div>
                      <p>Cosmetic Surgeons</p>
                    </div>
                    <div
                      className={
                        (currentPage === "healthcare-marketing"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/our-clients/healthcare-marketing">
                          <img
                            className="img-icon"
                            src={healthcareMarketing}
                            alt="Healthcare Marketing"
                          />
                        </a>
                      </div>
                      <p>Healthcare Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End secondary nav Component */}

            {/* Begin mobile secondary navigation component */}
            <MobileSecondaryNav parentPage="ourClients" titleItem={pageTitle} />
            {/* End mobile secondary navigation component */}
            {/* Begin main block of text */}
            <div className="row padded">
              <div className="col-sm-12 col-md-10 col-lg-10">
                <div className="content-block">
                  <div className="inner-title center thin-heading">
                    <h3 className="strapline">
                      {contentParagraphBlock.heading.strapline}
                    </h3>
                    <h2
                      className="underline"
                      dangerouslySetInnerHTML={{
                        __html: contentParagraphBlock.heading.title,
                      }}
                    />
                  </div>
                  <div
                    className="accented-paragraph"
                    dangerouslySetInnerHTML={{
                      __html: contentParagraphBlock.paragraphBlock,
                    }}
                  />
                </div>
              </div>
            </div>
            {/* End main block of text */}
            {/* Begin split page content - conditional render using short circuit */}
            {isCaseStudy && <div className="spacer solid trim" />}
            {isCaseStudy && (
              <div className="row padded short-top">
                <div className="col-sm-12 col-md-7 col-lg-7 order-sm-2 order-md-1 case-study-container">
                  <div className="inner-title center">
                    <h3 className="m-0">Case Study: Titan Dental</h3>
                    <div className="subtitle muted">The first 6 months</div>
                  </div>
                  <div className="case-study-table">
                    <div className="case-study-item">
                      <p className="callout">1,125%</p>
                      <p>Increase in Google First-Page Revenue</p>
                    </div>
                    <div className="case-study-item">
                      <p className="callout">100%</p>
                      <p>Increase in Revenue</p>
                    </div>
                    <div className="case-study-item">
                      <p className="callout">60%</p>
                      <p>Growth in organic Search Traffic</p>
                    </div>
                    <div className="case-study-item">
                      <p className="callout">500%</p>
                      <p>Growth in Reviews Across the Web</p>
                    </div>
                    <div className="case-study-item">
                      <p className="callout">200%</p>
                      <p>New Patient Appointments</p>
                    </div>
                    <div className="case-study-item">
                      <p className="callout">88%</p>
                      <p>Increase in New Patient Calls!</p>
                    </div>
                  </div>
                  <div className="center pad-md">
                    <a href="/case-study" className="link-with-icon">
                      <img
                        src={rightArrowBlue}
                        className="link-icon"
                        alt="Icon of a Right Arrow"
                      />
                      View Case Study
                    </a>
                  </div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 order-md-2 order-sm-1 img-col">
                  <Img
                    fluid={caseStudyImage}
                    className="img-responsive blur-bleed"
                    alt="Local Business Search Results Page"
                  />
                </div>
              </div>
            )}

            {/* End split page content */}
            {/* Begin CTA banner */}
            <div className="full-bleed-wrapper pad-md">
              <div
                className="full-bleed check-plans-background-image"
                style={fullBleedBgStyle}
              />
              <div className="full-bleed-content-wrapper">
                <div className="row">
                  <div className="col-sm-4 col-md-6 col-lg-7" />
                  <div className="col-sm-8 col-md-6 col-lg-5">
                    <div className="content-block">
                      <div className="inner-title">
                        <h2>Check which plan works for your practice</h2>
                      </div>
                      <div className="accented-paragraph medium-width">
                        <p>
                          Get access to all we have to offer: Genius Framework
                          Website, Strategic Content Writing, Search Engine
                          Optimization, Social Media Promotion, Integrated
                          Performance Reporting, Dedicated Support
                          Representative.
                        </p>
                        <a href="/plans" className="link-with-icon">
                          <img
                            src={rightArrowBlue}
                            className="link-icon"
                            alt="Icon of a Right Arrow"
                          />
                          See Our Plans
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End CTA banner */}
            {/* Begin testimonial slider */}
            <div className="row padded">
              <div className="col-sm-12">
                <div className="inner-title center">
                  <h3 className="strapline">Testimonials</h3>
                  <h2 className="underline font-weight-normal">
                    What&nbsp;
                    <span className="font-weight-semibold">
                      Clients Are Saying
                    </span>
                  </h2>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="full-bleed-wrapper">
                  <div className="full-bleed">
                    <div className="full-bleed-slider">
                      <TestimonialsSlider
                        cards={contentRows.testimonialContent}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End testimonial slider */}
          </Container>
        </Main>
      </div>
    </DefaultPageLayout>
  )
}
