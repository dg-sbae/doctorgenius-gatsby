var plugins = [{
      plugin: require('/Users/soybae/Desktop/webdev/doctorgenius-gatsby/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[],"id":"GTM-52SPGC","includeInDevelopment":true,"defaultDataLayer":null,"routeChangeEventName":"gatsby-route-change"},
    },{
      plugin: require('/Users/soybae/Desktop/webdev/doctorgenius-gatsby/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allWordpressPost(\n                  sort: { order: DESC, fields: date },\n                ) {\n                  edges {\n                    node {\n                      title\n                      date\n                      excerpt\n                      content\n                      path\n                    }\n                  }\n                }\n              }\n            ","output":"/feed.xml","title":"DoctorGenius' RSS Feed","match":"^/blog/"}]},
    },{
      plugin: require('/Users/soybae/Desktop/webdev/doctorgenius-gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
