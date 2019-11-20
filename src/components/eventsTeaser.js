import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./events-teaser.module.scss"
import rightChevron from "../img/right-chevron.svg"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        events: allWordpressWpEvents(
          sort: { fields: [date], order: [DESC] }
          limit: 4
        ) {
          edges {
            node {
              ...eventListing
            }
          }
        }
      }
    `}
    render={data => (
      <div className="events-section">
        <div className="row padded medium-top">
          <div className="col-lg-12">
            <div className="title-holder">
              <h4 className="blog-heading">Webinars & Events</h4>
              <div className="more-events">
                <Link to={"/events"}>
                  View More
                  <img src={rightChevron} alt="View More Events" />
                </Link>
              </div>
            </div>
            <div className="spacer solid small" />
          </div>
          {data.events.edges.map(({ node }) => (
            <div className="col-lg-3">
              <Link
                to={`/events/` + node.slug}
                className={styles.hoverUnderline}
              >
                <div className="event-wrapper">
                  <Img
                    fluid={
                      node.all_image_urls.hero_image_url.localFile
                        .childImageSharp.fluid
                    }
                    alt="Recent Event"
                  />
                </div>

                <p>{node.event_title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )}
  />
)
