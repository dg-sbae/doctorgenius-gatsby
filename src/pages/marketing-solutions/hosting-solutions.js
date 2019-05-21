import React from "react"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

export default () => (
  <MarketingSolutionsTemplate
    page="/marketing-solutions/hosting-solutions/" /* this should be dynamic from the page props */
    pageTitle="Hosting Solutions"
    pageSubtitle="Enterprise Power <span>for Medical Practice Websites</span>"
    pageIntro="We’re always first in line when it comes to running the latest technology."
    metaTitle="Medical Practice Websites Hosting | Doctor Genius"
    contentRows={[
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "Security",
            title: "Security",
          },
          innerTitle: "Highly Available and Completely Secure",
          paragraph:
            "Nothing matters more than your practice's website reliability, so we monitor your website 24 hours a day, seven days a week.",
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
            alt: "HIPAA",
            title: "HIPAA",
          },
          innerTitle: "Protecting sensitive personal and health information",
          paragraph:
            "We take security seriously.  It is with utmost importance we protect health data integrity, confidentiality, and availability.",
        },
        image: {
          url: "/png/design-your-presence.png",
          alt: "Lorem Ipsum",
        },
      },
    ]}
  />
)
