import React from "react"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

export default () => (
  <MarketingSolutionsTemplate
    page="/marketing-solutions/online-reputation-management" /* this should be dynamic from the page props */
    pageTitle="Online Reputation"
    pageSubtitle="Stand out <span>from your</span> competition"
    pageIntro="Delivering effective brand strategies that enable you to have a major edge in competitive markets."
    metaTitle="Online Brand and Reputation Monitoring | Doctor Genius"
    contentRows={[
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "Digital Landscape",
            title: "Digital Landscape",
          },
          innerTitle: "Gain a network of powerful listings",
          paragraph:
            "Experience the advantage of tapping into our powerful network of publisher-level connections and build a consistent web presence for your practice.",
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
            alt: "Review Management",
            title: "Review Management",
          },
          innerTitle: "Maintain a Positive Online Reputation",
          paragraph:
            "9 out of 10 customers read reviews before making a purchasing decision. We combat negative search content and suppress unwanted material by promoting positive content that you control.",
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
            alt: "Practice Promoter",
            title: "Practice Promoter",
          },
          innerTitle: "Build up your street cred",
          paragraph:
            "Get reviews from your existing patients fast with our streamlined contact process and form. We direct your patients to your social profiles in a stepped out process that gets you reviews!",
        },
        image: {
          url: "/png/design-your-presence.png",
          alt: "Lorem Ipsum",
        },
      },
    ]}
  />
)
