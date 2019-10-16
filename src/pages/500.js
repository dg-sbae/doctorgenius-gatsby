import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import DefaultPageLayout from "../components/DefaultPageLayout"
//import Main from "../components/main-content"
import Container from "../components/Container"
import BackgroundImage from "gatsby-background-image"

import "../styles/500.scss"
import PageStyles from "./505.module.scss"

class DG500Page extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  /*constructor(props) {
    super(props)
  } */

  render() {
    const { data } = this.props
    const pagePaths = data.allSitePage.nodes.map(node => node.path)

    return (
      <div className={PageStyles.fiveZeroFivePage}>
        {pagePaths.length > 0 && (
          <DefaultPageLayout location="the-study-post">
            <div className={`${this.props["*"]} page-500`}>
              <BackgroundImage
                fluid={data.heroBg.childImageSharp.fluid}
                className={PageStyles.gbi500 + " gbi-500"}
              >
                <div className={PageStyles.hero + " hero"}>
                  {/* Hero will be a layout component */}

                  <Container>
                    <div className="valign-wrapper row">
                      <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                        <div>
                          <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <h1 className="text-center">500</h1>
                              <h2 className="text-center">
                                OOPS! INTERNAL SERVICE ERROR
                              </h2>
                              <p className="text-center accented-paragraph">
                                The page you are looking for might have been
                                removed had its changed or is temporarily
                                unavailable. &nbsp;
                                <Link to="/">Return to homepage</Link>
                              </p>
                              <div class="row">
                                <div
                                  class={
                                    PageStyles.sm500 +
                                    " col-sm-12 text-center sm-500"
                                  }
                                >
                                  <a href="https://www.facebook.com/DoctorGeniusMarketing">
                                    <img
                                      src={
                                        data.facebook.childImageSharp.fixed.src
                                      }
                                      alt="Facebook Icons"
                                    />
                                  </a>
                                  <a href="https://twitter.com/DoctorGeniusCA">
                                    <img
                                      src={
                                        data.twitter.childImageSharp.fixed.src
                                      }
                                      alt="Twitter Icon"
                                    />
                                  </a>
                                  <a href="https://www.instagram.com/doctor.genius/">
                                    <img
                                      src={
                                        data.instagram.childImageSharp.fixed.src
                                      }
                                      alt="Instagram Icon"
                                    />
                                  </a>
                                  <a href="https://www.linkedin.com/company/doctor-genius">
                                    <img
                                      src={
                                        data.linkedin.childImageSharp.fixed.src
                                      }
                                      alt="Linkedin Icon"
                                    />
                                  </a>
                                  <a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos">
                                    <img
                                      src={
                                        data.youtube.childImageSharp.fixed.src
                                      }
                                      alt="Youtube Icon"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6" />
                    </div>
                  </Container>
                </div>
              </BackgroundImage>
              {/*<Main>
                <Container>
                  <div className="row padded tall-top short-bottom">
                    <div class="col-sm-12 col-md-10">
                      {pagePaths.length > 0 && (
                        <div>
                          <h2>We Apologize...</h2>
                          <p className="single-top-line">
                            An unexpected error has occured. You can try
                            refreshing the page, or maybe try one of these links
                            below.
                          </p>
                          <h2>Pages ({pagePaths.length})</h2>
                          <ul>
                            {pagePaths.map(pagePath => (
                              <li key={pagePath}>
                                <Link to={pagePath}>{pagePath}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </Container>
            </Main> */}
            </div>
          </DefaultPageLayout>
        )}
      </div>
    )
  }
}

export default DG500Page

export const pagesQuery = graphql`
  query {
    allSitePage(
      filter: { path: { ne: "/dev-404-page", regex: "//*/([^/]*)//" } }
    ) {
      nodes {
        path
      }
    }
    facebook: file(relativePath: { eq: "facebook-blue.png" }) {
      childImageSharp {
        fixed(width: 27) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitter: file(relativePath: { eq: "twitter-blue.png" }) {
      childImageSharp {
        fixed(width: 27) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    instagram: file(relativePath: { eq: "instagram-blue.png" }) {
      childImageSharp {
        fixed(width: 27) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    linkedin: file(relativePath: { eq: "linkedin-blue.png" }) {
      childImageSharp {
        fixed(width: 27) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    youtube: file(relativePath: { eq: "youtube-blue.png" }) {
      childImageSharp {
        fixed(width: 27) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    heroBg: file(relativePath: { eq: "500-error.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
