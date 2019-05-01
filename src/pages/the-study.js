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
//import popularPostsPlaceholder from "../img/study-archive-square-thumbnail-placeholder.png"
//import latestPostsPlaceholder from "../img/blog-archive-placeholder-3x2.png"
import twitterIcon from "../img/twitter.svg"
import facebookIcon from "../img/facebook.svg"
import instagramIcon from "../img/instagram.svg"
import leftChevron from "../img/left-chevron.svg"
import rightChevron from "../img/right-chevron.svg"
import thinArrowRight from "../img/right-arrow.svg"

import "../styles/the-study.scss"
import "../styles/global-styles.scss"

export default function({ data }) {
  //Isolate the blog and categories routes
  //This should be located globally, or the categories and archive page combined
  const postsPath = "/the-study/"
  const categoriesPaths = [
    {
      name: "Digital Marketing",
      slug: "digital-marketing/",
      image: marketingCategoryImage,
    },
    {
      name: "Practice Management",
      slug: "practice-management/",
      image: practiceManagementImage,
    },
    { name: "Genius Lab", slug: "genius-lab/", image: geniusLabImage },
  ]

  return (
    <DefaultPageLayout>
      <div className="the-study">
        <div className="hero">
          {/* Hero will be a layout component */}
          {/* @todo: Heros need a thin grey border underneath, not included in pic */}
          <Container>
            <div className="valign-wrapper row">
              <div className="col-sm-12">
                <div className="hero-content accent-block">
                  <h1>Resources</h1>
                  <h2>
                    The&nbsp;
                    <span>Study</span>
                  </h2>
                  <div className="accented-paragraph">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas commodo eu metus ut convallis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Main>
          <Container>
            <div className="row padded">
              {categoriesPaths.map(category => (
                <div className="col-sm-4">
                  <a href={postsPath + category.slug}>
                    <div className="category-image">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="img-responsive"
                      />
                      <div className="label primary">
                        <p>{category.name}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="row padded align-items-start short-top">
              <div className="col-sm-8 latest-posts">
                <h3 className="blog-heading ">Latest Posts</h3>
                <div className="spacer small solid" />

                {data.latest.edges.map(({ node }) => {
                  // This combs the list of categories attached to a post and returns the first one matching our sleetced Categories
                  // The deprecated categories on dg.com like "DoctorGenius" were causing an error
                  const mainCategory = node.categories.find(c =>
                    categoriesPaths.find(d => d.name === c.name)
                  )
                  console.log(mainCategory)
                  return (
                    <div className="latest-post">
                      <a href={postsPath + node.slug}>
                        <div className="featured-image-holder">
                          <Img
                            fluid={
                              node.featured_media.localFile.childImageSharp
                                .fluid
                            }
                          />
                        </div>
                      </a>
                      <div className="content-holder">
                        <div className="details">
                          <p className="date">{node.date}</p>
                          <p className="label mute">
                            <a
                              href={
                                // This selects the slug from the categories array matching the mainCategory found above
                                postsPath +
                                categoriesPaths.find(
                                  i => i.name === mainCategory.name
                                ).slug
                              }
                            >
                              {mainCategory.name}
                            </a>
                          </p>
                        </div>
                        <h4>
                          <a
                            className="not-a-link"
                            href={postsPath + node.slug}
                          >
                            {he.decode(node.title)}
                          </a>
                        </h4>
                        <p
                          className="excerpt"
                          dangerouslySetInnerHTML={{
                            __html: node.excerpt.replace(
                              /https:\/\/doctorgenius.com/,
                              "http://localhost:8000/"
                            ),
                          }}
                        />
                      </div>
                    </div>
                  )
                })}

                <div className="pagination">
                  <a href="/intentional-404/">
                    <img src={leftChevron} alt="Navigate to Previous" />
                  </a>
                  <a href="/intentional-404/">
                    <p className="active">1</p>
                  </a>
                  <a href="/intentional-404/">
                    <p>2</p>
                  </a>
                  <a href="/intentional-404/">
                    <p>3</p>
                  </a>
                  <a href="/intentional-404/">
                    <p>4</p>
                  </a>
                  <a href="/intentional-404/">
                    <p>5</p>
                  </a>
                  <a href="/intentional-404/NextPostsPage">
                    <img src={rightChevron} alt="Navigate to Next" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 sidebar">
                <div className="stay-connected">
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="blog-heading ">Stay Connected</h3>
                      <div className="spacer small solid" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="social-icons-wrapper">
                        <div className="social-icon-detail">
                          <img
                            src={facebookIcon}
                            className="social-icon"
                            alt="Facebook"
                          />
                          <p>25k</p>
                          <p className="social-unit">Likes</p>
                        </div>
                        <div className="social-icon-detail">
                          <img
                            src={twitterIcon}
                            className="social-icon"
                            alt="Twitter"
                          />
                          <p>231k</p>
                          <p className="social-unit">Followers</p>
                        </div>
                        <div className="social-icon-detail">
                          <img
                            src={instagramIcon}
                            className="social-icon"
                            alt="Instagram"
                          />
                          <p>80k</p>
                          <p className="social-unit">Followers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="newsletter-signup">
                        <h4 className="newsletter-heading">Newsletter</h4>
                        <p>
                          Subscribe to our email newsletter for useful tips and
                          valuable resources.
                        </p>
                        <input type="text" />
                        <a
                          href="/intentional-404/newslettersubmit"
                          className="button rounder"
                        >
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="most-popular">
                  <div className="row">
                    <div className="col-sm-12">
                      <h4 className="blog-heading ">Most Popular</h4>
                      <div className="spacer small solid" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      {data.popular.edges.map(({ node }) => (
                        <a href={node.link}>
                          <div className="popular-post">
                            <div className="image-holder">
                              {console.log(node)}
                              <Img
                                fluid={
                                  node.featured_media.localFile.childImageSharp
                                    .fluid
                                }
                              />
                            </div>
                            <div className="content-holder">
                              <h5 className="title truncate">
                                {he.decode(node.title)}
                              </h5>
                              <p className="date">{node.date}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="category-section">
                  <div className="row">
                    <div className="col-sm-12">
                      <h4 className="blog-heading ">Category</h4>
                      <div className="spacer small solid" />
                      {categoriesPaths.map(category => (
                        <a href={postsPath + category.slug}>
                          <span className="label primary">
                            <p>{category.name}</p>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Begin Events component */}
            <div className="events-section">
              <div className="row padded tall-top">
                <div className="col-sm-12">
                  <div className="title-holder">
                    <h4 className="blog-heading">Webinars & Events</h4>
                    <div className="more-events">
                      <a href="/intentional-404/MoreEvents">
                        View More
                        <img src={rightChevron} alt="View More Events" />
                      </a>
                    </div>
                  </div>
                  <div className="spacer solid small" />
                </div>
                {data.events.edges.map(({ node }) => (
                  <div className="col-sm-3">
                    <div className="event-wrapper">
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
            <div className="row padded tall-top request-demo-footer">
              <div className="col-sm-1" />
              <div className="col-sm-5">
                <div className="content-block">
                  <div className="inner-title">
                    <h2>
                      Start your{" "}
                      <span className="font-weight-semibold">success</span>
                      with Doctor Genius today!
                    </h2>
                    <div className="accented-paragraph">
                      <p className="s-thin">
                        The Genius platform makes every part of your company
                        process more efficient. Our support team is very excited
                        to help you and get your company on the right path of
                        success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="center">
                  <a href="/" className="button flat white-text">
                    Request Demo <img src={thinArrowRight} alt="Arrow Right" />
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
          ...blogPost
        }
      }
    }
    popular: allWordpressPost(
      sort: { fields: [date], order: [DESC] }
      limit: 4
    ) {
      edges {
        node {
          ...blogPost
        }
      }
    }
    events: allWordpressWpEvents(
      sort: { fields: [date], order: [DESC] }
      limit: 4
    ) {
      edges {
        node {
          ...recentEvent
        }
      }
    }
    selectedCategories: allWordpressCategory(
      filter: {
        name: { in: ["Genius Lab", "Practice Management", "Digital Marketing"] }
      }
    ) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
