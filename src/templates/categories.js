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

import "../styles/the-study.scss"
import "../styles/global-styles.scss"

const CategoriesPage = ({ data, pageContext }) => {
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
              <div className="col-sm-5">
                <div className="hero-content">
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
              {categoriesPaths.map(category => (
                <div class="col-sm-4">
                  <a href={postsPath + category.slug}>
                    <div class="category-image">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="img-responsive"
                      />
                      <div class="label primary">
                        <p>{category.name}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div class="row padded align-items-start short-top">
              <div class="col-sm-8 latest-posts">
                <h3 class="blog-heading ">{pageContext.name} Posts</h3>
                <div class="spacer small solid" />
                {data.category.edges.map(({ node }) => {
                  // This combs the list of categories attached to a post and returns the first one matching our sleetced Categories
                  // The deprecated categories on dg.com like "DoctorGenius" were causing an error
                  const mainCategory = node.categories.find(c =>
                    categoriesPaths.find(d => d.name === c.name)
                  )
                  console.log(mainCategory)
                  return (
                    <div class="latest-post">
                      <a href={postsPath + node.slug}>
                        <div class="featured-image-holder">
                          <Img
                            fluid={
                              node.featured_media.localFile.childImageSharp
                                .fluid
                            }
                          />
                        </div>
                      </a>
                      <div class="content-holder">
                        <div class="details">
                          <p class="date">{node.date}</p>
                          <p class="label mute">
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
                  )
                })}

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
                      {categoriesPaths.map(category => (
                        <a href={postsPath + category.slug}>
                          <span class="label primary">
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

export default CategoriesPage

// Note: The graphQL variable here is automagically passed from gatsby-node.js in context
export const pageQuery = graphql`
  query($name: String) {
    category: allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: $name } } } }
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
