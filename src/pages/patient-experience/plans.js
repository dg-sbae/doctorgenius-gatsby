import React from "react"
import { graphql } from "gatsby"


import PageStyles from "./plans.module.scss"
import RowStyles from "../../components/Row.module.scss"

const Plans = data => {
  return (
    <div className={PageStyles.pxPlansPage + " " + RowStyles.rowStyling}>
      <h1>HOWDY</h1>
    </div>
  )
}

export default Plans

export const ImageQuery = graphql`
  query PxPlansImages {
    heroBg: file(relativePath: { eq: "plans.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
