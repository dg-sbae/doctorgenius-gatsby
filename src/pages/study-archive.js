import React from "react"
import { graphql } from "gatsby"
import he from "he"
import Img from "gatsby-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import marketingCategoryImage from "../img/digital-marketing-category-image-1.7x1.png"
import practiceManagementImage from "../img/practice-management-category-image-1.7x1.png"
import geniusLabImage from "../img/genius-lab-category-image-1.7x1.png"
import eventsPlaceholder from "../img/study-archive-events-placeholder-3x2.png"
import twitterIcon from "../img/twitter.svg"
import facebookIcon from "../img/facebook.svg"
import instagramIcon from "../img/instagram.svg"
import leftChevron from "../img/left-chevron.svg"
import rightChevron from "../img/right-chevron.svg"
import { FaArrowRight } from "react-icons/fa"

import "../styles/study-archive.scss"
import "../styles/global-styles.scss"

export default function({ data }) {
  //Isolate the blog route to a single variable:
  const postsPath = "/the-study/"

  return (
    <DefaultPageLayout>
      <div className="study-archive">
        <div className="hero">
          {/* Hero will be a layout component */}
          {/* @todo: Heros need a thin grey border underneath, not included in pic */}
          <Container>
            <div className="valign-wrapper row">
              <div className="col-sm-5">
                <div className="accent-block">
                  <h1>Resources</h1>
                  <h2>
                    The&nbsp;
                    <span class="font-weight-semibold">Study</span>
                  </h2>
                  <div className="accented-paragraph">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas commodo eu metus ut convallis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-7" />
            </div>
          </Container>
        </div>
        <Main>
          <Container>
            <div className="row padded">
              <div className="col-sm-12">
                <h3 class="blog-heading mb-2">Featured Posts</h3>
              </div>
              <div class="col-sm-4">
                <a href="$#CategoryPages">
                  <div class="category-image">
                    <img src={marketingCategoryImage} alt="Digital Marketing" />
                    <div class="label primary">
                      <p>Digital Marketing</p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-sm-4">
                <a href="$#CategoryPages">
                  <div class="category-image">
                    <img
                      src={practiceManagementImage}
                      alt="Practice Management"
                    />
                    <div class="label primary">
                      <p>Practice Management</p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-sm-4">
                <a href="$#CategoryPages">
                  <div class="category-image">
                    <img src={geniusLabImage} alt="Genius Lab" />
                    <div class="label primary">
                      <p>Genius Lab</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="row padded align-items-start short-top">
              <div class="col-sm-8 latest-posts">
                <h3 class="blog-heading ">Latest Posts</h3>
                <div class="spacer small solid" />
                {console.log(data)}
                {data.latest.edges.map(({ node }) => (
                  <div class="latest-post">
                    <a href={postsPath + node.slug}>
                      <div class="featured-image-holder">
                        <Img
                          fluid={
                            node.featured_media.localFile.childImageSharp.fluid
                          }
                        />
                      </div>
                    </a>
                    <div class="content-holder">
                      <div class="details">
                        <p class="date">{node.date}</p>
                        <p class="label mute">{node.categories[0].name}</p>
                      </div>
                      <h4 class="truncate">
                        <a class="not-a-link" href={postsPath + node.slug}>
                          {he.decode(node.title)}
                        </a>
                      </h4>
                      <p
                        class="excerpt"
                        dangerouslySetInnerHTML={{
                          __html: node.excerpt.replace(
                            /https:\/\/doctorgenius.com/,
                            "http://localhost:8000/"
                          ),
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div class="pagination">
                  <a href="$#PreviousPostsPage">
                    <img src={leftChevron} alt="Navigate to Previous" />
                  </a>
                  <a href="$#Page1">
                    <p class="active">1</p>
                  </a>
                  <a href="$#Page2">
                    <p>2</p>
                  </a>
                  <a href="$#Page3">
                    <p>3</p>
                  </a>
                  <a href="$#Page4">
                    <p>4</p>
                  </a>
                  <a href="$#Page5">
                    <p>5</p>
                  </a>
                  <a href="$#NextPostsPage">
                    <img src={rightChevron} alt="Navigate to Next" />
                  </a>
                </div>
              </div>
              <div class="col-sm-4 sidebar">
                <div class="stay-connected">
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="blog-heading ">Stay Connected</h3>
                      <div class="spacer small solid" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="social-icons-wrapper">
                        <div class="social-icon-detail">
                          <img
                            src={facebookIcon}
                            class="social-icon"
                            alt="Facebook"
                          />
                          <p>25k</p>
                          <p class="social-unit">Likes</p>
                        </div>
                        <div class="social-icon-detail">
                          <img
                            src={twitterIcon}
                            class="social-icon"
                            alt="Twitter"
                          />
                          <p>231k</p>
                          <p class="social-unit">Followers</p>
                        </div>
                        <div class="social-icon-detail">
                          <img
                            src={instagramIcon}
                            class="social-icon"
                            alt="Instagram"
                          />
                          <p>80k</p>
                          <p class="social-unit">Followers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="newsletter-signup">
                        <h4 class="newsletter-heading">Newsletter</h4>
                        <p>
                          Subscribe to our email newsletter for useful tips and
                          valuable resources.
                        </p>
                        <input type="text" />
                        <a href="$#submit" class="button rounder">
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="most-popular">
                  <div class="row">
                    <div class="col-sm-12">
                      <h4 class="blog-heading ">Most Popular</h4>
                      <div class="spacer small solid" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      {data.popular.edges.map(({ node }) => (
                        <a href={node.link}>
                          <div class="popular-post">
                            <div class="image-holder">
                              {console.log(node)}
                              <Img
                                fluid={
                                  node.featured_media.localFile.childImageSharp
                                    .fluid
                                }
                              />
                            </div>
                            <div class="content-holder">
                              <h5 class="title truncate">
                                {he.decode(node.title)}
                              </h5>
                              <p class="date">{node.date}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div class="category-section">
                  <div class="row">
                    <div class="col-sm-12">
                      <h4 class="blog-heading ">Category</h4>
                      <div class="spacer small solid" />
                      <a href="$#CategoryPage">
                        <span class="label primary">
                          <p>Genius Lab</p>
                        </span>
                      </a>
                      <a href="$#CategoryPage">
                        <span class="label primary">
                          <p>Practice Management</p>
                        </span>
                      </a>
                      <a href="$#CategoryPage">
                        <div class="label primary">
                          <p>Digital Marketing</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Begin Events component */}
            <div class="events-section">
              <div class="row padded tall-top">
                <div class="col-sm-12">
                  <div class="title-holder">
                    <h4 class="blog-heading">Webinars & Events</h4>
                    <div class="more-events">
                      <a href="$#MoreEvents">
                        View More
                        <img src={rightChevron} alt="View More Events" />
                      </a>
                    </div>
                  </div>
                  <div class="spacer solid small" />
                </div>
                {data.events.edges.map(({ node }) => (
                  <div class="col-sm-3">
                    <div class="event-wrapper">
                      <img src={eventsPlaceholder} alt="Recent Event" />
                    </div>
                    <a href={node.link}>
                      <p>{he.decode(node.title)}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* End Events component */}
            <div class="row padded tall-top request-demo-footer">
              <div className="col-sm-1" />
              <div class="col-sm-5">
                <div class="content-block">
                  <div class="inner-title">
                    <h2>
                      Start your{" "}
                      <span class="font-weight-semibold">success</span>
                      with Doctor Genius today!
                    </h2>
                    <div class="accented-paragraph">
                      <p class="s-thin">
                        The Genius platform makes every part of your company
                        process more efficient. Our support team is very excited
                        to help you and get your company on the right path of
                        success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="center">
                  <a href="/" className="button flat white-text">
                    Request Demo <FaArrowRight />
                  </a>
                </div>
              </div>
              <div className="col-sm-1" />
            </div>
          </Container>
        </Main>
      </div>
    </DefaultPageLayout>
  )
}

export const pageQuery = graphql`
  query {
    latest: allWordpressPost(
      sort: { fields: [date], order: [DESC] }
      limit: 5
    ) {
      totalCount
      edges {
        node {
          title
          excerpt
          slug
          type
          date(formatString: "MMMM D, YYYY")
          link
          featured_media {
            source_url
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            id
          }
          categories {
            id
            name
          }
          tags {
            name
          }
        }
      }
    }
    popular: allWordpressPost(
      sort: { fields: [date], order: [DESC] }
      limit: 4
    ) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MMMM D, YYYY")
          featured_media {
            source_url
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            id
          }
        }
      }
    }
    events: allWordpressWpEvents(
      sort: { fields: [date], order: [DESC] }
      limit: 4
    ) {
      edges {
        node {
          title
          date
          wordpress_id
          link
        }
      }
    }
  }
`

{
  /*

filter: { categories: {elemMatch: {name: {eq: "Events"} }  } }

  events: allWordpressPage(
    filter: { categories: {elemMatch: {wordpress_id: {eq: 90} }  } }
  ) {
    totalCount
    edges {
      node {

        title
        excerpt
        slug
        type
        date(formatString: "MMMM D, YYYY")

        featured_media {
          source_url
          localFile {
            id
          }
          id
        }
        categories  {
          id
          name
        }

        author {
          name
        }
      }
    }
  }
*/
}
