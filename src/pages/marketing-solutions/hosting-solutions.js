import React from "react"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"
import hostingSolutionsImage from "../../img/hosting-solutions.png"
import hostingSolutionsImage2 from "../../img/hipaa-compliant.png"

export default () => (
  <MarketingSolutionsTemplate
    page="hosting-solutions" /* this should be dynamic from the page props */
    pageTitle="Hosting Solutions"
    pageSubtitle="Enterprise Power <span>for Medical Practice Websites</span>"
    pageIntro="We’re always first in line when it comes to running the latest technology."
    metaTitle="Enterprise Power for Medical Practice Websites | Secure Website Hosting"
    metaDescription="Many hosting solutions do not meet our high standards of security, speed, updates, and backup. We are sticklers for the little things that radically enhance your visitors experience."
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
          url: hostingSolutionsImage,
          alt: "Hosting Solutions - Secure Sites",
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
          url: hostingSolutionsImage2,
          alt: "Hosting Solutions - HIPAA Compliant",
        },
      },
    ]}
  />
)
