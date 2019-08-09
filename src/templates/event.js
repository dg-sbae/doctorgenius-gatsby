import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import thinArrowRight from "../img/right-arrow.svg"

import "../styles/event-post.scss"

// Temporary data, will be replaced with Custom Event Data from Wordpress
const dummy_data = {
  featured_event: "1",
  event_title: "Nickerson Consulting:",
  event_strapline:
    "3 Spring Cleaning Tips to Clean Up Your Accounts Receivable",
  event_subtitle: "Continuing Education Class",
  register_url: "https://register.gotowebinar.com/register/5575627151713752578",
  register_button_text: "Register Now",
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
  hero_bg_image_url:
    "https://doctorgenius-wordpress.dgd3v.com/wp-content/uploads/2019/08/partnerships-hero.jpg",
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
  information_image_url:
    "https://doctorgenius-wordpress.dgd3v.com/wp-content/uploads/2019/08/information-image-test.jpg",
  include_speakers: "1",
  speaker_section_title: "Digital Marketing",
  speaker_section_subtitle: "Mastermind Speakers",
  speakers: [
    {
      speaker_name: "Kylie",
      speaker_order: "2",
      speaker_profile_image_url:
        "https://doctorgenius-wordpress.dgplex.com/wp-content/uploads/2018/09/profile-montoya.jpg",
    },
    {
      speaker_name: "Shawn",
      speaker_order: "1",
      speaker_profile_image_url:
        "https://doctorgenius-wordpress.dgplex.com/wp-content/uploads/2018/09/profile-stiffler.jpg",
    },
    {
      speaker_name: "Kylie Jr",
      speaker_order: "4",
      speaker_profile_image_url:
        "https://doctorgenius-wordpress.dgplex.com/wp-content/uploads/2018/09/profile-montoya.jpg",
    },
    {
      speaker_name: "Shawn Jr",
      speaker_order: "3",
      speaker_profile_image_url:
        "https://doctorgenius-wordpress.dgplex.com/wp-content/uploads/2018/09/profile-stiffler.jpg",
    },
  ],
}

// Generic function to sort array based off an object's name(key)
const map_order = (arr, order, key) => {
  arr.sort((a, b) => {
    let A = a[key]
    let B = b[key]
    if (order.indexOf(A) > order.indexOf(B)) {
      return 1
    } else {
      return -1
    }
  })
  return arr
}

// Function to sort speaker array based off speaker_position
const sort_speakers = arr => {
  let current_order_array = []
  let speaker_order = []

  arr.map(speaker => {
    let number = speaker.speaker_order
    current_order_array.push(number)
    return true
  })

  speaker_order = current_order_array.sort()
  arr = map_order(arr, speaker_order, "speaker_order")
  return arr
}
const speakers = sort_speakers(dummy_data.speakers)

//Dynamically add BG image from event data
const styleBackgroundImage = {
  backgroundImage: "url(" + dummy_data.hero_bg_image_url + ")",
}

// Handles displaying speaker section if speakers are present
const display_speakers = () => {
  if (dummy_data.include_speakers) {
    return (
      <div className="row content-block padded speaker-details">
        <div className="col-sm-12 col-lap-4">
          <h2>{dummy_data.speaker_section_title}:</h2>
          <h3>{dummy_data.speaker_section_subtitle}</h3>
        </div>
        <div className="col-sm-12 col-md-8 col-lap-8">
          <div className="row speaker-profiles">{speaker_holder}</div>
        </div>
      </div>
    )
  }
}

// Handles output of each speaker
const speaker_holder = speakers.map(function(speaker) {
  return (
    <div className="col-sm-12 col-md-6 col-lap-3" key={speaker.speaker_name}>
      <div className="speaker-img-wrapper">
        <img
          className="mx-auto d-block"
          src={speaker.speaker_profile_image_url}
          alt="Speaker Profile"
        />
      </div>
      <p>{speaker.speaker_name}</p>
    </div>
  )
})

const format_date = date => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  let string_date = date
    .toString()
    .replace(/-0+/g, "-")
    .split(["-"])
  const month = months[string_date[1] - 1],
    day = string_date[2],
    year = string_date[0]
  const formatted_date = "" + month + " " + day + ", " + year
  return formatted_date
}

