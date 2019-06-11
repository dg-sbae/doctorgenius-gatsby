import React from "react"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

export default () => (
  <MarketingSolutionsTemplate
    page="content-marketing" /* this should be dynamic from the page props */
    pageTitle="Content Marketing"
    pageSubtitle="<span>Build New</span> Organic Traffic"
    pageIntro="Our organic content strategy main objective is to funnel traffic to your website."
    metaTitle="Organic Search Engine Optimized Content | Healthcare Marketing Agency"
    metaDescription="When was the last time your current agency updated your website? Content marketing drives website visibility which in turn drives patients."
    contentRows={[
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "Blog and Social Updates",
            title: "Blog and Social Updates",
          },
          innerTitle: "Content is King",
          paragraph:
            "Google is an Ecosystem powered by information. Doctor Genius will write content related to your most profitable services and utilize additional techniques like Accelerated Mobile Pages(AMP).",
        },
        image: {
          url: "/png/content-marketing-row-1.png",
          alt: "Lorem Ipsum",
        },
      },
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "Patient Education",
            title: "Patient Education",
          },
          innerTitle: "Understanding your practice",
          paragraph:
            "Original patient education content is posted to your blog and social media profiles to generate general interest in your medical treatments and services.",
        },
        image: {
          url: "/png/content-marketing-row-2.png",
          alt: "Lorem Ipsum",
        },
      },
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "Video Education",
            title: "Video Education",
          },
          innerTitle: "Seeing is believing",
          paragraph:
            "Strategic deployment of educational videos as an additional avenue for new patients to find you.",
        },
        image: {
          url: "/png/content-marketing-row-3.png",
          alt: "Lorem Ipsum",
        },
      },
    ]}
  />
)
