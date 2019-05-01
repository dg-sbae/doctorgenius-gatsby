import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import "../styles/our-clients.scss"
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
              <div className="hero-content accent-block">
                <h1>Dentistry Practices</h1>
                <h2>Engage and Convert More Patients to Your Practice</h2>
                <div className="accented-paragraph">
                  <p>
                    Doctor Genius provides digital marketing solutions by
                    leveraging content, mobile-first web design, SEO, online
                    directories, and social media to drive new patients to your
                    private practice
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
                <div className="panel active">
                  <div className="icon-wrapper">
                    <a href="/our-clients/dental-practices/">
                      <img
                        className="img-icon"
                        src="/icon/tooth-shine-nav.svg"
                        alt="Tooth"
                      />
                    </a>
                  </div>
                  <p>Dental Practices</p>
                </div>
                <div className="panel">
                  <div className="icon-wrapper">
                    <a href="/our-clients/urgent-care-clinics/">
                      <img
                        className="img-icon"
                        src="/icon/urgent-care-nav.svg"
                        alt="First Aid"
                      />
                    </a>
                  </div>
                  <p>Urgent Care Clinics</p>
                </div>
                <div className="panel">
                  <div className="icon-wrapper">
                    <a href="/our-clients/chiropractor-practices/">
                      <img
                        className="img-icon"
                        src="/icon/chiropractor-nav.svg"
                        alt="Spine"
                      />
                    </a>
                  </div>
                  <p>Chiropractor Practices</p>
                </div>
                <div className="panel">
                  <div className="icon-wrapper">
                    <a href="/our-clients/cosmetic-surgeons/">
                      <img
                        className="img-icon"
                        src="/icon/surgeon-nav.svg"
                        alt="Surgeon"
                      />
                    </a>
                  </div>
                  <p>Cosmetic Surgeons</p>
                </div>
                <div className="panel">
                  <div className="icon-wrapper">
                    <a href="/our-clients/healthcare-marketing/">
                      <img
                        className="img-icon"
                        src="/icon/sphygmomanometer-nav.svg"
                        alt="Sphygomomanometer"
                      />
                    </a>
                  </div>
                  <p>Healthcare Marketing</p>
                </div>
              </div>
            </div>
          </div>
          {/* End Secondary Nav Component */}
          <div className="row padded">
            <div className="col-sm-9 offset-sm-1">
              <div className="content-block">
                <div className="inner-title center">
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
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
            <div className="col-sm-5">
              <img
                className="img-responsive blur-bleed"
                src="/png/search-result.png"
                alt="Search Results Page"
              />
            </div>
          </div>
          {/* Begin Full bleed content row */}
          <div className="full-bleed-wrapper pad-md">
            <div className="full-bleed check-plans-background-image" />
            <div className="full-bleed-content-wrapper">
              <div className="row">
                <div className="col-sm-5 offset-sm-7">
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
          {/* End Full bleed content row */}

          <div className="row padded tall-bottom">
            <div className="col-sm-12">
              <div className="inner-title center">
                <h3 className="strapline">Testimonials</h3>
                <h2 className="underline">
                  What <b>Clients Are Saying</b>
                </h2>
              </div>
            </div>

            <div className="full-bleed">
              <div className="card-slider">
                <div className="card">
                  <i className="fa fa-quote">"</i>
                  <div className="card-content-wrapper">
                    <p className="card-copy">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis.Lorem ipsum dolor
                      sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className="card-author">John Doe</p>
                    <p className="card-location">Irvine Dental Care</p>
                  </div>
                  <img
                    className="img-responsive"
                    src="/png/testimonials-slider-profile-1.png"
                    alt="A Doctor"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row padded tall-top request-demo-footer">
            <div className="col-sm-6">
              <div className="content-block">
                <div className="innerTitle">
                  <h2>
                    Let's <b>Talk Partnership</b>
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
                    <a href="/contact/" className="link-with-icon">
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