const EventPage = ({ pageContext, data, location }) => {
  const event_details = data.focusEvent
  const event_details_date = format_date(event_details.event_date)
  console.log(event_details)
  /*
  const mainCategory = post.categories.find(c =>
    categoriesPaths.find(d => d.name === c.name)
  )

  //Create the two necessary parts of the blog post by splitting at the first paragraph
  const content = post.content.split(/(<p>.*?<\/p>)/)
  const intro = content.slice(1, 2).join()
  const remainder = content.slice(2).join("")

  let escapedTitle = post.title.replace(/\s/g, "+")
  let escapedLink = encodeURIComponent(location.href) */

  return (
    <DefaultPageLayout location="event-post">
      <Helmet>
        <title>Event Details | Doctor Genius</title>
        <meta name="description" content="Doctor Genius | Event." />
      </Helmet>
      <div>
        <div className="hero" style={styleBackgroundImage}>
          <div className="hero-overlay">
            {/* Hero will be a layout component */}

            <Container>
              <div className="row">
                <div className="col-sm-12 col-md-9 col-lap-8">
                  <div
                    className={
                      event_details.event_strapline[0] !== ""
                        ? "continue-edu-class-holder"
                        : "d-none"
                    }
                  >
                    <span className="button flat white-text continue-edu-class">
                      {event_details.event_strapline}
                    </span>
                  </div>
                  <div className="titles">
                    <h1>{event_details.event_title}</h1>
                    <h2>{event_details.event_subtitle}</h2>
                  </div>
                  <div
                    className={
                      event_details.register_url[0] !== ""
                        ? "register-now-btn-holder"
                        : "d-none"
                    }
                  >
                    <a
                      className="button flat white-text register-now-btn"
                      href={event_details.register_url[0]}
                      target="_blank"
                    >
                      {event_details.register_button_text[0] === ""
                        ? "Register Now"
                        : event_details.register_button_text[0]}
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Main>
          <Container>
            <div className="main-content">
              <div className="row padded">
                <div className="col-sm-11 col-md-9 col-lap-6">
                  <div className="content-block event-details">
                    <h3>Event Details</h3>
                    <p>{event_details.event_details_text}</p>
                  </div>
                </div>
                <div className="col-sm-11 col-md-9 col-lap-6">
                  <div className="row event-date valign-wrapper">
                    <div className="col-sm-11 col-md-10">
                      <div className="card row">
                        <div className="card-body col-sm-10 col-lap-12 col-lg-8">
                          <p className="card-text">
                            Date: {event_details_date}
                          </p>
                          <p className="card-text">
                            Time: {dummy_data.start_time},{" "}
                            {dummy_data.event_state}
                          </p>
                          <p className="card-text">
                            <span>Location: </span>
                            <span>
                              {dummy_data.event_street_address},{" "}
                              {dummy_data.event_city} {dummy_data.event_state}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spacer solid"></div>

            <div className="row content-block padded listed-items">
              <div className="col-sm-11 col-md-9 col-lap-6">
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
                <img src={dummy_data.information_image_url} alt="" />
              </div>
            </div>

            <div
              className={
                dummy_data.include_speakers ? "spacer solid" : "d-none"
              }
            ></div>

            {display_speakers()}

            <div className="spacer solid"></div>

            <div className="row content-block padded dg-marketing-solutions">
              <div className="col-sm-11 col-md-9 col-lap-12">
                <h2>
                  Doctor Genius
                  <br />
                  Marketing Solutions
                </h2>
                <div className="row dg-dictionary">
                  <div className="col-lap-6">
                    <h4>Website</h4>
                    <p>
                      Our websites are power-packed with fresh and unique
                      content tailored to your practice and services
                    </p>
                    <h4>Branding</h4>
                    <p>
                      Delivering effective brand strategies that gives practices
                      a major edge in competitive markets
                    </p>
                    <h4>Social Media</h4>
                    <p>
                      Original patient education content is posted to your
                      social media profiles to generate general interest in your
                      medical treatments and services
                    </p>
                    <h4>Search Marketing</h4>
                    <p>
                      Narrow down your successful keywords, who is clicking on
                      them, and which keywords yield the highest number of new
                      patient inquiries
                    </p>
                    <h4>Hyper-Local Targeting</h4>
                    <p>
                      We increase the focus of who we are targeting to a small
                      geographic region near your practice
                    </p>
                    <h4>Lead Tracking</h4>
                    <p>
                      Get a detailed breakdown of your patient inquiries and
                      their disposition. Determine new or returning patients to
                      better track your Return On Investment (ROI)
                    </p>
                    <h4>Security</h4>
                    <p>
                      We are always first in line when it comes to running the
                      latest technology. In addition to our servers being in the
                      best location possible, we are also using the best
                      software available
                    </p>
                  </div>
                  <div className="col-lap-6">
                    <h4>Genius Portal</h4>
                    <p>
                      Get the information you need about your website and
                      performance in one easy-to-use dashboard
                    </p>
                    <h4>Rank Report</h4>
                    <p>
                      We provide reporting and analytics to keep you up-to-date
                      on your first page placement for targeted keywords
                    </p>
                    <h4>Review Management</h4>
                    <p>
                      9 out of 10 customers read reviews before making a
                      purchasing decision. Stay informed of what patients are
                      saying about your practice
                    </p>
                    <h4>HOSTING</h4>
                    <p>
                      Get reviews from your existing patients fast with our
                      streamlined SMS and email services
                    </p>
                    <h4>Practice Promoter</h4>
                    <p>
                      Get reviews from existing patients fast with your
                      streamlined SMS and e-mail services
                    </p>
                    <h4>Recall</h4>
                    <p>
                      We have knowledge of each practice, which involves the
                      clear understanding of their industry and answering the
                      questions of their patient needs
                    </p>
                    <h4>Retention</h4>
                    <p>
                      Our goal is to help health practices retain as many
                      customers as possible, often through customer loyalty and
                      brand loyalty initiatives
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="spacer solid"></div>

            {/* Begin Demo Footer */}
            <div className="row padded tall-top request-demo-footer">
              <div className="col-sm-11 col-md-9 col-lap-5">
                <div className="content-block">
                  <div className="inner-title">
                    <h2>
                      Start your <span>success</span> with Doctor Genius today!
                    </h2>
                    <div className="accented-paragraph">
                      <p>
                        The Genius platform makes every part of your company
                        process more efficient. Our support team is very excited
                        to help you and get your company on the right path of
                        success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-5 col-lap-5">
                <div className="center">
                  <a href="/demo" className="button flat white-text">
                    Request Demo <img src={thinArrowRight} alt="Arrow Right" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Demo Footer */}
          </Container>
        </Main>
      </div>
    </DefaultPageLayout>
  )
}

export default EventPage

export const pageQuery = graphql`
  query($currentID: Int) {
    focusEvent: wordpressWpEvents(wordpress_id: { eq: $currentID }) {
      ...eventPost
    }
  }
`
