import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import thinArrowRight from "../img/right-arrow.svg"

import eventBuilding1 from "../img/event-building-1.jpg"
import eventBuilding2 from "../img/event-building-2.jpg"
import eventBuilding3 from "../img/event-building-3.jpg"
import eventBuilding4 from "../img/event-building-4.jpg"

import boaLogo from "../img/bankofamerica.png"
import pattersonLogo from "../img/pattersoncompanies.png"
import googleLogo from "../img/googlepartner.jpg"
import pulseCheckLogo from "../img/pulsecheckurgentcare.png"

import "../styles/event-listing.scss"

const featured_event = {
  event_title: "Marketing to Millennials Event",
  register_url: "https://register.gotowebinar.com/register/5575627151713752578",
  register_button_text: "Register Now",
  event_details_text:
    "This course is for individuals that are interested in either acquiring an existing practice or would like to start a new practice.",
  hero_bg_image_url:
    "https://doctorgenius-wordpress.dgd3v.com/wp-content/uploads/2019/08/partnerships-hero.jpg",
  slug:
    "https://doctorgenius-wordpress.dgplex.com/events/event-2018-04-06-nickerson-consulting-3-spring-cleaning-tips-to-clean-up-your-accounts-receivable/",
}

const upcoming_events = {
  event_1: {
    title: "DG Event 1",
    city: "Irvine",
    state: "CA",
    date: "2019-12-06",
    slug:
      "https://doctorgenius-wordpress.dgplex.com/events/event-2018-04-06-nickerson-consulting-3-spring-cleaning-tips-to-clean-up-your-accounts-receivable/",
  },
  event_2: {
    title: "DG Event 2",
    city: "Los Alamitos",
    state: "CA",
    date: "2019-12-25",
    slug:
      "https://doctorgenius-wordpress.dgplex.com/events/event-2018-04-06-nickerson-consulting-3-spring-cleaning-tips-to-clean-up-your-accounts-receivable/",
  },
  event_3: {
    title: "DG Event 3",
    city: "Green Bay",
    state: "WI",
    date: "2019-12-30",
    slug:
      "https://doctorgenius-wordpress.dgplex.com/events/event-2018-04-06-nickerson-consulting-3-spring-cleaning-tips-to-clean-up-your-accounts-receivable/",
  },
  event_4: {
    title: "DG Event 4",
    city: "Las Vegas",
    state: "NV",
    date: "2019-12-31",
    slug:
      "https://doctorgenius-wordpress.dgplex.com/events/event-2018-04-06-nickerson-consulting-3-spring-cleaning-tips-to-clean-up-your-accounts-receivable/",
  },
}

const past_events = {
  event_1: {
    title: "Google Event: Digital Marketing in Healthcare",
    date: "2019-12-06",
    featured_image: eventBuilding1,
    excerpt:
      "Doctor Genius first marketing event in methods to attract new Millennials",
  },
  event_2: {
    title: "Google Event: Digital Marketing in Healthcare",
    date: "2019-12-25",
    featured_image: eventBuilding2,
    excerpt:
      "Doctor Genius first marketing event in methods to attract new Millennials",
  },
  event_3: {
    title: "Google Event: Digital Marketing in Healthcare",
    date: "2019-12-30",
    featured_image: eventBuilding3,
    excerpt:
      "Doctor Genius first marketing event in methods to attract new Millennials",
  },
  event_4: {
    title: "Google Event: Digital Marketing in Healthcare",
    date: "2019-12-31",
    featured_image: eventBuilding4,
    excerpt:
      "Doctor Genius first marketing event in methods to attract new Millennials",
  },
}

