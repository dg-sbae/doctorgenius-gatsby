import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../../components/DefaultPageLayout"
import Main from "../../components/main-content"
import Container from "../../components/Container"
import { Helmet } from "react-helmet"
import MobileSecondaryNav from "../../components/MobileSecondaryNav"
import SecondaryNavigation from "../../components/SecondaryNavigation"
import HeroPx from "../../components/HeroPx"

//import checkmark from "../../img/checked.svg"

import PageStyles from "./plans.module.scss"
import RowStyles from "../../components/Row.module.scss"

const Plans = data => {
  const images = data.data

  const pageTitle = "PX Plans"
  const heroConfig = {
    pageType: "pxPlansPage",
    title: "Doctor Genius PX Plans",
    subtitle: "Affordable Application For Your Practice",
    content: "Be the leader in your local community by providing the best quality of care to your patients. Enhance your patient experience with our various plans that are meant to be easy, convenient and, of course, done from their phone.",
  }

  return (
    <div className={PageStyles.pxPlansPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="plans">
        <Helmet>
          <title>
            Healthcare Marketing Plans | New Patient Acquisition Strategy
          </title>
          <meta
            name="description"
            content="Is your current website and marketing underperforming? Curious about a strong performance driven marketing platform? Review our extensive lineup of plans for your practice."
          />
        </Helmet>
        <div className="px-plans">
          <BackgroundImage fluid={images.heroBg.childImageSharp.fluid}>
            <HeroPx
              pageType={heroConfig.pageType}
              subtitle={heroConfig.subtitle}
              title={heroConfig.title}
              content={heroConfig.content}
            />
          </BackgroundImage>
          <Main>
            <Container>
              {/* Begin secondary nav Component: */}
              <div className={RowStyles.row}>
                <div className="col-sm-12 panel-row">
                  <SecondaryNavigation
                    pageType="patientExperience"
                    pageTitle={pageTitle}
                  />
                </div>
              </div>
              {/* End secondary nav Component */}

              {/* Begin mobile secondary navigation component */}
              <MobileSecondaryNav
                parentPage="patientExperience"
                titleItem={pageTitle}
              />
              {/* End mobile secondary navigation component */}

              <div className={RowStyles.row + " " + PageStyles.pxLogo}>
                <div className="col-sm-12 col-md-7">
                  <img src={images.pxLogo.childImageSharp.fluid.src} />
                </div>
              </div>
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default Plans

export const ImageQuery = graphql`
  query PxPlansImages {
    heroBg: file(relativePath: { eq: "px-plans-head.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pxLogo: file(relativePath: { eq: "px-dg-logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
