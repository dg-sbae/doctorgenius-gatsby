import React from "react"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"
import geniusPortalImage from "../../img/genius-portal.png"
import leadTrackingImage from "../../img/lead-tracking.png"
import rankingReportImage from "../../img/ranking-reports.png"

import websiteIcon from "../../img/icon/website.svg"

export default () => (
  <MarketingSolutionsTemplate
    page="our-technology" /* this should be dynamic from the page props */
    pageTitle="Our Technology"
    pageSubtitle="<span>Extending your reach through our</span> marketing solutions"
    pageIntro="We provide predictable, performance-driven and sustainable practice growth."
    metaTitle="New Patient Acquisition Marketing Platform | Extend Your Reach"
    metaDescription="Performance, Results, Excellence. Start acquiring the new patients your healthcare practice deserves with a mobile first conversion focused medical website."
    contentRows={[
      {
        content: {
          icon: {
            url: websiteIcon,
            alt: "Genius Portal",
            title: "Genius Portal",
          },
          innerTitle: "Managed your performance based marketing program",
          paragraph:
            "Get the information you need about your marketing program and performance in one easy to use dashboard. Our plans come with access to our data-packed platform.",
        },
        image: {
          url: geniusPortalImage,
          alt: "Genius Portal",
        },
      },
      {
        content: {
          icon: {
            url: websiteIcon,
            alt: "Lead Tracking",
            title: "Lead Tracking",
          },
          innerTitle: "Get to Know your Target Patient",
          paragraph:
            "Get a detailed breakdown of your leads and their disposition. Know the outcome of each instance you receive an incoming call by date, hour, and day.",
        },
        image: {
          url: leadTrackingImage,
          alt: "Lead Tracking",
        },
      },
      {
        content: {
          icon: {
            url: websiteIcon,
            alt: "Ranking Reports",
            title: "Ranking Reports",
          },
          innerTitle: "Identify your traffic with keyword analysis",
          paragraph:
            "Narrow down what are your successful keywords, who is clicking on them, and which ones yield the highest number of new patient inquiries.",
        },
        image: {
          url: rankingReportImage,
          alt: "Ranking Reports",
        },
      },
    ]}
  />
)
