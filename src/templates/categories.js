import React from "react"

// Components
import { Link, graphql } from "gatsby"

const CategoriesPage = ({ pageContext, data }) => {
  const { name: categoryName, wordpress_id: categoryID, slug } = pageContext
  //const { edges, totalCount } = data.allMarkdownRemark
  /*const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } in Category with "${category}"`*/
  console.log(data)
  return (
    <div>
      <h1>
        {categoryName} has {data.allWordpressPost.totalCount}
      </h1>
      <ul>
        {/*edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })*/}
      </ul>
      {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </div>
  )
}

export default CategoriesPage

// Note: The graphQL variable here is automagically passed from gatsby-node.js in context
export const pageQuery = graphql`
  query($name: String) {
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: $name } } } }
    ) {
      totalCount
      edges {
        node {
          slug
          categories {
            name
          }
        }
      }
    }
  }
`
