import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import he from "he"
import Img from "gatsby-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import twitterIcon from "../img/twitter.svg"
import facebookIcon from "../img/facebook.svg"
//import instagramIcon from "../img/instagram.svg"
//import youtubeIcon from "../img/youtube.svg"
import leftChevron from "../img/left-chevron.svg"
import rightChevron from "../img/right-chevron.svg"
import thinArrowRight from "../img/right-arrow.svg"

import "../styles/the-study-post.scss"

function PostPage({ pageContext, data, location }) {
  const categoriesPaths = [
    {
      name: "Digital Marketing",
    },
    {
      name: "Practice Management",
    },
    { name: "Genius Lab" },
  ]
  const post = data.currentPost

  const mainCategory = post.categories.find(c =>
    categoriesPaths.find(d => d.name === c.name)
  )

  //Create the two necessary parts of the blog post by splitting at the first paragraph
  const content = post.content.split(/(<p>.*?<\/p>)/)
  const intro = content.slice(1, 2).join()
  const remainder = content.slice(2).join("")

  let escapedTitle = post.title.replace(/\s/g, "+")
  let escapedLink = encodeURIComponent(location.href)

  let facebookShareLink =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    escapedLink +
    "&title=" +
    escapedTitle

  /* https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview.html */
  let twitterShareLink =
    "https://twitter.com/intent/tweet?text=Interesting%20Article:%20" +
    escapedTitle +
    "%20(from%20" +
    escapedLink +
    ")%20."
  // console.log()
  // let previousPost = (typeof(pageContext.prevNode) !== 'undefined' || pageContext.prevNode != null) ?
  const previousPost = pageContext.prevNode
    ? "/the-study/" + pageContext.prevNode.slug
    : null
  const nextPost = pageContext.nextNode
    ? "/the-study/" + pageContext.nextNode.slug
    : null
  /*
  let testIntro = content.slice(1, 2)
  console.log(content, testIntro, testIntro)
  let start = 1
  let end = 2
  while (
    testIntro[start] === "<p></p>" ||
    testIntro[start] === "<p>&nbsp;</p>" ||
    testIntro[start] === ""
  ) {
    console.log("test intro" + testIntro)
    start++
    testIntro = content.slice(start + 1, start + 2)
  }
  //const intro = content.slice(1, 2).join()
  const intro = testIntro
  const remainder = content.slice(2).join("")

  
  */

  return (
    <DefaultPageLayout location="the-study-post">
      {// Meta description for Genius Lab category post
      mainCategory.name === "Genius Lab" && (
        <Helmet>
          <title>Genius Lab Archives - Doctor Genius | Doctor Genius</title>
          <meta
            name="description"
            content="Actionable advice on how to manage and market your local practice. Start getting the new patients your practice deserves. Practice growth starts here."
          />
        </Helmet>
      )}

      {mainCategory.name !== "Genius Lab" && (
        <Helmet>
          <title>
            Practice Management & Digital Marketing Blog | The Study
          </title>
          <meta
            name="description"
            content="Actionable advice on how to manage and market your local practice. Start getting the new patients your practice deserves. Practice growth starts here."
          />
        </Helmet>
      )}

      <div className="page-wrapper">
        <div class="hero-padding" />
        <Main>
          <Container>
            <div className="row padded short-bottom">
              <div className="col-lg-1" />
              <div className="col-lg-8">
                <div className="pagination">
                  {previousPost != null ? (
                    <a href={previousPost}>
                      <img src={leftChevron} alt="Navigate to Previous" />
                      &nbsp;Back
                    </a>
                  ) : (
                    <p>&nbsp;</p>
                  )}
                  {nextPost != null ? (
                    <a href={nextPost}>
                      Next &nbsp;
                      <img src={rightChevron} alt="Navigate to Next" />
                    </a>
                  ) : (
                    <p>&nbsp;</p>
                  )}
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
            <div className="blog-header">
              <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-9">
                  <div className="row mobile-image-row">
                    <div className="col-xs-12">
                      <Img
                        fluid={
                          post.featured_media.localFile.childImageSharp.fluid
                        }
                      />
                    </div>
                  </div>
                  <div className="row upper-row">
                    <div class="col-lg-9 order-lg-1 order-sm-3">
                      <h1 className="title">{he.decode(post.title)}</h1>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 order-sm-1 order-lg-2">
                      <div className="label primary">
                        <p>{mainCategory.name}</p>
                      </div>
                    </div>

                    <div className="col-sm-12 col-lg-4 order-sm-4 order-lg-3">
                      <div className="byline">
                        <p className="date">{post.date}</p>
                        <p className="author">{post.author.name}</p>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 md-offset-4 col-lg-3 order-sm-1 order-lg-4">
                      <div className="share-icons">
                        <p>Share:</p>
                        <a href={facebookShareLink}>
                          {/* https://www.facebook.com/DoctorGeniusMarketing*/}
                          {/*https://www.facebook.com/sharer/sharer.php?u=
                        http%3A%2F%2Fstackoverflow.com
                        (http://stackoverflow.com)
                        %2Fq%2F20956229%2F1101509&picture=http%3A%2F%2Fwww.applezein.net%2Fwordpress%2Fwp-content%2Fuploads%2F2015%2F03%2Ffacebook-logo.jpg
                        (/q/)
                        &title=A+nice+question+about+Facebook
                        &quote=Does+anyone+know+if+there+have+been+recent+changes+which+could+have+suddenly+stopped+this+from+working%3F&description=Apparently%2C+the+accepted+answer+is+not+correct.
*/}
                          <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href={twitterShareLink}>
                          <img src={twitterIcon} alt="Twitter" />
                        </a>
                        {/*
                        <a href="https://www.instagram.com/doctor.genius/">
                          <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos">
                          <img src={youtubeIcon} alt="YouTube" />
                        </a>
                        */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1" />
                </div>
                <div className="col-lg-1" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="spacer solid" />
              </div>
              <div className="col-lg-1" />
            </div>
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-8">
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

            <div className="full-bleed-wrapper pad-md events">
              <div className="full-bleed grey-background" />
              <div className="full-bleed-content-wrapper">
                {/* Begin Events component */}
                <div className="events-section">
                  <div className="row padded tall-top">
                    <div className="col-lg-12">
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
                      <div className="col-lg-3">
                        <div className="event-wrapper">
                          <Img
                            fluid={data.eventsPlaceholder.childImageSharp.fluid}
                            alt="Recent Event"
                          />
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
            {/* Begin Demo Footer */}
            <div className="row padded tall-top request-demo-footer">
              <div className="col-md-1" />
              <div className="col-sm-9 col-md-5">
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
              <div className="col-sm-9 col-md-5">
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
export default PostPage

export const pageQuery = graphql`
  query($currentID: Int, $prevID: Int, $nextID: Int) {
    currentPost: wordpressPost(wordpress_id: { eq: $currentID }) {
      ...blogPost
      categories {
        name
      }
    }
    prevPost: wordpressPost(wordpress_id: { eq: $prevID }) {
      ...blogPost
    }
    nextPost: wordpressPost(wordpress_id: { eq: $nextID }) {
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
    eventsPlaceholder: file(
      relativePath: { eq: "study-archive-events-placeholder-3x2.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
