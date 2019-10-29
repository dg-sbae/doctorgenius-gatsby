import React from "react"
import { Helmet } from "react-helmet"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import MobileSecondaryNav from "../components/MobileSecondaryNav"

import contentMarketingIcon from "../img/contract.svg"
import responsiveWebsitesIcon from "../img/website.svg"
import digitalAdvertisingIcon from "../img/digital-advertising.svg"
import onlineReputationIcon from "../img/online-reputation.svg"
import ourTechnologyIcon from "../img/our-technology.svg"
import hostingSolutionsIcon from "../img/hosting-solutions.svg"

import "../styles/marketing-solutions-inner.scss"
import PageStyles from "./marketing-solutions-inner.module.scss"
import RowStyles from "../components/Row.module.scss"

export default props => {
  /* These will likely need to be dynamic props */
  const pageTitle = props.pageTitle
  const pageSubtitle = props.pageSubtitle
  const pageIntro = props.pageIntro
  const metaTitle = props.metaTitle
  const metaDescription = props.metaDescription
  const contentRows = props.contentRows
  const currentPage = props.page
  const heroBackgroundImage = props.backgroundImage

  return (
    <div
      className={
        PageStyles.marketingSolutionsInnerPage + " " + RowStyles.rowStyling
      }
    >
      <DefaultPageLayout>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
        <div className={props.page + " marketing-solutions-inner"}>
          <BackgroundImage fluid={heroBackgroundImage}>
            <div className="hero">
              {/* Hero will be a layout component */}

              <Container>
                <div className={RowStyles.row + " valign-wrapper"}>
                  <div className="col-sm-12">
                    <div
                      className={
                        PageStyles.heroContent + " hero-content accent-block"
                      }
                    >
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
          </BackgroundImage>
          <Main>
            <Container>
              {/* Begin secondary nav Component: */}
              <div className={RowStyles.row}>
                <div className="col-sm-12 panel-row">
                  <div className="secondary-nav-target">
                    <div className="secondary-nav">
                      <div
                        className={
                          (currentPage === "responsive-websites"
                            ? "active "
                            : "") + "panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/marketing-solutions/websites">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
                              src={responsiveWebsitesIcon}
                              alt="Responsive Websites"
                            />
                          </a>
                        </div>
                        <p>Responsive Websites</p>
                      </div>
                      <div
                        className={
                          (currentPage === "content-marketing"
                            ? "active "
                            : "") + "panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/marketing-solutions/content-marketing">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
                              src={contentMarketingIcon}
                              alt="Content Marketing"
                            />
                          </a>
                        </div>
                        <p>Content Marketing</p>
                      </div>
                      <div
                        className={
                          (currentPage === "digital-advertising"
                            ? "active "
                            : "") + "panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/marketing-solutions/digital-advertising">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
                              src={digitalAdvertisingIcon}
                              alt="Digital Advertising"
                            />
                          </a>
                        </div>
                        <p>Digital Advertising</p>
                      </div>
                      <div
                        className={
                          (currentPage === "online-reputation"
                            ? "active "
                            : "") + "panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/marketing-solutions/online-reputation-management">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
                              src={onlineReputationIcon}
                              alt="Online Reputation"
                            />
                          </a>
                        </div>
                        <p>Online Reputation</p>
                      </div>
                      <div
                        className={
                          (currentPage === "our-technology" ? "active " : "") +
                          "panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/marketing-solutions/our-technology">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
                              src={ourTechnologyIcon}
                              alt="Our Technology"
                            />
                          </a>
                        </div>
                        <p>Our Technology</p>
                      </div>
                      <div
                        className={
                          (currentPage === "hosting-solutions"
                            ? "active "
                            : "") + "panel"
                        }
                      >
                        <div
                          className={PageStyles.iconWrapper + " icon-wrapper"}
                        >
                          <a href="/marketing-solutions/hosting-solutions">
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
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
              {/* Begin mobile secondary navigation component */}
              <MobileSecondaryNav
                parentPage="marketingSolutions"
                titleItem={pageTitle}
              />
              {/* End mobile secondary navigation component */}
              {/* Begin Split Row of content and image */}
              {contentRows.map((row, index) => (
                <div
                  className={
                    (index % 2 ? "even-row " : "odd-row ") +
                    RowStyles.row +
                    " " +
                    RowStyles.padded +
                    " " +
                    RowStyles.shortTop +
                    " " +
                    RowStyles.shortBottom
                  }
                >
                  <div
                    className={
                      (index % 2 ? "order-md-1" : "order-md-1") + " col-md-1"
                    }
                  />
                  <div
                    className={
                      (index % 2
                        ? "order-sm-2 order-md-3"
                        : "order-sm-2 order-md-2") + " col-sm-9 col-md-5"
                    }
                  >
                    <div className="content-block">
                      <div
                        className={PageStyles.iconStrapline + " icon-strapline"}
                      >
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
                      <div className={PageStyles.innerTitle + " inner-title"}>
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: row.content.innerTitle,
                          }}
                        />
                      </div>
                      <div
                        className={
                          PageStyles.accentedParagraph + " accented-paragraph"
                        }
                      >
                        <p
                          className="s-thin"
                          dangerouslySetInnerHTML={{
                            __html: row.content.paragraph,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      (index % 2
                        ? "order-sm-1 order-md-2"
                        : "order-sm-1 order-md-3") + " col-sm-12 col-md-5"
                    }
                  >
                    <img
                      className="img-responsive"
                      src={row.image.url}
                      alt={row.image.alt}
                    />
                  </div>
                  <div
                    className={
                      (index % 2 ? "order-sm-12" : "order-sm-12") + " col-md-1"
                    }
                  />
                </div>
              ))}
              {/* End Split Row of content and image */}
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}
