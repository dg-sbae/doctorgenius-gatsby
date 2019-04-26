import { graphql } from "gatsby"

// Reusable pacages of GraphQL fields
export const siteFragments = graphql`
  fragment blogPost on wordpress__POST {
    title
    slug
    excerpt
    content
    date(formatString: "MMMM D, YYYY")
    categories {
      name
    }
    author {
      name
    }
    featured_media {
      source_url
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      id
    }
  }
  fragment recentEvent on wordpress__wp_events {
    title
    date
    wordpress_id
    link
  }
`
