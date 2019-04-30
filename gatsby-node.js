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

    // ==== POSTS (WORDPRESS NATIVE AND ACF) ====

    graphql(
      `
        {
          allWordpressCategory(
            filter: {
              name: {
                in: ["Genius Lab", "Practice Management", "Digital Marketing"]
              }
            }
          ) {
            edges {
              node {
                name
                slug
              }
            }
          }
          allWordpressPost(sort: { fields: [date], order: [DESC] }) {
            edges {
              node {
                slug
                wordpress_id
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
      const categoryTemplate = path.resolve("./src/templates/categories.js")

      // We want to create a detailed page for each
      // post node. We'll just use the WordPress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.allWordpressPost.edges, edge => {
        createPage({
          path: `/the-study/${edge.node.slug}/`,
          component: slash(postTemplate),
          context: edge.node,
        })
      })

      // Create Category Pages

      _.each(result.data.allWordpressCategory.edges, edge => {
        createPage({
          path: `/the-study/${edge.node.slug}/`,
          component: slash(categoryTemplate),
          context: edge.node,
        })
      })

      resolve()
    })

    // ==== END POSTS ====
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions
  setWebpackConfig({
    externals: {
      jquery: "jQuery",
    },
  })
}
