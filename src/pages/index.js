import React from "react"
//import { graphql } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import InnerTitle from "../components/inner-title.js"
import "bootstrap/dist/css/bootstrap.css"

export default ({ data }) => (
  <DefaultPageLayout>
    <div className="col-xl-">
      <InnerTitle title="This Is" accent=" the Homepage" underlined>
        Test
      </InnerTitle>
    </div>
  </DefaultPageLayout>
)

// export const pageQuery = graphql`
// query {
//     allWordpressPage {
//       edges {
//         node {
//           id
//           title
//           excerpt
//           slug
//           date(formatString: "MMMM DD, YYYY")
//         }
//       }
//     }
//   }
//   `
