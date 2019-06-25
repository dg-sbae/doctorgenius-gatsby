import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import Error500 from "../img/500.png"

import "../styles/500.scss"

class DG500Page extends React.Component {
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
          <DefaultPageLayout location={this.props["*"]}>
            <div className={`${this.props["*"]} page-500`}>
              <div className="hero">
                {/* Hero will be a layout component */}

                <Container>
                  <div className="valign-wrapper row">
                    <div className="col-sm-12 col-md-6 offset-md-3">
                      <div>
                        <div className="row">
                          <div className="col-sm-12.col-md-8.offset-md-2">
                            <img
                              className="error-500"
                              src={Error500}
                              alt="Error 500"
                            />
                          </div>
                        </div>
                        <div>
                          <h2>
                            <span>Something</span> Went Wrong
                          </h2>
                          <div className="accented-paragraph">
                            <p>
                              The server is currently unable to handle this
                              request.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6" />
                  </div>
                </Container>
              </div>
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
  query allPagesQuery500 {
    allSitePage(
      filter: { path: { ne: "/dev-404-page", regex: "//*/([^/]*)//" } }
    ) {
      nodes {
        path
      }
    }
  }
`
