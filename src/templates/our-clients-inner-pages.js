import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import TestimonialsSlider from "../components/testimonials-slider"

import dentalPractices from "../../public/icon/tooth-shine-nav.svg"
import urgentCare from "../../public/icon/urgent-care-nav.svg"
import chiropractorPractices from "../../public/icon/chiropractor-nav.svg"
import cosmeticSurgeons from "../../public/icon/surgeon-nav.svg"
import healthcareMarketing from "../../public/icon/sphygmomanometer-nav.svg"

import "../styles/our-clients-inner-pages.scss"

export default props => {
  /* These will likely need to be dynamic props */
  const pageTitle = props.pageTitle
  const pageSubtitle = props.pageSubTitle
  const pageIntro = props.pageIntro

  // For now all inner pages will have the same hero image, so this will be in the sass
  //const heroImage = "/hero/marketing-solutions-subpage.png"

  const contentRows = props.contentRows
  const currentPage = props.page

  return (
    <DefaultPageLayout>
      <div className={props["*"] + " our-clients-inner"}>
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
        <Main>
          <Container>
            {/* Begin secondary nav Component: */}
            <div className="row">
              <div className="col-sm-12 panel-row">
                <div className="secondary-nav-target">
                  <div className="secondary-nav">
                    <div
                      className={
                        (currentPage === "/our-clients/dental-practices/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/our-clients/dental-practices/">
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
                        (currentPage === "/our-clients/urgent-care-clinics/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/our-clients/urgent-care-clinics/">
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
                        (currentPage === "/our-clients/chiropractor-practices/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/our-clients/chiropractor-practices/">
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
                        (currentPage === "/our-clients/cosmetic-surgeons/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/our-clients/cosmetic-surgeons/">
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
                        (currentPage === "/our-clients/healthcare-marketing/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/our-clients/healthcare-marketing/">
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
            {/* Begin main block of text */}
            <div className="row padded">
              <div className="col-sm-9 offset-sm-1">
                <div className="content-block">
                  <div className="inner-title center thin-heading">
                    <h3 className="strapline">Marketing Performance</h3>
                    <h2 className="underline">
                      <b>Rank Higher</b>, <b>Gain New Patients</b>, Get Better
                      <b> Visibility Online</b>
                    </h2>
                  </div>
                  <div className="accented-paragraph">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End main block of text */}
            {/* Begin split page content */}
            <div className="spacer solid trim" />
            <div className="row padded short-top">
              <div className="col-sm-7 case-study-container">
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
                  <a href="/case-study/" className="link-with-icon">
                    <img
                      src="/icon/right-arrow-blue.svg"
                      className="link-icon"
                      alt="Icon of a Right Arrow"
                    />
                    View Case Study
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-5">
                <img
                  className="img-responsive blur-bleed"
                  src="/png/search-result.png"
                  alt="Search Results Page"
                />
              </div>
            </div>
            {/* End split page content */}
            {/* Begin CTA banner */}
            <div className="full-bleed-wrapper pad-md">
              <div className="full-bleed check-plans-background-image" />
              <div className="full-bleed-content-wrapper">
                <div className="row">
                  <div className="col-sm-7" />
                  <div className="col-sm-6 col-lg-5">
                    <div className="content-block">
                      <div className="inner-title">
                        <h2>Check which plan works for your practice</h2>
                      </div>
                      <div className="accented-paragraph medium-width">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc dui turpis, sodales ut mollis quis,
                          ullamcorper a metus
                        </p>
                        <a href="/plans/" className="link-with-icon">
                          <img
                            src="/icon/right-arrow-blue.svg"
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
            <div className="row padded tall-bottom">
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
                      <TestimonialsSlider />
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
