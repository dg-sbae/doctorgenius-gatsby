import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import "bootstrap/dist/css/bootstrap.css"
import "../styles/company-page.scss"
import "../styles/global-styles.scss"

export default props => (
  <DefaultPageLayout>
    <div className={props["*"]}>
      <div className="hero">
        {/* Hero will be a layout component */}
        <Container>
          <div className="valign-wrapper row">
            <div className="col-sm-5">
              <div className="accent-block">
                <h1>Company</h1>
                <h2>What We Are About</h2>
                <div className="accentedParagraph">
                  <p>
                    DoctorGenius establishes and boosts your brand online using
                    innovative digital marketing and search engine optimization
                    strategies.
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
            <div className="col-sm-6">
              <div className="content-block">
                <div className="innerTitle">
                  <h2>
                    The <b>Doctor Genius</b> Story
                  </h2>
                </div>
                <div className="accentedParagraph">
                  <p>
                    We are based in Irvine, California, USA. Dental Genius has
                    consistent 5 Star Ratings on Google+, and A Rated with the
                    BBB. We employ and all-star development, support, and sales
                    team to provide high level online marketing solutions to
                    medical & health practices within the United States.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-center">
              <img className="logo" src="/logo.png" alt="Our Logo" />
            </div>
          </div>
          <div className="row d-flex align-items-center row-medium">
            <div class="col-sm-12">
              <div class="inner-title underlined">
                Doctor Genius <b>by the numbers</b>
              </div>
            </div>
            <div class="col-sm-3 align-self-start">
              <div class="panel d-flex flex-sm-column align-items-center justify-content-start">
                <div class="icon-wrapper">
                  <img class="img-icon" src="/icon-web.png" />
                </div>
                <p class="panel-heading">1 million +</p>
                <p>
                  Words published to our clients’ website blogs and social
                  profiles
                </p>
              </div>
            </div>
            <div class="col-sm-3 align-self-start">
              <div class="panel d-flex flex-sm-column align-items-center justify-content-start">
                <div className="icon-wrapper">
                  <img class="img-icon" src="/icon-search-engine.png" />
                </div>
                <p class="panel-heading">500+</p>
                <p>
                  Over 1000+ Dental Practices use Doctor Genius Web & SEO
                  services
                </p>
              </div>
            </div>
            <div class="col-sm-3 align-self-start">
              <div class="panel d-flex flex-sm-column align-items-center justify-content-start">
                <div className="icon-wrapper">
                  <img class="img-icon" src="/icon-doctors.png" />
                </div>
                <p class="panel-heading">30 +</p>
                <p>
                  In-House Support, Development, and Writers work for Doctor
                  Genius
                </p>
              </div>
            </div>
            <div class="col-sm-3 align-self-start">
              <div class="panel d-flex flex-sm-column align-items-center justify-content-start">
                <div className="icon-wrapper">
                  <img class="img-icon" src="/icon-stars.png" />
                </div>
                <p class="panel-heading">4.9 Stars</p>
                <p>
                  We take pride in our google reviews. Read our google reviews.{" "}
                  <a href="#">(click here)</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row row-tall d-flex align-items-center">
            <div className="col-sm-6 d-flex flex-sm-column align-items-center">
              <img src="/search-result.png" />
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
                    <a href="#">
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
                    src="/testimonials-slider-profile-1.png"
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
                  <div className="acented-paragraph">
                    <p>
                      We are based in Irvine, California, USA. Dental Genius has
                      consistent 5 Star Ratings on Google+, and A Rated with the
                      BBB. We employ and all-star development, support, and
                      sales team to provide high level online marketing
                      solutions to medical & health practices within the United
                      States.
                    </p>
                    <a href="#" className="link-with-icon">
                      <i className="fa fa-arrow-left" />
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <img
                className="img-responsive"
                src="/computer-and-mobile-detail.png"
              />
            </div>
          </div>
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)
