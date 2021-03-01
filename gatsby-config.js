module.exports = {
  siteMetadata: {
    title: `DoctorGenius`,
    description: 'Healthcare Marketing Website',
    siteUrl: 'https://doctorgenius.com',
    author: 'DoctorGenius Web Development'
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_DEV: true,
    //GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES: true,
  },
  plugins: [
    //`gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-52SPGC",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
        /*
        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
        */
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        //The base URL of the WordPress site without the trailingslash and the protocol. This is required.
        //Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
        baseUrl: `doctorgenius-wordpress.dgplex.com`,
        // The protocol. This can be http or https.
        protocol: `https`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the asumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on WordPress.com
        useACF: false,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://doctorgenius-wordpress.dgplex.com/",
          replacementUrl: "/",
        },
        excludedRoutes: [
          /* WP */
          "/*/*/taxonomies",
          "/*/*/contact-forms",
          "/*/*/users/me",
          "/*/*/settings",
          "/*/*/comments",
          "/*/*/pages",
          "/*/*/pages/**",

          /* Plugins: */
          "/contact-form-7/**",
          "/yoast/**",
          "/regenerate-thumbnails/**",
          "/ithemes-security/**",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Montserrat:400,700`, `Roboto:300,400,500&display=swap`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            // @todo link this function's documentation
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                return Object.assign({}, edge.node.internal, {
                  title: edge.node.title,
                  description: edge.node.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + "/blog" + edge.node.path,
                  custom_elements: [{ "content:encoded": edge.node.content }],
                })
              })
            },
            query: `
              {
                allWordpressPost(
                  sort: { order: DESC, fields: date },
                ) {
                  edges {
                    node {
                      title
                      date
                      excerpt
                      content
                      path
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "DoctorGenius' RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^\/blog\/",
            // optional configuration to specify external rss feed, such as feedburner
            //link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-brotli`,
      options: {
        extensions: [`css`, `html`, `js`, `svg`],
        path: "brotli",
      },
    },
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "html", "js", "svg"],
        path: "gzip-zopfli",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
  ],
}
