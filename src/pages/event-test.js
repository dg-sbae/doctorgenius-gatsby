import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import he from "he"
import Img from "gatsby-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import thinArrowRight from "../img/right-arrow.svg"

import "../styles/event-post.scss"

const dummyData = {
  featured_event: "1",
  event_title:
    "Nickerson Consulting: 3 Spring Cleaning Tips to Clean Up Your Accounts Receivable",
  event_strapline: "",
  register_url: "https://register.gotowebinar.com/register/5575627151713752578",
  featured_image: null,
  event_details_text: "",
  event_date: "2018-04-06",
  start_time: "11:00",
  end_time: "12:00",
  include_location: "",
  event_venue: "",
  event_street_address: "",
  event_city: "",
  event_state: "",
  event_zip: "",
  information_heading1:
    "3 Spring Cleaning Tips to Clean Up Your Accounts Receivable",
  information_h1_li_1: "Collecting overdue patients accounts",
  information_h1_li_2: "Shortcut to sending statements",
  information_h1_li_3: "Tips and tricks for insurance claims",
  information_h1_li_4: "",
  information_heading2: "",
  information_h2_li_1: "",
  information_h2_li_2: "",
  information_h2_li_3: "",
  information_h2_li_4: "",
  include_marketing: "",
  information_image: "1688",
  include_speakers: "",
  speaker_section_title: "",
  speaker_section_subtitle: "",
  speaker_items: {
    "1": {
      speaker_name: "J-Bot",
      speaker_position: "1",
    },
    "2": {
      speaker_name: "B-Rob",
      speaker_position: "1",
    },
  },
}

const event_title_main = dummyData.event_title.split(":")["0"]
const event_title_sub = dummyData.event_title.split(":")["1"].trim()
/* if (dummyData.event_title.contains(":")) {
  let event_title_main = dummyData.event_title.split(":")["0"]
  let event_title_sub = dummyData.event_title.split(":")["1"].trim()
} else {
  let event_title_main = dummyData.event_title
  let event_title_sub = ""
} */

export default props => (
  <DefaultPageLayout location={props["*"]}>
    <Helmet>
      <title>Event Details | Doctor Genius</title>
      <meta
        name="description"
        content="You wanna see us? We wanna see you. Come to this event."
      />
    </Helmet>
    <div className={props["*"]}>
      <div className="hero">
        {/* Hero will be a layout component */}

        <Container>
          <div className="valign-wrapper row">
            <div className="col-sm-12">
              <div className="hero-content">
                <div className="hero-content">
                  <a
                    className="button flat white-text continue-edu-class"
                    href=""
                  >
                    Continue Education Class
                  </a>
                  <h1>{event_title_main}</h1>
                  <h2>{event_title_sub}</h2>
                  <a
                    className="button flat white-text register-now-btn"
                    href={dummyData.register_url}
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Main>
        <Container>
          <div className="row padded">
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="content-block">LOREM</div>
            </div>
          </div>
          <div className="row padded panel-row">
            <div className="col-sm-12">
              <div className="content-block">
                <div className="inner-title center thin-heading">
                  <h2 className="underline">
                    <b>TITLE</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)
