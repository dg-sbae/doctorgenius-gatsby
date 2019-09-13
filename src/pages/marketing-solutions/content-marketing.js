import React from "react"
import { graphql } from 'gatsby'

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"
/* import contentMarketingImage1 from "../../img/content-is-king.png"
import contentMarketingImage2 from "../../img/content-marketing.png"
import contentMarketingImage3 from "../../img/video-marketing.png" */

import websiteIcon from "../../img/icon/website.svg"

const MarketingSolutions = (data) => {
  const images = data.data
  console.log(images)

  return (
    <MarketingSolutionsTemplate
      page="content-marketing" /* this should be dynamic from the page props */
      pageTitle="Content Marketing"
      pageSubtitle="<span>Build New</span> Organic Traffic"
      pageIntro="Our organic content strategy's main objective is to funnel traffic to your website."
      metaTitle="Organic Search Engine Optimized Content | Healthcare Marketing Agency"
      metaDescription="When was the last time your current agency updated your website? Content marketing drives website visibility which in turn drives patients."
      contentRows={[
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "Blog and Social Updates",
              title: "Blog and Social Updates",
            },
            innerTitle: "Content is King",
            paragraph:
              "Google is an Ecosystem powered by information. Doctor Genius will write content related to your most profitable services and utilize additional techniques like Accelerated Mobile Pages(AMP).",
          },
          image: {
            url: images.image_one.childImageSharp.fixed.srcWebp,
            alt: "Content is King",
          },
        },
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "Patient Education",
              title: "Patient Education",
            },
            innerTitle: "Understanding your practice",
            paragraph:
              "Original patient education content is posted to your blog and social media profiles to generate general interest in your medical treatments and services.",
          },
          image: {
            url: images.image_two.childImageSharp.fluid.srcWebp,
            alt: "Understanding your practice",
          },
        },
        {
          content: {
            icon: {
              url: websiteIcon,
              alt: "Video Education",
              title: "Video Education",
            },
            innerTitle: "Seeing is believing",
            paragraph:
              "Strategic deployment of educational videos as an additional avenue for new patients to find you.",
          },
          image: {
            url: images.image_three.childImageSharp.fluid.srcWebp,
            alt: "Video Marketing",
          },
        },
      ]}
    />
  )
}

export default MarketingSolutions

export const ImageQuery = graphql`
    query Images {
      image_one: file(relativePath: {eq: "content-is-king.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      image_two: file(relativePath: {eq: "content-marketing.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      image_three: file(relativePath: {eq: "event-building-3.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
    `
