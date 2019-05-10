import React from "react"
import { graphql } from "gatsby"
import he from "he"
import Img from "gatsby-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import eventsPlaceholder from "../img/study-archive-events-placeholder-3x2.png"
import twitterIcon from "../img/twitter.svg"
import facebookIcon from "../img/facebook.svg"
import instagramIcon from "../img/instagram.svg"
import youtubeIcon from "../img/youtube.svg"
import leftChevron from "../img/left-chevron.svg"
import rightChevron from "../img/right-chevron.svg"
import thinArrowRight from "../img/right-arrow.svg"

import "../styles/the-study-post.scss"

function PostPage({ pageContext, data }) {
  const post = data.currentPost

  //Create the two necessary parts of the blog post by splitting at the first paragraph
  const content = post.content.split(/(<p>.*?<\/p>)/)
  const intro = content.slice(1, 2).join()
  const remainder = content.slice(2).join("")

  console.log(intro, remainder)

  return (
    <DefaultPageLayout>
      <div className="the-study-post">
        <Main>
          <Container>
            <div className="row padded short-bottom">
              <div className="col-lg-1" />
              <div className="col-sm-8">
                <div className="pagination">
                  <a href="/intentional-404/PreviousPostsPage">
                    <img src={leftChevron} alt="Navigate to Previous" />
                    &nbsp;Back
                  </a>
                  <a href="/intentional-404/NextPostsPage">
                    Next &nbsp;
                    <img src={rightChevron} alt="Navigate to Next" />
                  </a>
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
            <div className="blog-header">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-sm-8">
                  <div className="upper-row">
                    <h1 className="title">{he.decode(post.title)}</h1>
                    <div className="label primary">
                      <p>Practice Management</p>
                    </div>
                  </div>
                  <div className="lower-row">
                    <div className="byline">
                      <p className="date">{post.date}</p>
                      <p className="author">{post.author.name}</p>
                    </div>
                    <div className="share-icons">
                      <p>Share:</p>
                      <a href="https://www.facebook.com/DoctorGeniusMarketing">
                        <img src={facebookIcon} alt="Facebook" />
                      </a>
                      <a href="https://twitter.com/DoctorGeniusCA">
                        <img src={twitterIcon} alt="Twitter" />
                      </a>
                      <a href="https://www.instagram.com/doctor.genius/">
                        <img src={instagramIcon} alt="Instagram" />
                      </a>
                      <a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos">
                        <img src={youtubeIcon} alt="YouTube" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-sm-10">
                <div className="spacer solid" />
              </div>
              <div className="col-lg-1" />
            </div>
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-sm-8">
                <div className="blog-content">
                  <div
                    className="intro"
                    dangerouslySetInnerHTML={{ __html: intro }}
                  />

                  <div className="featured-image">
                    <Img
                      fluid={
                        post.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                  </div>
                  <div
                    className="remainder"
                    dangerouslySetInnerHTML={{ __html: remainder }}
                  />
                </div>
              </div>
              <div className="col-lg-1" />
            </div>

            <div className="full-bleed-wrapper pad-md">
              <div className="full-bleed grey-background" />
              <div className="full-bleed-content-wrapper">
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
              </div>
            </div>
            <div className="row padded tall-top request-demo-footer">
              <div className="col-lg-1" />
              <div className="col-sm-6 col-lg-5">
                <div className="content-block">
                  <div className="inner-title">
                    <h2>
                      Start your
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
              <div className="col-sm-6 col-lg-5">
                <div className="center">
                  <a href="/" className="button flat white-text">
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
export default PostPage

export const pageQuery = graphql`
  query($wordpress_id: Int) {
    currentPost: wordpressPost(wordpress_id: { eq: $wordpress_id }) {
      ...blogPost
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
  }
`
