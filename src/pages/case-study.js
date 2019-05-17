import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import "../styles/case-study.scss"

import thinArrowRight from "../img/right-arrow.svg"
import theSolutionsImage from "../img/the-solutions-tablet-and-search.png"
import theChallengeImage from "../img/the-challenge-placeholder.png"
import ramiTahhanImage from "../img/rami-tahhan.png"

export default props => (
  <DefaultPageLayout location={props["*"]}>
    <div>
      <div className="hero">
        {/* Hero will be a layout component */}

        <Container>
          <div className="valign-wrapper row">
            <div className="col-sm-12">
              <div className="hero-content">
                <div className="hero-content accent-block">
                  <h1>Resources</h1>
                  <h2>
                    <span>Case </span>
                    Study
                  </h2>
                  <div className="accented-paragraph">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas commodo eu metus ut convallis.
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
          <div className="row padded panel-row">
            <div className="col-sm-12">
              <div className="header inner-title center">
                <h2 className="underline">The Client</h2>
              </div>
            </div>
          </div>
          <div className="row padded short-top">
            <div className="col-sm-6 logo-block">
              <img
                className="img-responsive"
                src="/icon/titan-dental-care-logo.svg"
                alt="Titan Dental Care logo"
              />
              <img
                className="img-responsive"
                src={ramiTahhanImage}
                alt="Rami Tahhan"
              />
            </div>
            <div className="col-sm-6">
              <div className="">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas a placerat nunc, et venenatis felis. Sed in nunc
                  suscipit, sodales lectus eget, pretium erat. Donec semper
                  hendrerit mattis. ndisse erat magna, pharetra nec varius at,
                  accumsan a ligula. Aenean aliquet convallis velit.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas a placerat nunc, et venenatis felis. Sed in nunc
                  suscipit, sodales lectus eget, pretium erat. Donec semper
                  hendrerit mattis. ndisse erat magna, pharetra nec varius at,
                  accumsan a ligula. Aenean aliquet convallis velit.
                </p>
              </div>
              <div className="client-quote-block">
                <p className="client-quote">
                  "Over the past 12 months, the office has doubled in revenue
                  due to proper marketing methods!"
                </p>
                <p className="client-author">- Rami Tahhan, D.D.S.</p>
              </div>
            </div>
          </div>
          <div className="row padded panel-row">
            <div className="col-sm-12">
              <div className="header inner-title center">
                <h2 className="underline">The Challenge</h2>
              </div>
            </div>
          </div>
          <div className="row padded short-top">
            <div className="col-sm-6">
              <div className="">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas a placerat nunc, et venenatis felis. Sed in nunc
                  suscipit, sodales lectus eget, pretium erat. Donec semper
                  hendrerit mattis. ndisse erat magna, pharetra nec varius at,
                  accumsan a ligula. Aenean aliquet convallis velit.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas a placerat nunc, et venenatis felis. Sed in nunc
                  suscipit, sodales lectus eget, pretium erat. Donec semper
                  hendrerit mattis. ndisse erat magna, pharetra nec varius at,
                  accumsan a ligula. Aenean aliquet convallis velit.
                </p>
              </div>
              <div className="client-quote-block">
                <p className="client-quote s-thin">
                  "I can sleep well knowing marketing dollars are being well
                  spent."
                </p>
                <p className="client-author">- Rami Tahhan, D.D.S.</p>
              </div>
            </div>
            <div className="col-sm-6">
              <img
                src={theChallengeImage}
                alt="Doctor's waiting room placeholder"
              />
            </div>
          </div>

          <div className="row padded panel-row">
            <div className="col-sm-12">
              <div className="header inner-title center">
                <h2 className="underline">The Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row padded short-top">
            <div className="col-sm-7">
              <img
                className="img-responsive blur-bleed"
                src={theSolutionsImage}
                alt="Search Results Page"
              />
            </div>
            <div className="col-sm-6 col-lg-5 panel-quadrant">
              <div className="row">
                <div className="col-sm-6 panel-quad-item">
                  <img
                    className="img-responsive"
                    src="/icon/new-patient-opportunity.svg"
                    alt="Handshake icon"
                  />
                  <div className="">
                    <h4>New Patient Opportunity</h4>
                    <p>
                      The goal is to reach every patient wherever they are. In
                      the 6 months we were able to increased new quality patient
                      call volume with extending with our program.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 panel-quad-item">
                  <img
                    className="img-responsive"
                    src="/icon/marketing-solutions-suite.svg"
                    alt="Webpage icon"
                  />
                  <div className="">
                    <h4>Marketing Solutions Suite</h4>
                    <p>
                      Our exculsive all-in-one marketing solution keeps our
                      clients digital marketing ahead of there industry. We our
                      proud to have all our product inhouse for our clients
                      needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row padded">
                <div className="col-sm-6 panel-quad-item">
                  <img
                    className="img-responsive"
                    src="/icon/live-support-concierge.svg"
                    alt="People chat icon"
                  />
                  <div className="">
                    <h4>Live Support Concierge</h4>
                    <p>
                      Its our duty in making sure the client and his customers
                      are happy. We provide seamless support by taking the time
                      to understand our clients concerns in areas they need
                      help.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 panel-quad-item">
                  <img
                    className="img-responsive"
                    src="/icon/performance-driven-campaigns.svg"
                    alt="Newspaper icon"
                  />
                  <div className="">
                    <h4>Performance Driven Campaigns</h4>
                    <p>
                      We are driven to improve our clients marketing preformance
                      in all areas. Our technology has proven for the first 6
                      months we are guranteed our clients 200% new patients
                      inquire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row padded short-top">
            <div className="col-sm-12">
              <div className="header inner-title center">
                <h2 className="underline">The Results</h2>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="inner-title center">
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
            </div>
            <div className="col-sm-6 col-lg-5">
              <img
                className="img-responsive blur-bleed"
                src="/png/search-result.png"
                alt="Search Results Page"
              />
            </div>
          </div>
          <div className="row padded tall-top request-demo-footer">
            <div className="col-lg-1" />
            <div className="col-sm-6 col-lg-5">
              <div className="content-block">
                <div className="inner-title">
                  <h2>
                    Start your
                    <span className="font-weight-semibold"> success </span>
                    with Doctor Genius today!
                  </h2>
                  <div className="accented-paragraph">
                    <p className="s-thin">
                      The Genius platform makes every part of your company
                      process more efficient. Our support team is very excited
                      to help you and get your company on the right path of
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-5">
              <div className="center">
                <a href="/" className="button flat white-text">
                  Request Demo <img src={thinArrowRight} alt="Arrow Right" />
                </a>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)
