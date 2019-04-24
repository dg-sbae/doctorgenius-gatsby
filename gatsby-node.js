const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====

    // ==== POSTS (WORDPRESS NATIVE AND ACF) ====

    graphql(
      `
        {
          allWordpressPost(sort: { fields: [date], order: [DESC] }) {
            edges {
              node {
                title
                content
                excerpt
                slug
                type
                date(formatString: "MMMM D, YYYY")
                status
                featured_media {
                  media_details {
                    file
                    width
                    height
                  }
                  source_url
                  localFile {
                    relativePath
                    absolutePath
                  }
                }
                author {
                  name
                }
                categories {
                  name
                }
                tags {
                  name
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const postTemplate = path.resolve("./src/templates/post.js")
      // We want to create a detailed page for each
      // post node. We'll just use the WordPress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.allWordpressPost.edges, edge => {
        createPage({
          path: `/study-archive/${edge.node.slug}/`,
          component: slash(postTemplate),
          context: edge.node,
        })
      })
      resolve()
    })

    // ==== END POSTS ====
  })
}
