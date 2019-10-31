import React from "react"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import TestimonialsSlider from "../components/testimonials-slider"
import MobileSecondaryNav from "../components/MobileSecondaryNav"
import InnerTitle from "../components/inner-title.js"

import dentalPractices from "../img/icon/tooth-shine-nav.svg"
import urgentCare from "../img/icon/urgent-care-nav.svg"
import chiropractorPractices from "../img/icon/chiropractor-nav.svg"
import cosmeticSurgeons from "../img/icon/surgeon-nav.svg"
import healthcareMarketing from "../img/icon/sphygmomanometer-nav.svg"

import rightArrowBlue from "../img/icon/right-arrow-blue.svg"

import "../styles/our-clients-inner-pages.scss"
import PageStyles from "./our-clients-inner-pages.module.scss"
import RowStyles from "../components/Row.module.scss"

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
    backgroundPosition: "40%",
  }

  return (
    <div
      className={PageStyles.ourClientsInnerPage + " " + RowStyles.rowStyling}
    >
      <DefaultPageLayout>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
        <div className={"our-clients-inner " + currentPage}>
          <BackgroundImage fluid={backgroundImage}>
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
                      <h1>{pageTitle}</h1>
                      <h2 dangerouslySetInnerHTML={{ __html: pageSubtitle }} />
                      <div
                        className={
                          PageStyles.accentedParagraph + " accented-paragraph"
                        }
                      >
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
              <div className={RowStyles.row}>
                <div className="col-sm-12">
                  <div className="secondary-nav-target">
                    <div className="secondary-nav">
                      <div
                        className={
                          (currentPage === "dental-practices"
                            ? "active "
                            : "") +
                          PageStyles.panel +
                          " panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/our-clients/dental-practices">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
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
                            : "") +
                          PageStyles.panel +
                          " panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/our-clients/urgent-care-clinics">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
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
                            : "") +
                          PageStyles.panel +
                          " panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/our-clients/chiropractor-practices">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
                              src={chiropractorPractices}
                              alt="Chiropractor Practices"
                            />
                          </a>
                        </div>
                        <p>Chiropractor Practices</p>
                      </div>
                      <div
                        className={
                          (currentPage === "cosmetic-surgeons"
                            ? "active "
                            : "") +
                          PageStyles.panel +
                          " panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/our-clients/cosmetic-surgeons">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
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
                            : "") +
                          PageStyles.panel +
                          " panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/our-clients/healthcare-marketing">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
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
              <MobileSecondaryNav
                parentPage="ourClients"
                titleItem={pageTitle}
              />
              {/* End mobile secondary navigation component */}
              {/* Begin main block of text */}
              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-12 col-md-10 col-lg-10">
                  <div className={PageStyles.contentBlock + " content-block"}>
                    <div
                      className={
                        PageStyles.thinHeading +
                        " " +
                        PageStyles.innerTitle +
                        " " +
                        PageStyles.centered
                      }
                    >
                      <h3 className={PageStyles.strapline}>
                        {contentParagraphBlock.heading.strapline}
                      </h3>
                      <h2
                        className={PageStyles.underline}
                        dangerouslySetInnerHTML={{
                          __html: contentParagraphBlock.heading.title,
                        }}
                      />
                    </div>
                    <div
                      className={
                        PageStyles.accentedParagraph + " accented-paragraph"
                      }
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
                <div
                  className={
                    RowStyles.row +
                    " " +
                    RowStyles.padded +
                    " " +
                    RowStyles.shortTop
                  }
                >
                  <div
                    className={
                      PageStyles.caseStudyContainer +
                      " col-sm-12 col-md-7 col-lg-7 order-sm-2 order-md-1 case-study-container"
                    }
                  >
                    <InnerTitle
                      title="Case Study: Titan Dental"
                      inContentBlock
                      subtitle="The first 6 months"
                      centered
                      id={PageStyles.caseStudyHeader}
                    />
                    <div
                      className={
                        PageStyles.caseStudyTable + " case-study-table"
                      }
                    >
                      <div
                        className={
                          PageStyles.caseStudyItem + " case-study-item"
                        }
                      >
                        <p className={PageStyles.callout + " callout"}>
                          1,125%
                        </p>
                        <p>Increase in Google First-Page Revenue</p>
                      </div>
                      <div
                        className={
                          PageStyles.caseStudyItem + " case-study-item"
                        }
                      >
                        <p className={PageStyles.callout + " callout"}>100%</p>
                        <p>Increase in Revenue</p>
                      </div>
                      <div
                        className={
                          PageStyles.caseStudyItem + " case-study-item"
                        }
                      >
                        <p className={PageStyles.callout + " callout"}>60%</p>
                        <p>Growth in organic Search Traffic</p>
                      </div>
                      <div
                        className={
                          PageStyles.caseStudyItem + " case-study-item"
                        }
                      >
                        <p className={PageStyles.callout + " callout"}>500%</p>
                        <p>Growth in Reviews Across the Web</p>
                      </div>
                      <div
                        className={
                          PageStyles.caseStudyItem + " case-study-item"
                        }
                      >
                        <p className={PageStyles.callout + " callout"}>200%</p>
                        <p>New Patient Appointments</p>
                      </div>
                      <div
                        className={
                          PageStyles.caseStudyItem + " case-study-item"
                        }
                      >
                        <p className={PageStyles.callout + " callout"}>88%</p>
                        <p>Increase in New Patient Calls!</p>
                      </div>
                    </div>
                    <div className={PageStyles.padMd + " center pad-md"}>
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
                  <div
                    className={
                      PageStyles.imgCol +
                      " col-sm-12 col-md-5 col-lg-5 order-md-2 order-sm-1 img-col"
                    }
                  >
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
              <div className={PageStyles.padMd + " full-bleed-wrapper pad-md"}>
                <div
                  className={
                    PageStyles.checkPlansBackgroundImage +
                    " full-bleed check-plans-background-image"
                  }
                  style={fullBleedBgStyle}
                />
                <div className="full-bleed-content-wrapper">
                  <div className={RowStyles.row}>
                    <div className="col-sm-4 col-md-6 col-lg-7" />
                    <div className="col-sm-8 col-md-6 col-lg-5">
                      <div
                        className={PageStyles.contentBlock + " content-block"}
                      >
                        <InnerTitle
                          title="Check which plan works for your practice"
                          inContentBlock
                        />
                        <div
                          className={
                            PageStyles.accentedParagraph +
                            " accented-paragraph medium-width"
                          }
                        >
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
              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-12">
                  <InnerTitle
                    title="What"
                    boldText=" Clients Are Saying"
                    strapline="Testimonials"
                    underlined
                    centered
                  />
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
    </div>
  )
}
