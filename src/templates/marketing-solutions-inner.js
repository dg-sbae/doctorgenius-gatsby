import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import contentMarketingIcon from "../img/contract.svg"
import responsiveWebsitesIcon from "../img/website.svg"
import digitalAdvertisingIcon from "../img/digital-advertising.svg"
import onlineReputationIcon from "../img/online-reputation.svg"
import ourTechnologyIcon from "../img/our-technology.svg"
import hostingSolutionsIcon from "../img/hosting-solutions.svg"
//import lighthouseResult from "../img/lighthouse-result.png"

import "../styles/marketing-solutions-inner.scss"
import "../styles/global-styles.scss"

export default props => {
  /* These will likely need to be dynamic props */
  const pageTitle = "Responsive Websites"
  const pageSubtitle = "<span>Design that leaves a lasting</span> impression."
  const pageIntro =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat nunc, et venenatis felis. Lorem ipsum dolor sit amet, con."

  // For now all inner pages will have the same hero image, so this will be in the sass
  //const heroImage = "/hero/marketing-solutions-subpage.png"

  const contentRows = props.contentRows
  const currentPage = props.page

  return (
    <DefaultPageLayout>
      <div className={props["*"] + " marketing-solutions-inner"}>
        <div className="hero">
          {/* Hero will be a layout component */}
          {/* @todo: Heros need a thin grey border underneath, not included in pic */}
          <Container>
            <div className="valign-wrapper row">
              <div className="col-sm-12">
                <div className="hero-content accent-block">
                  <h1>{pageTitle}</h1>
                  <h2 dangerouslySetInnerHTML={{ __html: pageSubtitle }} />
                  <div className="accented-paragraph">
                    <p>{pageIntro}</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Main>
          <Container>
            {/* Begin secondary nav Component: */}
            <div className="row">
              <div className="col-sm-12 panel-row">
                <div className="secondary-nav-target">
                  <div className="secondary-nav">
                    <div
                      className={
                        (currentPage === "/marketing-solutions/websites/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/marketing-solutions/websites/">
                          <img
                            className="img-icon"
                            src={responsiveWebsitesIcon}
                            alt="Responsive Websites"
                          />
                        </a>
                      </div>
                      <p>Responsive Websites</p>
                    </div>
                    <div
                      className={
                        (currentPage ===
                        "/marketing-solutions/content-marketing/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/marketing-solutions/content-marketing/">
                          <img
                            className="img-icon"
                            src={contentMarketingIcon}
                            alt="Content Marketing"
                          />
                        </a>
                      </div>
                      <p>Content Marketing</p>
                    </div>
                    <div
                      className={
                        (currentPage ===
                        "/marketing-solutions/digital-advertising/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/marketing-solutions/digital-advertising/">
                          <img
                            className="img-icon"
                            src={digitalAdvertisingIcon}
                            alt="Digital Advertising"
                          />
                        </a>
                      </div>
                      <p>Digital Advertising</p>
                    </div>
                    <div
                      className={
                        (currentPage ===
                        "/marketing-solutions/online-reputation-management/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/marketing-solutions/online-reputation-management/">
                          <img
                            className="img-icon"
                            src={onlineReputationIcon}
                            alt="Online Reputation"
                          />
                        </a>
                      </div>
                      <p>Online Reputation</p>
                    </div>
                    <div
                      className={
                        (currentPage === "/marketing-solutions/our-technology/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/marketing-solutions/our-technology/">
                          <img
                            className="img-icon"
                            src={ourTechnologyIcon}
                            alt="Our Technology"
                          />
                        </a>
                      </div>
                      <p>Our Technology</p>
                    </div>
                    <div
                      className={
                        (currentPage ===
                        "/marketing-solutions/hosting-solutions/"
                          ? "active "
                          : "") + "panel"
                      }
                    >
                      <div className="icon-wrapper">
                        <a href="/marketing-solutions/hosting-solutions/">
                          <img
                            className="img-icon"
                            src={hostingSolutionsIcon}
                            alt="Hosting Solutions"
                          />
                        </a>
                      </div>
                      <p>Hosting Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End secondary nav Component */}
            {/* Begin Split Row of content and image */}
            {contentRows.map((row, index) => (
              <div
                class={
                  (index % 2 ? "even-row" : "odd-row") +
                  " row padded short-top short-bottom"
                }
              >
                <div
                  className={(index % 2 ? "order-sm-12" : "") + " col-sm-1"}
                />
                <div class={(index % 2 ? "order-sm-6" : "") + " col-sm-5"}>
                  <div className="content-block">
                    <div className="icon-strapline">
                      <img
                        src={row.content.icon.url}
                        className="link-icon"
                        alt={row.content.icon.alt}
                      />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: row.content.icon.title,
                        }}
                      />
                    </div>
                    <div className="inner-title">
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: row.content.innerTitle,
                        }}
                      />
                    </div>
                    <div className="accented-paragraph">
                      <p
                        className="s-thin"
                        dangerouslySetInnerHTML={{
                          __html: row.content.paragraph,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class={(index % 2 ? "order-sm-2" : "") + " col-sm-5"}>
                  <img
                    className="img-responsive"
                    src={row.image.url}
                    alt={row.image.alt}
                  />
                </div>
                <div
                  className={(index % 2 ? "order-sm-1" : "") + " col-sm-1"}
                />
              </div>
            ))}
            {/* End Split Row of content and image */}
          </Container>
        </Main>
      </div>
    </DefaultPageLayout>
  )
}
