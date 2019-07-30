import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import he from "he"
import Img from "gatsby-image"
import shakingHands from "../img/shakingHands.jpg"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import thinArrowRight from "../img/right-arrow.svg"

import "../styles/event-post.scss"

const dummy_data = {
  featured_event: "1",
  event_title: "Nickerson Consulting:",
  event_strapline:
    "3 Spring Cleaning Tips to Clean Up Your Accounts Receivable",
  event_subtitle: "Continuing Education Class",
  register_url: "https://register.gotowebinar.com/register/5575627151713752578",
  featured_image: null,
  event_details_text:
    "We will be showcasing proven marketing methods to attract and return the fastest growing buying group, Millennials.",
  event_date: "2018-04-06",
  start_time: "13:00",
  end_time: "17:00",
  include_location: "",
  event_venue: "Trade Venue",
  event_street_address: "7384 Alberta St",
  event_city: "Los Angeles",
  event_state: "CA",
  event_zip: "92345",
  information_heading1:
    "3 Spring Cleaning Tips to Clean Up Your Accounts Receivable",
  information_h1_li_1:
    "In 2018, will have the most spending power ($3.39 trillion)",
  information_h1_li_2: "41% make buying decisions via mobile",
  information_h1_li_3: "48% rely on word of mouth over ads",
  information_h1_li_4:
    "63% have a bachelor's degree (most educated demographic)",
  information_heading2: "Who is a Millennial?",
  information_h2_li_1: "Reached adulthood in 2000",
  information_h2_li_2: "One quarter of the entire US population",
  information_h2_li_3: "85% use a smartphone",
  information_h2_li_4: "5 in 6 connect to businesses via Social Media",
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
          <div className="row">
            <div className="col-sm-12 col-md-9 col-lap-8">
              <div className="continue-edu-class-holder">
                <span className="button flat white-text continue-edu-class">
                  {dummy_data.event_subtitle}
                </span>
              </div>
              <div className="titles">
                <h1>{dummy_data.event_title}</h1>
                <h2>{dummy_data.event_strapline}</h2>
              </div>
              <div className="register-now-btn-holder">
                <a
                  className="button flat white-text register-now-btn"
                  href={dummy_data.register_url}
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Main>
        <Container>
          <div className="main-content">
            <div className="row padded">
              <div className="col-sm-11 col-md-9 col-lap-6">
                <div className="content-block event-details">
                  <h3>Event Details</h3>
                  <p>{dummy_data.event_details_text}</p>
                </div>
              </div>
              <div className="col-sm-11 col-md-9 col-lap-6">
                <div className="row event-date valign-wrapper">
                  <div className="col-sm-11 col-md-10">
                    <div className="card row">
                      <div className="card-body col-sm-10 col-lap-12 col-lg-8">
                        <p className="card-text">
                          Date: {dummy_data.event_date}
                        </p>
                        <p className="card-text">
                          Location: {dummy_data.event_venue},{" "}
                          {dummy_data.event_state}
                        </p>
                        <p className="card-text">
                          Time: {dummy_data.start_time} {" to "}{" "}
                          {dummy_data.end_time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer solid"></div>

          <div className="row content-block listed-items padded">
            <div className="col-sm-11 col-lap-6">
              <h2>{dummy_data.information_heading1}</h2>
              <ul>
                <li>{dummy_data.information_h1_li_1}</li>
                <li>{dummy_data.information_h1_li_2}</li>
                <li>{dummy_data.information_h1_li_3}</li>
                <li>{dummy_data.information_h1_li_4}</li>
              </ul>
              <h2>{dummy_data.information_heading2}</h2>
              <ul>
                <li>{dummy_data.information_h2_li_1}</li>
                <li>{dummy_data.information_h2_li_2}</li>
                <li>{dummy_data.information_h2_li_3}</li>
                <li>{dummy_data.information_h2_li_4}</li>
              </ul>
            </div>
            <div className="col-lap-6 content-image d-none d-lap-block d-lg-block d-xl-block">
              <img src={shakingHands} />
            </div>
          </div>

          <div className="spacer solid"></div>

          <div className="row content-block padded">
            <div className="col-sm-12">
              <h2>HELLOTHERES</h2>
            </div>
          </div>
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)