const EventPage = ({ data }) => {
  const hero_featured_event = data.featured_event.edges[0].node
  console.log("FEATURED EVENT:")
  console.log(hero_featured_event)

  const body_upcoming_events = data.upcoming_events
  console.log("UPCOMING EVENTS:")
  console.log(body_upcoming_events)

  const body_past_events = data.past_events
  console.log("PAST EVENTZ:")
  console.log(body_past_events)

  const styleBackgroundImage = {
    backgroundImage: "url(" + featured_event.hero_bg_image_url + ")",
  }

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

  const convert_time = time => {
    time = time.toString()
    time = time.split(":")

    let hours = Number(time[0])

    let time_value

    if (hours > 0 && hours <= 12) {
      time_value = "" + hours
    } else if (hours > 12) {
      time_value = "" + (hours - 12)
    } else if (hours === 0) {
      time_value = "12"
    }

    time_value += hours >= 12 ? "pm" : "am"
    return time_value
  }

  return (
    <DefaultPageLayout location="event-listing">
      <Helmet>
        <title>Events | Doctor Genius</title>
        <meta name="description" content="Doctor Genius | Event" />
      </Helmet>
      <div>
        <div className="hero" style={styleBackgroundImage}>
          <div className="hero-overlay">
            {/* Hero will be a layout component */}

            <Container>
              <div className="row">
                <div className="col-sm-11 col-md-9 col-lap-6">
                  <div className="dg-category-holder">
                    <h1 className="button flat white-text dg-category">
                      Doctor Genius Events
                    </h1>
                  </div>
                  <div className="titles">
                    <h2>{hero_featured_event.event_title}</h2>
                    <p className="event-desc">
                      {hero_featured_event.event_details_text}
                    </p>
                  </div>
                  <div className="cta-btns">
                    <a
                      className="button flat white-text register-now-btn"
                      href={hero_featured_event.register_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {hero_featured_event.register_button_text}
                    </a>
                    <a
                      className="button flat transparent hero-more-info-btn"
                      href={hero_featured_event.slug}
                    >
                      + More Info
                    </a>
                  </div>
                </div>
                <div className="col-sm-11 col-md-9 col-lap-6 event-countdown">
                  <h3>Next Event Starts:</h3>
                  <div className="spacer solid"></div>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="days">03</p>
                      <p className="labels">Days</p>
                    </div>
                    <div className="col-sm-3">
                      <p className="hours">12</p>
                      <p className="labels">Hours</p>
                    </div>
                    <div className="col-sm-3">
                      <p className="minutes">45</p>
                      <p className="labels">Minutes</p>
                    </div>
                    <div className="col-sm-3">
                      <p className="seconds">10</p>
                      <p className="labels">Seconds</p>
                    </div>
                    <div className="col-sm-10">
                      <span className="hero-event-date">
                        {format_date(hero_featured_event.event_date)}
                      </span>{" "}
                      <span className="dot">&middot;</span>{" "}
                      <span className="event-time">
                        <span className="start-time">
                          {convert_time(hero_featured_event.start_time)}-
                        </span>
                        <span className="end-time">
                          {convert_time(hero_featured_event.end_time)}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Main>
          <Container>
            <div className="content-main">
              <div className="row content-block padded upcoming-events">
                <div className="row">
                  <div className="col-sm-11 col-md-10 col-lap-9 intro-section">
                    <div className="inner-title center">
                      <h2>Upcoming Events</h2>
                    </div>

                    <p>
                      Below is information on our upcoming events that can cover
                      a variety of topics about benefiting a private practice
                      through online marketing. Each conference will have a
                      unique focus and purpose, teaming up with successful
                      professionals within the industry. For more information,
                      follow the link to register.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-11 col-md-9 col-lap-12 event-cards">
                    <div className="row">
                      <div className="col-sm-10 col-md-6 col-lap-3">
                        <div className="card dg-event">
                          <img
                            className="card-img-top"
                            src={eventBuilding1}
                            alt="Upcoming Event"
                          />
                          <div className="card-body">
                            <h3 className="card-title">
                              {upcoming_events.event_1.title}
                            </h3>
                            <p>
                              {upcoming_events.event_1.city},{" "}
                              {upcoming_events.event_1.state}
                            </p>
                            <p className="card-event-date">
                              {upcoming_events.event_1.date}
                            </p>
                            <a
                              className="button flat transparent event-more-info-btn"
                              href={upcoming_events.event_1.slug}
                            >
                              + More Info
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-10 col-md-6 col-lap-3">
                        <div className="card dg-event">
                          <img
                            className="card-img-top"
                            src={eventBuilding2}
                            alt="Upcoming Event"
                          />
                          <div className="card-body">
                            <h3 className="card-title">
                              {upcoming_events.event_2.title}
                            </h3>
                            <p>
                              {upcoming_events.event_2.city},{" "}
                              {upcoming_events.event_2.state}
                            </p>
                            <p className="card-event-date">
                              {upcoming_events.event_2.date}
                            </p>
                            <a
                              className="button flat transparent event-more-info-btn"
                              href={upcoming_events.event_2.slug}
                            >
                              + More Info
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-10 col-md-6 col-lap-3">
                        <div className="card dg-event">
                          <img
                            className="card-img-top"
                            src={eventBuilding3}
                            alt="Upcoming Event"
                          />
                          <div className="card-body">
                            <h3 className="card-title">
                              {upcoming_events.event_3.title}
                            </h3>
                            <p>
                              {upcoming_events.event_3.city},{" "}
                              {upcoming_events.event_3.state}
                            </p>
                            <p className="card-event-date">
                              {upcoming_events.event_3.date}
                            </p>
                            <a
                              className="button flat transparent event-more-info-btn"
                              href={upcoming_events.event_3.slug}
                            >
                              + More Info
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-10 col-md-6 col-lap-3">
                        <div className="card dg-event">
                          <img
                            className="card-img-top"
                            src={eventBuilding4}
                            alt="Upcoming Event"
                          />
                          <div className="card-body">
                            <h3 className="card-title">
                              {upcoming_events.event_4.title}
                            </h3>
                            <p>
                              {upcoming_events.event_4.city},{" "}
                              {upcoming_events.event_4.state}
                            </p>
                            <p className="card-event-date">
                              {upcoming_events.event_4.date}
                            </p>
                            <a
                              className="button flat transparent event-more-info-btn"
                              href={upcoming_events.event_4.slug}
                            >
                              + More Info
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spacer solid"></div>

              <div className="row panel-row featured-partners-row">
                <div className="col-sm-12">
                  <div className="content-block">
                    <div className="inner-title center thin-heading">
                      <h2>Featured Sponsers</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-10 col-md-10 col-lap-10 col-lg-11">
                    <div className="row">
                      <div className="logo-partnership-item col-sm-10 col-md-6 col-lap-3">
                        <div className="icon-wrapper">
                          <img
                            className="img-icon"
                            src={boaLogo}
                            alt="Digital Marketing Partner Bank of America"
                          />
                        </div>
                      </div>
                      <div className="logo-partnership-item col-sm-10 col-md-6 col-lap-3">
                        <div className="icon-wrapper">
                          <img
                            className="img-icon"
                            src={pattersonLogo}
                            alt="Digital Marketing Partner Patterson Companies, Inc."
                          />
                        </div>
                      </div>
                      <div className="logo-partnership-item col-sm-10 col-md-6 col-lap-3">
                        <div className="icon-wrapper">
                          <img
                            className="img-icon"
                            src={pulseCheckLogo}
                            alt="Digital Marketing Partner PulseCheck"
                          />
                        </div>
                      </div>
                      <div className="logo-partnership-item col-sm-10 col-md-6 col-lap-3">
                        <div className="icon-wrapper">
                          <img
                            className="img-icon google-partner-icon"
                            src={googleLogo}
                            alt="Google Partner"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spacer solid"></div>

              <div className="past-events">
                <div className="row">
                  <div className="col-sm-11 col-md-11 col-lap-9 center">
                    <h2>Past Events</h2>
                    <p className="past-event-desc">
                      At Doctor Genius, we understand that the digital marketing
                      platform is always changing and therefore, offer events
                      collaborating with other professionals in specific fields.
                      Here is a timeline of past events that we have hosted on
                      various topics pertaining to private practices.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lap-10 col-lg-9 col-md-11 past-events-timeline">
                    <div className="row">
                      <div className="col-lap-10 offset-lap-1 col-md-12">
                        <div className="row event-one">
                          <div className="col-sm-10 col-md-6 past-event-image">
                            <img
                              src={past_events.event_1.featured_image}
                              alt="Past Event"
                            />
                          </div>
                          <div className="col-sm-10 col-md-6 past-event-title-and-desc">
                            <span class="button flat white-text past-event-date">
                              October 18
                            </span>
                            <p className="pe-title">
                              {past_events.event_1.title}
                            </p>
                            <p className="pe-desc">
                              {past_events.event_1.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="row event-one">
                          <div className="col-sm-10 col-md-6 past-event-image">
                            <img
                              src={past_events.event_2.featured_image}
                              alt="Past Event"
                            />
                          </div>
                          <div className="col-sm-10 col-md-6 past-event-title-and-desc">
                            <span class="button flat white-text past-event-date">
                              November 18
                            </span>
                            <p className="pe-title">
                              {past_events.event_2.title}
                            </p>
                            <p className="pe-desc">
                              {past_events.event_2.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="row event-one">
                          <div className="col-sm-10 col-md-6 past-event-image">
                            <img
                              src={past_events.event_3.featured_image}
                              alt="Past Event"
                            />
                          </div>
                          <div className="col-sm-10 col-md-6 past-event-title-and-desc">
                            <span class="button flat white-text past-event-date">
                              December 25
                            </span>
                            <p className="pe-title">
                              {past_events.event_3.title}
                            </p>
                            <p className="pe-desc">
                              {past_events.event_3.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="row event-one">
                          <div className="col-sm-10 col-md-6 past-event-image">
                            <img
                              src={past_events.event_4.featured_image}
                              alt="Past Event"
                            />
                          </div>
                          <div className="col-sm-10 col-md-6 past-event-title-and-desc">
                            <span class="button flat white-text past-event-date">
                              December 31
                            </span>
                            <p className="pe-title">
                              {past_events.event_4.title}
                            </p>
                            <p className="pe-desc">
                              {past_events.event_4.excerpt}
                            </p>
                          </div>
                        </div>
                      </div>
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
                        Start your <span>success</span> with Doctor Genius
                        today!
                      </h2>
                      <div className="accented-paragraph">
                        <p>
                          The Genius platform makes every part of your company
                          process more efficient. Our support team is very
                          excited to help you and get your company on the right
                          path of success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-10 col-md-5 col-lap-5">
                  <div className="center">
                    <a href="/demo" className="button flat white-text">
                      Request Demo{" "}
                      <img src={thinArrowRight} alt="Arrow Right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Demo Footer */}
            </div>
          </Container>
        </Main>
      </div>
    </DefaultPageLayout>
  )
}

export default EventPage

export const pageQuery = graphql`
  query {
    featured_event: allWordpressWpEvents(
      filter: { featured_event: { eq: "1" } }
    ) {
      edges {
        node {
          ...eventListing
        }
      }
    }

    upcoming_events: allWordpressWpEvents(
      filter: { event_date: { gt: "2019-08-21" }, featured_event: { eq: "1" } }
      limit: 4
    ) {
      edges {
        node {
          ...eventListing
        }
      }
    }

    past_events: allWordpressWpEvents(
      filter: { event_date: { lt: "2019-08-21" } }
      limit: 4
    ) {
      edges {
        node {
          ...eventListing
        }
      }
    }
  }
`
