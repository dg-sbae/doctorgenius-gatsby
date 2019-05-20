import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import TestimonialsSlider from "../components/testimonials-slider"

import "../styles/company-page.scss"

const testimonialContent = [
  {
    cardContent: {
      title: "Card 1",
      author: "Jon Doe",
      quote:
        "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\
         Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus\
          mus. Donec quam felis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>",
      location: "Irvine Dental Care",
      image: {
        src: "",
        alt: "",
      },
    },
  },
  {
    cardContent: {
      title: "Card 2",
      author: "Jon Doe",
      quote:
        "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\
         Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus\
          mus. Donec quam felis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>",
      location: "Irvine Dental Care",
      image: {
        src: "",
        alt: "",
      },
    },
  },
  {
    cardContent: {
      title: "Card 3",
      author: "Jon Doe",
      quote:
        "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\
         Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus\
          mus. Donec quam felis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>",
      location: "Irvine Dental Care",
      image: {
        src: "",
        alt: "",
      },
    },
  },
]

export default props => (
  <DefaultPageLayout location={props["*"]}>
    <div className={props["*"]}>
      <div className="hero">
        {/* Hero will be a layout component */}

        <Container>
          <div className="valign-wrapper row">
            <div className="col-sm-12">
              <div className="hero-content">
                <div className="hero-content accent-block">
                  <h1>Doctor Genius</h1>
                  <h2>
                    <span>What </span>we are about
                  </h2>
                  <div className="accented-paragraph">
                    <p>
                      Doctor Genius establishes and boosts your brand online
                      using innovative digital marketing and search engine
                      optimization strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Main>
        <Container>
          <div className="row padded tall-top">
            <div className="col-sm-6">
              <div className="content-block">
                <div className="innerTitle">
                  <h2 className="font-weight-medium">
                    The{" "}
                    <span className="font-weight-semibold">Doctor Genius </span>
                    Story
                  </h2>
                </div>
                <div className="accented-paragraph">
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
            <div className="col-sm-6 center">
              <img src="/icon/logo-blue.svg" alt="Our Logo" />
            </div>
          </div>

          <div className="row padded panel-row">
            <div className="col-sm-12">
              <div className="inner-title center">
                <h2 className="underline font-weight-medium">
                  Doctor Genius
                  <span className="font-weight-semibold"> by the numbers</span>
                </h2>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="panel">
                <div className="icon-wrapper">
                  <img
                    className="img-icon"
                    src="/icon/web.svg"
                    alt="Icon of a Website"
                  />
                </div>
                <p className="panel-heading">1 million +</p>
                <p className="panel-body">
                  Words published to our clients’ website blogs and social
                  profiles
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="panel">
                <div className="icon-wrapper">
                  <img
                    className="img-icon"
                    src="/icon/search-engine.svg"
                    alt="Icon of a Search Engine Page"
                  />
                </div>
                <p className="panel-heading">1000+</p>
                <p className="panel-body">
                  Over 1000+ Dental Practices use Doctor Genius Web & SEO
                  services
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="panel">
                <div className="icon-wrapper">
                  <img
                    className="img-icon"
                    src="/icon/doctors.svg"
                    alt="Icon of a Group of Doctors"
                  />
                </div>
                <p className="panel-heading">30 +</p>
                <p className="panel-body">
                  In-House Support, Development, and Writers work for Doctor
                  Genius
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="panel">
                <div className="icon-wrapper">
                  <img
                    className="img-icon"
                    src="/icon/stars.svg"
                    alt="Icon of Stars"
                  />
                </div>
                <p className="panel-heading">4.9 Stars</p>
                <p className="panel-body">
                  We take pride in our google reviews. Read our{" "}
                  <a
                    href="https://www.google.com/search?q=doctorgenius&rlz=1C1GCEA_enUS780US780&oq=doctorgenius&aqs=chrome..69i57j69i60l3.1719j0j1&sourceid=chrome&ie=UTF-8#lrd=0x80dcde9f23745717:0x9660a06c68c4bd1,1,,,"
                    target="_blank"
                  >
                    google reviews.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row padded">
            <div className="col-sm-6">
              <img src="/png/search-result.png" alt="Search Results Page" />
            </div>
            <div className="col-sm-6">
              <div className="callout">
                <div className="inner-title center">
                  <h2 className="underline short font-weight-normal">
                    Our
                    <span className="font-weight-semibold">
                      {" "}
                      Clients Average
                    </span>
                  </h2>
                  <div className="callout-heading">
                    <sup>
                      Up
                      <br />
                      To
                    </sup>
                    <p>600%</p>
                  </div>
                  <p className="text-accent">New Patient Inquiries</p>
                  <p className="text-mute sub-text-accent">
                    12 Months Duration
                  </p>
                  <div className="callout-link">
                    <a
                      href="/our-clients/"
                      className="link-with-icon font-weight-semibold"
                    >
                      <img
                        src="/icon/right-arrow-blue.svg"
                        className="link-icon"
                        alt="Icon of a Right Arrow"
                      />
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    <TestimonialsSlider cards={testimonialContent} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row padded tall-top request-demo-footer">
            <div className="col-sm-6">
              <div className="content-block">
                <div className="innerTitle">
                  <h2 className="font-weight-normal">
                    Let's{" "}
                    <span className="font-weight-semibold">
                      Talk Partnership
                    </span>
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
                    <a
                      href="/demo/"
                      className="link-with-icon font-weight-semibold"
                    >
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
