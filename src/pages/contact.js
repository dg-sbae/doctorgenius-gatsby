import React from "react"
import { Helmet } from "react-helmet"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Container from "../components/Container"
import ContactForm from "../components/contact-form.js"

import "../styles/contact.scss"
import PageStyles from "./contact.module.scss"
import RowStyles from "../components/Row.module.scss"

export default props => (
  <div className={PageStyles.contactPage + " " + RowStyles.rowStyling}>
    <DefaultPageLayout location={props["*"]}>
      <Helmet>
        <title>
          Contact the Doctor Genius Team in Irvine, California | Doctor Genius
        </title>
        <meta
          name="description"
          content="Need help? Have questions? The live support team at Doctor Genius is here to help. Give us a call, send us an email, connect on social media, or get our address."
        />
      </Helmet>
      <div className={props["*"]}>
        <div className="main-content">
          <div className={PageStyles.hero + " hero"}>
            {/* Hero will be a layout component */}
            <Container>
              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-12">
                  <div
                    className={
                      PageStyles.innerTitle + " header inner-title center"
                    }
                  >
                    <h1>Contact Us</h1>
                    <h3 className={PageStyles.strapline + " strapline"}>
                      Have a question? Need help?
                    </h3>
                    <p className={PageStyles.mutedText + " muted-text"}>
                      Fill the form below to get directly in contact with our
                      support staff.
                    </p>
                  </div>
                </div>

                <div
                  className={
                    RowStyles.row +
                    " " +
                    PageStyles.contactForm +
                    " panel-row contact-form"
                  }
                >
                  <ContactForm />
                </div>
              </div>
            </Container>

            <Container>
              <div
                className={
                  RowStyles.row +
                  " " +
                  PageStyles.infoAndMap +
                  " panel-row info-and-map"
                }
              >
                <div
                  className={
                    PageStyles.companyInfo +
                    " col-sm-12 col-md-12 col-lap-4 company-info valign-wrapper"
                  }
                >
                  <p className={PageStyles.phoneNumber + " phone-number"}>
                    <a href="tel:877-477-2311">(877) 477-2311</a>
                  </p>
                  <p
                    className={
                      PageStyles.contactAddress + " mt-4 contact-address"
                    }
                  >
                    2121 Alton Pkwy, Suite 150 <br />
                    Irvine, CA 92606
                  </p>
                  <button
                    className={
                      PageStyles.getDirections +
                      " mt-4 button nav-button transparent get-directions"
                    }
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.google.com/maps/dir//Doctor+Genius,+2121+Alton+Pkwy+%23150,+Irvine,+CA+92606/@33.6944898,-117.8412595,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcde9f23745717:0x9660a06c68c4bd1!2m2!1d-117.839795!2d33.69453!3e0"
                    >
                      Get Directions
                    </a>
                  </button>
                  <p
                    className={
                      PageStyles.contactHours + " mt-4 mb-4 contact-hours"
                    }
                  >
                    Monday to Friday <br />8 AM to 5 PM PST
                  </p>
                </div>
                <div
                  className={
                    PageStyles.mapHolder +
                    " col-sm-12 col-md-12 col-lap-7 map-holder"
                  }
                >
                  <iframe
                    className={PageStyles.dgMap + " dg-map"}
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
  </div>
)
