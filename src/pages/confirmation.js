import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Container from "../components/Container"
import Main from "../components/main-content"

import "../styles/confirmation.scss"
import PageStyles from "./confirmation.module.scss"

export default props => (
  <div className={PageStyles.confirmationPage}>
    <DefaultPageLayout location={props["*"]}>
      <Helmet>
        <title>Thank you for Contacting Doctor Genius | Doctor Genius</title>
      </Helmet>
      <Main>
        <div className={props["*"]}>
          <div className="hero">
            {/* Hero will be a layout component */}
            <Container>
              <div className="row panel-row title-and-desc">
                <div className="col-sm-12">
                  <div className="header inner-title center">
                    <h1>
                      Thank you for <br className="line-break-header" /> your
                      submission!
                    </h1>
                    <p className="muted-text">
                      You’ll receive an email confirmation shortly. In the
                      meantime, feel free to check out
                      <br className="line-break-desc" />
                      our new blog,{" "}
                      <span className="strapline">
                        <Link to="/the-study/">The Study</Link>
                      </span>
                      , to find out about our latest services and technology.
                    </p>
                    <div className="row">
                      <div className="col-sm-8 col-md-4">
                        <button className="button nav-button return-home">
                          <Link to="/">Return Home</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <Container>
              <div className="row panel-row info-and-map">
                <div className="col-sm-12 col-md-12 col-lap-4 company-info valign-wrapper">
                  <p className="phone-number">
                    <a href="tel:877-477-2311">(877) 477-2311</a>
                  </p>
                  <p className="mt-4 contact-address">
                    2121 Alton Pkwy, Suite 150 <br />
                    Irvine, CA 92606
                  </p>
                  <button className="mt-4 button nav-button transparent get-directions">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.google.com/maps/dir//Doctor+Genius,+2121+Alton+Pkwy+%23150,+Irvine,+CA+92606/@33.6944898,-117.8412595,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcde9f23745717:0x9660a06c68c4bd1!2m2!1d-117.839795!2d33.69453!3e0"
                    >
                      Get Directions
                    </a>
                  </button>
                  <p className="mt-4 mb-4 contact-hours">
                    Monday to Friday <br />8 AM to 5 PM PST
                  </p>
                </div>
                <div className="col-sm-12 col-md-12 col-lap-7 map-holder">
                  <iframe
                    className="dg-map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37557.65712271714!2d-117.83748222010603!3d33.69188625008202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9660a06c68c4bd1!2sDoctor+Genius!5e0!3m2!1sen!2sus!4v1563921417170!5m2!1sen!2sus"
                    allowFullScreen
                    height="340"
                    width="475"
                    title="Map to Doctor Genius"
                  ></iframe>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Main>
    </DefaultPageLayout>
  </div>
)
