import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import he from "he"
import Img from "gatsby-image"
import { Link } from "gatsby"

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
import thinArrowRight from "../img/right-arrow.svg"

import "../styles/the-study.scss"
import { isContext } from "vm"

const ResponsivePostsColumnHeader = props => (
  <div className="col-sm-12 d-lg-none responsive-tab-trigger">
    <h3
      onClick={props.onClick}
      data-column="latest"
      className={
        (props.currentColumn === "latest" ? "active" : "") + " blog-heading"
      }
    >
      Latest Posts
    </h3>
    <h3
      onClick={props.onClick}
      data-column="popular"
      className={
        (props.currentColumn === "popular" ? "active" : "") + " blog-heading"
      }
    >
      Popular Posts
    </h3>
    <div className="spacer small solid" />
  </div>
)
const LatestPostsColumn = props => (
  <div
    className={
      (props.currentColumn === "latest" ? "active" : "hidden") +
      " col-sm-12 col-lg-8 latest-posts"
    }
  >
    {props.children}
  </div>
)
const PopularPostsColumn = props => (
  <div
    className={
      (props.currentColumn === "popular" ? "active" : "hidden") +
      " col-sm-12 col-md-12 col-lg-4 sidebar"
    }
  >
    {props.children}
  </div>
)

class ResponsivePostsColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentColumn: "latest",
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick(e) {
    this.setState({ currentColumn: e.currentTarget.dataset.column })
  }
  render() {
    //Add the current column to the child components
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { currentColumn: this.state.currentColumn })
    )
    return (
      <>
        <ResponsivePostsColumnHeader
          onClick={this.onClick}
          currentColumn={this.state.currentColumn}
        />
        {childrenWithProps}
      </>
    )
  }
}

