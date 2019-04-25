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
import { FaArrowRight } from "react-icons/fa"

import "../styles/the-study-post.scss"
import "../styles/global-styles.scss"

function PostPage({ pageContext, data }) {
  //Create the two necessary parts of the blog post by splitting at the first paragraph
  const content = pageContext.content.split(/(<p>.*?<\/p>)/)
  const intro = content.slice(1, 2).join()
  const remainder = content.slice(2).join("")

  console.log(intro, remainder)

  return (
    <DefaultPageLayout>
      <div className="study-single-post">
        <Main>
          <Container>
            <div className="row padded short-bottom">
              <div class="col-sm-1" />
              <div class="col-sm-8">
                <div class="pagination">
                  <a href="$#PreviousPostsPage">
                    <img src={leftChevron} alt="Navigate to Previous" />
                    &nbsp;Back
                  </a>
                  <a href="$#NextPostsPage">
                    Next &nbsp;
                    <img src={rightChevron} alt="Navigate to Next" />
                  </a>
                </div>
              </div>
              <div class="col-sm-1" />
            </div>
            <div class="blog-header">
              <div className="row">
                <div class="col-sm-1" />
                <div class="col-sm-8">
                  <div class="upper-row">
                    <h1 class="title">{he.decode(pageContext.title)}</h1>
                    <div class="label primary">
                      <p>Practice Management</p>
                    </div>
                  </div>
                  <div class="lower-row">
                    <div class="byline">
                      <p class="date">{pageContext.date}</p>
                      <p class="author">{pageContext.author.name}</p>
                    </div>
                    <div class="share-icons">
                      <p>Share:</p>
                      <a href="$#">
                        <img src={facebookIcon} alt="Facebook" />
                      </a>
                      <a href="$#">
                        <img src={twitterIcon} alt="Twitter" />
                      </a>
                      <a href="$#">
                        <img src={instagramIcon} alt="Instagram" />
                      </a>
                      <a href="$#">
                        <img src={youtubeIcon} alt="YouTube" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-1" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-1" />
              <div class="col-sm-10">
                <div class="spacer solid" />
              </div>
              <div class="col-sm-1" />
            </div>
            <div class="row">
              <div class="col-sm-1" />
              <div class="col-sm-8">
                <div class="blog-content">
                  <div
                    class="intro"
                    dangerouslySetInnerHTML={{ __html: intro }}
                  />

                  <div class="featured-image">
                    <Img
                      fluid={
                        pageContext.featured_media.localFile.childImageSharp
                          .fluid
                      }
                    />
                  </div>
                  <div
                    className="remainder"
                    dangerouslySetInnerHTML={{ __html: remainder }}
                  />
                </div>
              </div>
              <div class="col-sm-1" />
            </div>

            <div className="full-bleed-wrapper pad-md">
              <div className="full-bleed grey-background" />
              <div className="full-bleed-content-wrapper">
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
              </div>
            </div>
            <div class="row padded tall-top request-demo-footer">
              <div className="col-sm-1" />
              <div class="col-sm-5">
                <div class="content-block">
                  <div class="inner-title">
                    <h2>
                      Start your
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
export default PostPage

export const pageQuery = graphql`
  query {
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
