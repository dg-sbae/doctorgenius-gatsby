import React from "react"
import { Helmet } from "react-helmet"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Container from "../components/Container"
import ContactForm from "../components/contact-form.js"

import "../styles/contact.scss"

export default props => (
  <DefaultPageLayout location={props["*"]}>
    <Helmet>
      <title>
        Contact the Doctor Genius Team in Lake Forest, California | Doctor
        Genius
      </title>
      <meta
        name="description"
        content="Need help? Have questions? The live support team at Doctor Genius is here to help. Give us a call, send us an email, connect on social media, or get our address."
      />
    </Helmet>
    <div className={props["*"]}>
      <div className="main-content">
        <div className="hero">
          {/* Hero will be a layout component */}
          <Container>
            <div className="row padded panel-row title-and-desc">
              <div className="col-sm-12">
                <div className="header inner-title center">
                  <h1>Contact Us</h1>
                  <h3 className="strapline">Have a question? Need help?</h3>
                  <p className="muted-text">
                    Fill the form below to get directly in contact with our
                    support staff.
                  </p>
                </div>
              </div>

              <div className="row panel-row contact-form">
                <ContactForm />
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
                  2 S Pointe Dr #200 <br />
                  Lake Forest, CA 92630
                </p>
                <button className="mt-4 button nav-button transparent get-directions">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/Doctor+Genius/@33.6597509,-117.7001599,15.96z/data=!4m5!3m4!1s0x0:0x9660a06c68c4bd1!8m2!3d33.6595484!4d-117.6983904"
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
    </div>
  </DefaultPageLayout>
)