const TheStudyPaginationPage = ({ data, pageContext }) => {
  //Isolate the blog and categories routes
  //This should be located globally, or the categories and archive page combined
  const postsPath = "/the-study/"
  const categoriesPaths = [
    {
      name: "Digital Marketing",
      slug: "digital-marketing",
      image: marketingCategoryImage,
    },
    {
      name: "Practice Management",
      slug: "practice-management",
      image: practiceManagementImage,
    },
    { name: "Genius Lab", slug: "genius-lab", image: geniusLabImage },
  ]
  // Variables for the next/prev button in pagination
  const isFirst = pageContext.currentPage === 1
  const isLast = pageContext.currentPage === pageContext.numPages
  const prevPage =
    pageContext.currentPage - 1 === 1
      ? "/the-study"
      : "/the-study/" + (pageContext.currentPage - 1).toString()
  const nextPage = "/the-study/" + (pageContext.currentPage + 1).toString()

  // Variables used in the pagination loop
  const currentPage = pageContext.currentPage
  const numPages = pageContext.numPages
  var start
  // Conditionals to choose where to start the pagination links
  if (numPages > 5) {
    if (currentPage - 2 >= 1 && currentPage + 2 <= numPages) {
      start = currentPage - 2
    } else if (currentPage - 2 < 1) {
      start = 1
    } else if (currentPage + 2 > numPages) {
      start = numPages - (pageContext.numPaginationLinks - 1)
    }
  } else {
    start = 1
  }

  return (
    <DefaultPageLayout>
      <Helmet>
        <title>Practice Management & Digital Marketing Blog | The Study</title>
        <meta
          name="description"
          content="Actionable advice on how to manage and market your local practice. Start getting the new patients your practice deserves. Practice growth starts here."
        />
      </Helmet>
      <div className="the-study">
        <div className="hero">
          {/* Hero will be a layout component */}

          <Container>
            <div className="valign-wrapper row">
              <div className="col-sm-12">
                <div className="hero-content accent-block">
                  <h1>Resources</h1>
                  <h2>
                    <span>The</span> Study
                  </h2>
                  <div className="accented-paragraph">
                    <p>
                      Providing news and education on all things regarding
                      Practice Management and Digital Marketing to help
                      jumpstart your Practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Main>
          <Container>
            <div className="row padded category">
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
              <ResponsivePostsColumn>
                <LatestPostsColumn>
                  <h3 className="blog-heading d-sm-none d-lg-block">
                    Latest Posts
                  </h3>
                  <div className=" d-sm-none spacer small solid" />

                  {data.latest.edges.map(({ node }) => {
                    // This combs the list of categories attached to a post and returns the first one matching our sleetced Categories
                    // The deprecated categories on dg.com like "DoctorGenius" were causing an error
                    const mainCategory = node.categories.find(c =>
                      categoriesPaths.find(d => d.name === c.name)
                    )
                    // console.log(mainCategory)
                    return (
                      <div className="latest-post">
                        <div className="featured-image-holder">
                          <a href={postsPath + node.slug}>
                            <Img
                              fluid={
                                node.featured_media.localFile.childImageSharp
                                  .fluid
                              }
                            />
                          </a>
                        </div>
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
                          <h4 className="title">
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
                                /<a.*?moretag.*?<\/a>/,
                                '... <a href="' +
                                  postsPath +
                                  node.slug +
                                  '" target="_blank">[ Read More ]</a>'
                              ),
                            }}
                          />
                          <p class="readmore-link"></p>
                        </div>
                      </div>
                    )
                  })}

                  <div className="pagination">
                    {// Controls the prev button
                    !isFirst && (
                      <Link to={prevPage} rel="prev">
                        <img src={leftChevron} alt="Navigate to Previous" />
                      </Link>
                    )}
                    {}
                    {// Loop to create pagination links based on numOfPages

                    Array.from(
                      { length: pageContext.numPaginationLinks },
                      (_, i) => (
                        <Link
                          key={`pagination-number${i + start}`}
                          to={`/the-study${
                            i + start - 1 === 0 ? "" : "/" + (i + start)
                          }`}
                        >
                          <p
                            className={
                              pageContext.currentPage === i + start
                                ? "active"
                                : ""
                            }
                          >
                            {i + start}
                          </p>
                        </Link>
                      )
                    )}
                    {// Controls the next button
                    !isLast && (
                      <Link to={nextPage} rel="next">
                        <img src={rightChevron} alt="Navigate to Next" />
                      </Link>
                    )}
                  </div>
                </LatestPostsColumn>
                <PopularPostsColumn>
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
                    <div className="newsletter row">
                      <div className="col-sm-12">
                        <div className="newsletter-signup">
                          <h4 className="newsletter-heading">Newsletter</h4>
                          <p>
                            Subscribe to our email newsletter for useful tips
                            and valuable resources.
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
                    <div className="row d-sm-none d-lg-block padded short-top short-bottom">
                      <div className="col-sm-12">
                        <h4 className="blog-heading ">Most Popular</h4>
                        <div className="d-md-none spacer small solid" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        {data.popular.edges.map(({ node }) => (
                          <a href={`/the-study/${node.slug}`}>
                            <div className="popular-post">
                              <div className="featured-image-holder">
                                {/*console.log(node)*/}
                                <Img
                                  fluid={
                                    node.featured_media.localFile
                                      .childImageSharp.fluid
                                  }
                                />
                              </div>
                              <div className="content-holder">
                                <p className="d-md-block d-lg-none details date">
                                  {node.date}
                                </p>
                                <h5 className="title">
                                  {he.decode(node.title)}
                                </h5>
                                <p className="d-md-none d-lg-block details date">
                                  {node.date}
                                </p>
                                <p
                                  className="excerpt d-md-block d-lg-none"
                                  dangerouslySetInnerHTML={{
                                    __html: node.excerpt.replace(
                                      /^\//,
                                      "/the-study"
                                    ),
                                  }}
                                />
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
                </PopularPostsColumn>
              </ResponsivePostsColumn>
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
              <div className="col-lg-1" />
              <div className="col-sm-11 col-md-6 offset-md-1 col-lg-5 offset-lg-0">
                <div className="content-block">
                  <div className="inner-title">
                    <h2>
                      Start your{" "}
                      <span className="font-weight-semibold">success </span>
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
              <div className="col-sm-11 col-md-5 col-lg-5">
                <div className="center">
                  <a href="/demo" className="button flat white-text">
                    Request Demo <img src={thinArrowRight} alt="Arrow Right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </Container>
        </Main>
      </div>
    </DefaultPageLayout>
  )
}

export default TheStudyPaginationPage

// Note: The graphQL variable here is automagically passed from gatsby-node.js in context
export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    latest: allWordpressPost(
      sort: { fields: [date], order: [DESC] }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          ...blogPost
        }
      }
    }
    popular: allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "Popular" } } } }
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
