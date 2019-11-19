import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Countdown, { zeroPad } from "react-countdown-now"

import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import thinArrowRight from "../img/right-arrow.svg"

import "../styles/event-listing.scss"

const EventPage = ({ data }) => {
  // Globals
  let upcoming_events = data.upcoming_events.edges
  const past_events = data.past_events.edges
  let styleBackgroundImage
  let featured_event
  const images = data

  const eventTimeLineBg = images.eventTimelineBg.childImageSharp.fluid.src
  const eventTimeLineStyles = {
    backgroundImage: "url(" + eventTimeLineBg + ")",
    backgroundRepeat: "no-repeat",
  }

  // Adds data to featured_event if there currently is none
  if (data.featured_event.edges.length === 1) {
    featured_event = data.featured_event.edges[0].node
  } else {
    featured_event = {
      dummy_data: true,
      end_time: "",
      event_city: "",
      event_date: "2026-01-01",
      event_details_text:
        "Keep and eye out for new events hosted by Doctor Genius and our sponsers.",
      event_title: "Our Events",
      featured_event: [""],
      register_url: "",
      start_time: "00:01",
      slug: "",
    }
  }

  let date_and_time =
    featured_event.event_date + " " + featured_event.start_time
  let countdown_date_and_time = new Date(date_and_time).getTime()

  // Adds static bg if there is not a featured event
  if (featured_event.dummy_data) {
    styleBackgroundImage = images.standardHeroBg.childImageSharp.fluid
  } else {
    styleBackgroundImage =
      featured_event.all_image_urls.hero_image_url.localFile.childImageSharp
        .fluid
  }

  // Converts date from YYYY-MM-DD to MM, DD
  const format_date_short = date => {
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
      day = string_date[2]
    const formatted_date = "" + month + " " + day
    return formatted_date
  }

  // Converts date from YYYY-MM-DD to MM DD, YYYY
  const format_date_long = date => {
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

  // Handles output of days/hours/minutes/seconds on Event Countdown section
  const day_renderer = ({ days }) => {
    return <p className="days">{zeroPad(days, 2)}</p>
  }

  const hours_renderer = ({ hours }) => {
    return <p className="hours">{zeroPad(hours, 2)}</p>
  }

  const minutes_renderer = ({ minutes }) => {
    return <p className="minutes">{zeroPad(minutes, 2)}</p>
  }

  const seconds_renderer = ({ seconds }) => {
    return <p className="seconds">{zeroPad(seconds, 2)}</p>
  }

  // Converts Military time(13:30) to Standard(1:30PM)
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

  const defaultUpcomingEventImage =
    data.defaultUpcomingImg.childImageSharp.fluid.src

  // Handles output of each upcoming event
  const display_upcoming_events = upcoming_events
    .slice(0)
    .reverse()
    .map(function(event) {
      if (upcoming_events.length >= 1) {
        return (
          <div className="col-sm-10 col-md-6 col-lap-3" key={event.node.slug}>
            <div className="card dg-event">
              <img
                className="card-img-top"
                src={
                  event.node.all_image_urls.featured_image_url_large != null
                    ? event.node.featured_media.localFile.childImageSharp.fluid
                        .src
                    : defaultUpcomingEventImage
                }
                alt="Upcoming Event"
              />
              <div className="card-body">
                <h3 className="card-title">{event.node.event_title}</h3>
                <p>
                  {event.node.include_location[0] !== ""
                    ? event.node.event_city + ", " + event.node.event_state
                    : "Webinar - Online"}
                </p>
                <p className="card-event-date">
                  {format_date_long(event.node.event_date)}
                </p>
                <Link
                  className="button flat transparent event-more-info-btn"
                  to={`/events/` + event.node.slug}
                >
                  + More Info
                </Link>
              </div>
            </div>
          </div>
        )
      } else {
        return <span></span>
      }
    })

  ///Handles output of the last 4 events prior to todays date
  const display_past_events = () => {
    return (
      <div className="col-lap-10 offset-lap-1 col-md-12">
        <div className="row singular-event">
          <div className="col-sm-10 col-md-6 past-event-image">
            <Link to={"/events/" + past_events[0].node.slug}>
              <img
                src={
                  past_events[0].node.featured_media != null
                    ? past_events[0].node.featured_media.localFile
                        .childImageSharp.fluid.src
                    : defaultUpcomingEventImage
                }
                alt="Past Event"
              />
            </Link>
          </div>
          <div className="col-sm-10 col-md-6 past-event-title-and-desc">
            <span class="button flat white-text past-event-date">
              {format_date_short(past_events[0].node.event_date)}
            </span>
            <Link to={"/events/" + past_events[0].node.slug}>
              <p className="pe-title">{past_events[0].node.event_title}</p>
            </Link>
            {past_events[0].node.event_subtitle !== "" && (
              <p className="pe-desc">{past_events[0].node.event_subtitle}</p>
            )}
          </div>
        </div>

        <div className="row singular-event">
          <div className="col-sm-10 col-md-6 past-event-image">
            <Link to={"/events/" + past_events[1].node.slug}>
              <img
                src={
                  past_events[1].node.featured_media != null
                    ? past_events[1].node.featured_media.localFile
                        .childImageSharp.fluid.src
                    : defaultUpcomingEventImage
                }
                alt="Past Event"
              />
            </Link>
          </div>
          <div className="col-sm-10 col-md-6 past-event-title-and-desc">
            <span class="button flat white-text past-event-date">
              {format_date_short(past_events[1].node.event_date)}
            </span>
            <Link to={"/events/" + past_events[1].node.slug}>
              <p className="pe-title">{past_events[1].node.event_title}</p>
            </Link>
            {past_events[1].node.event_subtitle !== "" && (
              <p className="pe-desc">{past_events[1].node.event_subtitle}</p>
            )}
          </div>
        </div>

        <div className="row singular-event">
          <div className="col-sm-10 col-md-6 past-event-image">
            <Link to={"/events/" + past_events[2].node.slug}>
              <img
                src={
                  past_events[2].node.featured_media != null
                    ? past_events[2].node.featured_media.localFile
                        .childImageSharp.fluid.src
                    : defaultUpcomingEventImage
                }
                alt="Past Event"
              />
            </Link>
          </div>
          <div className="col-sm-10 col-md-6 past-event-title-and-desc">
            <span class="button flat white-text past-event-date">
              {format_date_short(past_events[2].node.event_date)}
            </span>
            <Link to={"/events/" + past_events[2].node.slug}>
              <p className="pe-title">{past_events[2].node.event_title}</p>
            </Link>
            {past_events[2].node.event_subtitle !== "" && (
              <p className="pe-desc">{past_events[2].node.event_subtitle}</p>
            )}
          </div>
        </div>

        <div className="row singular-event">
          <div className="col-sm-10 col-md-6 past-event-image">
            <Link to={"/events/" + past_events[3].node.slug}>
              <img
                src={
                  past_events[3].node.featured_media != null
                    ? past_events[3].node.featured_media.localFile
                        .childImageSharp.fluid.src
                    : defaultUpcomingEventImage
                }
                alt="Past Event"
              />
            </Link>
          </div>
          <div className="col-sm-10 col-md-6 past-event-title-and-desc">
            <span class="button flat white-text past-event-date">
              {format_date_short(past_events[3].node.event_date)}
            </span>
            <Link to={"/events/" + past_events[3].node.slug}>
              <p className="pe-title">{past_events[3].node.event_title}</p>
            </Link>
            {past_events[3].node.event_subtitle !== "" && (
              <p className="pe-desc">{past_events[3].node.event_subtitle}</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <DefaultPageLayout location="event-listing">
      <Helmet>
        <title>Events | Doctor Genius</title>
        <meta name="description" content="Doctor Genius | Event" />
      </Helmet>
      <div>
        <BackgroundImage fluid={styleBackgroundImage}>
          <div className="hero">
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
                      <h2>{featured_event.event_title}</h2>
                      <p className="event-desc">
                        {featured_event.event_details_text}
                      </p>
                    </div>
                    <div className="cta-btns">
                      {featured_event.register_url !== "" &&
                        (featured_event.register_url[0] !== "" && (
                          <a
                            className="button flat white-text register-now-btn"
                            href={featured_event.register_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {featured_event.register_button_text === ""
                              ? "Register Now"
                              : featured_event.register_button_text}
                          </a>
                        ))}
                      {featured_event.slug !== "" && (
                        <a
                          className="button flat transparent hero-more-info-btn"
                          href={featured_event.slug}
                        >
                          + More Info
                        </a>
                      )}
                    </div>
                  </div>
                  {featured_event.dummy_data !== true && (
                    <div className="col-sm-11 col-md-9 col-lap-6 event-countdown">
                      <h3>Next Event Starts:</h3>
                      <div className="spacer solid"></div>
                      <div className="row">
                        <div className="col-sm-3">
                          <Countdown
                            date={countdown_date_and_time}
                            renderer={day_renderer}
                          />
                          <p className="labels">Days</p>
                        </div>
                        <div className="col-sm-3">
                          <Countdown
                            date={countdown_date_and_time}
                            renderer={hours_renderer}
                          />
                          <p className="labels">Hours</p>
                        </div>
                        <div className="col-sm-3">
                          <Countdown
                            date={countdown_date_and_time}
                            renderer={minutes_renderer}
                          />
                          <p className="labels">Minutes</p>
                        </div>
                        <div className="col-sm-3">
                          <Countdown
                            date={countdown_date_and_time}
                            renderer={seconds_renderer}
                          />
                          <p className="labels">Seconds</p>
                        </div>
                        <div className="col-sm-10">
                          <span className="hero-event-date">
                            {format_date_long(featured_event.event_date)}
                          </span>{" "}
                          <span className="dot">&middot;</span>{" "}
                          <span className="event-time">
                            {featured_event.start_time !== "" && (
                              <span className="start-time">
                                {convert_time(featured_event.start_time)}
                              </span>
                            )}
                            {featured_event.end_time !== "" && (
                              <span className="end-time">
                                -{convert_time(featured_event.end_time)}
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Container>
            </div>
          </div>
        </BackgroundImage>
        <Main>
          <Container>
            <div className="content-main">
              <div className="content-block padded upcoming-events">
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
                    <div className="row">{display_upcoming_events}</div>
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
                            src={images.boaLogo.childImageSharp.fluid.src}
                            alt="Digital Marketing Partner Bank of America"
                          />
                        </div>
                      </div>
                      <div className="logo-partnership-item col-sm-10 col-md-6 col-lap-3">
                        <div className="icon-wrapper">
                          <img
                            className="img-icon"
                            src={images.pattersonLogo.childImageSharp.fluid.src}
                            alt="Digital Marketing Partner Patterson Companies, Inc."
                          />
                        </div>
                      </div>
                      <div className="logo-partnership-item col-sm-10 col-md-6 col-lap-3">
                        <div className="icon-wrapper">
                          <img
                            className="img-icon"
                            src={
                              images.pulseCheckLogo.childImageSharp.fluid.src
                            }
                            alt="Digital Marketing Partner PulseCheck"
                          />
                        </div>
                      </div>
                      <div className="logo-partnership-item col-sm-10 col-md-6 col-lap-3">
                        <div className="icon-wrapper">
                          <img
                            className="img-icon google-partner-icon"
                            src={images.googleLogo.childImageSharp.fluid.src}
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
                  <div
                    className="col-lap-10 col-lg-9 col-md-11 past-events-timeline"
                    style={eventTimeLineStyles}
                  >
                    <div className="row">{display_past_events()}</div>
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
      filter: { event_date: { gt: "2019-11-13" }, featured_event: { eq: "0" } }
      limit: 4
    ) {
      edges {
        node {
          ...eventListing
        }
      }
    }

    past_events: allWordpressWpEvents(
      filter: { event_date: { lt: "2019-11-13" }, featured_event: { eq: "0" } }
      limit: 4
    ) {
      edges {
        node {
          ...eventListing
        }
      }
    }
    boaLogo: file(relativePath: { eq: "bankofamerica.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pattersonLogo: file(relativePath: { eq: "pattersoncompanies.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    googleLogo: file(relativePath: { eq: "googlepartner.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pulseCheckLogo: file(relativePath: { eq: "pulsecheckurgentcare.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    standardHeroBg: file(relativePath: { eq: "partnerships-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eventTimelineBg: file(relativePath: { eq: "event-timeline-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 858) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    defaultUpcomingImg: file(relativePath: { eq: "default-upcoming-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
