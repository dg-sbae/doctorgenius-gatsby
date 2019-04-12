module.exports = {
  siteMetadata: {
    title: `Doctor Genius`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'xxxxxx' //TODO Need to get this id
        }
      }
    }
    /* {
        resolve: `gatsby-source-wordpress`,
        options: {

        //The base URL of the WordPress site without the trailingslash and the protocol. This is required.
        //Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
        baseUrl: `gatsbyjsexamplewordpress.wordpress.com`,
        // The protocol. This can be http or https.
        protocol: `http`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the asumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on WordPress.com
        useACF: true,
        auth: {
            htaccess_user: "your-htaccess-username",
            htaccess_pass: "your-htaccess-password",
            htaccess_sendImmediately: false
        }
        },
      },*/
  ],
}