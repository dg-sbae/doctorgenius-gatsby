import React from "react"
import { graphql } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import 'bootstrap/dist/css/bootstrap.css'

export default ({ data }) => (
    <DefaultPageLayout>
        <div class="col-xl-">
            <h1 className="text-center">This is the homepage</h1>
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