import React from "react"
import { Helmet } from "react-helmet"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import TestimonialsSlider from "../components/testimonials-slider"
import TestimonialImage1 from "../img/doctor-genius-testimonial.png"
import searchResultsPage from "../img/local-business-search-result.png"
import digitalMarketingPartnerShip from "../img/digital-marketing-partnership.png"

import "../styles/company-page.scss"

const testimonialContent = [
  {
    cardContent: {
      title: "Card 1",
      author: "Justine Schepis",
      quote:
        "<p>I started using Doctor Genius to improve my Google presence and increase my monthly number of new patients. They told me it would take 3-4 months to see results. It’s been about 2 now that my Google presence has been cleaned up and my website is up and running and I am starting to see people come in the door who found us solely on Google.</p>",
      location: "",
      image: TestimonialImage1,
      /*imageFallback: {
        content: "JS",
      },*/
    },
  },
  {
    cardContent: {
      title: "Card 2",
      author: "Amberly Money",
      quote:
        "<p>Our practice has worked with Doctor Genius for a few years now. Francesco and team have gone above and beyond to make sure that we are always top on the list for “Dentist” in our area. We started as a brand new practice in 2009 and now have a full clientele of patients with our first available hygiene appointment for six months out. Our biggest referrals are online. Thank you Francesco and Doctor Genius for your hard work and many years of working together!</p>",
      location: "",
      imageFallback: {
        content: "AM",
      },
    },
  },
  {
    cardContent: {
      title: "Card 3",
      author: "Baylee Michaels",
      quote:
        "<p>Until working with this company, you would have never heard me say that I enjoyed speaking with a customer service rep. Without fail every person I have spoken with on this team has been so kind to me. I spoke with a lady by the name of Victoria Tegeler the other day and she was so patient with me as she answered all of my questions and concerns. With this company I have never been in the dark. They send me weekly updates as well as have a portal for me to track everything that they do to see how well their services are working for us. I'd give them a 7 star rating if I could!</p>",
      location: "",
      imageFallback: {
        content: "BM",
      },
    },
  },
  {
    cardContent: {
      title: "Card 4",
      author: "Amir Saz",
      quote:
        "<p>We signed up with DG at the Anaheim Dental Convention. I had worked with 2 other companies previously and in my opinion did not get honest work or any decent results. We were a new office in the area on page 26 or 27 of Google and had moved up some but still invisible. But now we are more visible in a very competitive area in the country and starting to get some calls. I am quite happy so far. I have been working with Shawn and Kylie , two knowledgeable and fine individuals to work with. Thank you guys.</p>",
      location: "",
      imageFallback: {
        content: "AS",
      },
    },
  },
]

export default props => (
  <DefaultPageLayout location="company">
    <Helmet>
      <title>Irvine, CA Digital Marketing Agency | About Doctor Genius</title>
      <meta
        name="description"
        content="Doctor Genius is an Irvine, California based digital marketing agency providing local businesses with branding, websites, content marketing, and social media marketing service."
      />
    </Helmet>
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
            <div className="col-sm-10 offset-sm-1 offset-md-0 col-md-6">
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
                    We are based in Irvine, California, USA. Doctor Genius has
                    consistent 5 Star Ratings on Google+, and A Rated with the
                    BBB. We employ and all-star development, support, and sales
                    team to provide high level online marketing solutions to
                    medical & health practices within the United States.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 center logo">
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
            <div className="col-sm-6 col-md-3">
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
            <div className="col-sm-6 col-md-3">
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
            <div className="col-sm-6 col-md-3">
              <div className="panel">
                <div className="icon-wrapper">
                  <img
                    className="img-icon"
                    src="/icon/doctors.svg"
                    alt="Icon of a Group of Doctors"
                  />
                </div>
                <p className="panel-heading">70 +</p>
                <p className="panel-body">
                  In-House Support, Development, and Writers work for Doctor
                  Genius
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
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
                    rel="noopener noreferrer"
                  >
                    google reviews.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row padded p-sm-0">
            <div className="col-sm-12 col-md-6">
              <img
                src={searchResultsPage}
                className="img-responsive"
                alt="Local Business Search Results Page"
              />
            </div>
            <div className="col-sm-12 col-md-6">
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
                      href="/our-clients"
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
            <div className="col-sm-10 offset-sm-1  offset-md-0 col-md-6 order-sm-2 order-md-1">
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
                      We are based in Irvine, California, USA. Doctor Genius has
                      consistent 5 Star Ratings on Google+, and A Rated with the
                      BBB. We employ and all-star development, support, and
                      sales team to provide high level online marketing
                      solutions to medical & health practices within the United
                      States.
                    </p>
                    <a
                      href="/demo"
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
            <div className="col-sm-10 offset-sm-1 offset-md-0 col-md-6 order-sm-1 order-md-2">
              <img
                className="img-responsive"
                src={digitalMarketingPartnerShip}
                alt="Digital Marketing Partnership"
              />
            </div>
          </div>
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)
