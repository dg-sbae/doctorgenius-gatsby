import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import "bootstrap/dist/css/bootstrap.css"
import "../styles/our-clients-page.scss"
import "../styles/global-styles.scss"

export default props => (
  <DefaultPageLayout>
    <div className={props["*"]}>
      <div className="hero">
        {/* Hero will be a layout component */}
        {/* @todo: Heros need a thin grey border underneath, not included in pic */}
        <Container>
          <div className="valign-wrapper row">
            <div className="col-sm-5">
              <div className="accent-block">
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
          <div className="row d-flex align-items-center row-medium">
            <div className="col-sm-8 offset-sm-2">
              <div className="content-block">
                <div className="inner-title centered">
                  <div class="strapline">Marketing Performance</div>
                  <h2 className="underline">
                    <b>Rank Higher</b>, <b>Gain New Patients</b>, Get Better{" "}
                    <b>Visibility Online</b>
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
          <div className="row d-flex align-items-center row-medium">
            <div class="col-sm-7">
              <div class="inner-title">
                <h3 className="m-0">Case Study: Titan Dental</h3>
                <div className="subtitle muted">The first 6 months</div>
              </div>
              <div class="case-study-table">
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
            </div>
            <div class="col-sm-5">
              <img
                className="img-responsive"
                src="/png/search-result.png"
                alt="Search Results Page"
              />
            </div>
          </div>
          <div className="row row-tall d-flex align-items-center">
            <div className="col-sm-6 d-flex flex-sm-column align-items-center">
              <img src="/png/search-result.png" alt="Search Results Page" />
            </div>
            <div className="col-sm-6 d-flex flex-sm-column align-items-center">
              <div className="callout">
                <div className="inner-title underline">
                  <h2>
                    Our <b>Clients Average</b>
                  </h2>
                  <div class="callout-heading">
                    <sup>
                      Up
                      <br />
                      To
                    </sup>
                    <p>600%</p>
                  </div>
                  <p className="text-accent">New Patient Inuiries</p>
                  <p class="text-mute">12 Months Duration</p>
                  <div class="callout-link">
                    <a href="$#">
                      <i className="fa fa-arrow-right" />
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-tall">
            <div className="col-sm-12 d-flex justify-content-center">
              <div className="inner-title">
                <div className="strapline">Testimonials</div>
                <h2 class="underline">
                  What <b>Clients Are Saying</b>
                </h2>
              </div>
            </div>

            <div className="full-bleed">
              <div className="card-slider">
                <div class="card">
                  <i className="fa fa-quote">"</i>
                  <div className="card-content-wrapper">
                    <p className="card-copy">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis.Lorem ipsum dolor
                      sit amet, consectetuer adipiscing elit.{" "}
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
          <div className="row d-flex align-items-center">
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
                    <a href="$#" className="link-with-icon">
                      <img
                        src="/icon/right-arrow-blue.svg"
                        class="link-icon"
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