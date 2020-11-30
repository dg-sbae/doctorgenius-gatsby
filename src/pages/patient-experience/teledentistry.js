import React from "react"
import { graphql } from "gatsby"

import PxExperienceTemplate from "../../templates/patient-experience-inner"

import websiteIcon from "../../img/icon/website.svg"

const Teledentistry = data => {
  const images = data.data

  return (
    <PxExperienceTemplate
      page="teledentistry" /* this should be dynamic from the page props */
      pageTitle="Px Experience"
      pageSubtitle={["Teledentistry"]}
      pageIntro="Triage made easy with our technology."
      metaTitle="Teledentistry | Healthcare Marketing Agency"
      metaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis efficitur augue, sit amet suscipit turpis gravida eus."
      backgroundImage={images.backgroundImage.childImageSharp.fluid}
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
            url: images.image_one.childImageSharp.fluid.src,
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
            url: images.image_two.childImageSharp.fluid.src,
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
            url: images.image_three.childImageSharp.fluid.src,
            alt: "Video Marketing",
          },
        },
      ]}
    />
  )
}

export default Teledentistry

export const ImageQuery = graphql`
  query TeledentistryImages {
    image_one: file(relativePath: { eq: "teledentistry-remote.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_two: file(relativePath: { eq: "teledentistry-remote.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_three: file(relativePath: { eq: "teledentistry-remote.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    backgroundImage: file(relativePath: { eq: "content-marketing.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
