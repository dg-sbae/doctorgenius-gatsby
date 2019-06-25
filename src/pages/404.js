import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import "../styles/404.scss"

class DG404Page extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { pathname } = this.props.location
    const { data } = this.props
    const pagePaths = data.allSitePage.nodes.map(node => node.path)
    let newFilePath
    if (pathname === `/`) {
      newFilePath = `src/pages/index.js`
    } else if (pathname.slice(-1) === `/`) {
      newFilePath = `src/pages${pathname.slice(0, -1)}.js`
    } else {
      newFilePath = `src/pages${pathname}.js`
    }

    return (
      <div>
        {pagePaths.length > 0 && (
          <DefaultPageLayout location="the-study-post">
            <div className={`${this.props["*"]} page-404`}>
              <div className="hero">
                {/* Hero will be a layout component */}

                <Container>
                  <div className="valign-wrapper row">
                    <div className="col-sm-6">
                      <div className="hero-content">
                        <div className="hero-content accent-block">
                          <h1>404 Error</h1>
                          <h2>
                            <span>Resource</span> Not Found
                          </h2>
                          <div className="accented-paragraph">
                            <p>
                              The requested address or resource could not be
                              found on our server.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6" />>
                  </div>
                </Container>
              </div>
              <Main>
                <Container>
                  <div className="row padded tall-top short-bottom">
                    <div class="col-sm-12 col-md-10">
                      {pagePaths.length > 0 && (
                        <div>
                          <h2>We Apologize...</h2>
                          <p className="single-top-line">
                            If you were trying to reach another page, perhaps
                            you can find it below.
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
              </Main>
            </div>
          </DefaultPageLayout>
        )}
      </div>
    )
  }
}

export default DG404Page

export const pagesQuery = graphql`
  query allPagesQuery {
    allSitePage(
      filter: { path: { ne: "/dev-404-page", regex: "//*/([^/]*)//" } }
    ) {
      nodes {
        path
      }
    }
  }
`
