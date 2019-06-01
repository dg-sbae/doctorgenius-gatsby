import React from "react"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

export default () => (
  <MarketingSolutionsTemplate
    page="digital-advertising" /* this should be dynamic from the page props */
    pageTitle="Digital Advertising"
    pageSubtitle="<span>Expand your</span> Digital Reach"
    pageIntro="Sponsored Ads are a great way of drawing new patients from a variety of news sites, blogs and other niche sites across the internet."
    metaTitle="New Patient Acquisition | Digital Advertising | Healthcare Marketing Agency | Doctor Genius"
    contentRows={[
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "Hyper Local",
            title: "Hyper Local",
          },
          innerTitle: "Target ROI Focused Keywords for Google Search",
          paragraph:
            "Increase your focus and narrow down who you are targeting to a small geographic region. Hyper-Local Targeting delivers advertising content to your local audience who is more likely to be interested in your services.",
        },
        image: {
          url: "/png/design-your-presence.png",
          alt: "Lorem Ipsum",
        },
      },
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "Audience Optimization",
            title: "Audience Optimization",
          },
          innerTitle: "Geo-Targeted to maximize effectiveness",
          paragraph:
            "Informative conversion tracking analytics and raise practice awareness among potential patients.",
        },
        image: {
          url: "/png/design-your-presence.png",
          alt: "Lorem Ipsum",
        },
      },
    ]}
  />
)
