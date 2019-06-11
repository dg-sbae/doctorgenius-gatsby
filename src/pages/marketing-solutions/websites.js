import React from "react"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

export default () => (
  <MarketingSolutionsTemplate
    page="responsive-websites" /* this should be dynamic from the page props */
    pageTitle="Responsive Websites"
    pageSubtitle="<span>Design that leaves a lasting</span> impression."
    pageIntro="Stun your viewers with exquisitely designed websites & attractive branding. Getting appointments has never been easier."
    metaTitle="Conversion & Mobile First Healthcare Websites | Performance Driven Marketing"
    metaDescription="Start getting the new patients your medical practice deserves. Mobile first results-driven medical websites with performance digital marketing."
    contentRows={[
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "websites",
            title: "Websites",
          },
          innerTitle: "Design Your Presence",
          paragraph:
            "We adopt a conversion-first, as well as a mobile-first, strategy.  Our websites are power-packed with fresh & unique content tailored to your practice and services. All sites feature high-end images, attractive call-to-actions, easy to use forms, and are ready to rank.",
        },
        image: {
          url: "/png/design-your-presence.png",
          alt: "Website with Phone Version",
        },
      },
      {
        content: {
          icon: {
            url: "/icon/fingerprint.svg",
            alt: "Brand Fingerprint",
            title: "Brand Identity",
          },
          innerTitle:
            "Your brand is the most precious component of your marketing",
          paragraph:
            "Delivering effective brand strategies that practices a major edge in competitive markets. We figure out how, what, where, when, and to whom you need to be communicating and delivering your brand messages.",
        },
        image: {
          url: "/png/your-brand.png",
          alt: "Designers Raising a Brand Sign",
        },
      },
      {
        content: {
          icon: {
            url: "/icon/smartphone.svg",
            alt: "Mobile Device",
            title: "Mobile First",
          },
          innerTitle: "Design & developing for maximum impact",
          paragraph:
            "Personalized graphics and Call-to-Action sliders, original content, and 100% Responsive and useable on all modern devices.",
        },
        image: {
          url: "/png/design-for-maximum-impact.png",
          alt: "Website Displayed on a Mobile Phone",
        },
      },
      {
        content: {
          icon: {
            url: "/icon/speedometer.svg",
            alt: "A Speedometer",
            title: "Speed",
          },
          innerTitle: "Websites built to <br/> perform and rank",
          paragraph:
            "Improved site speed is an important signal Google uses in its ranking algorithm. Having a website that loads quickly on both mobile and desktop searches is key to giving your next potential patient the best experience while navigating your website.",
        },
        image: {
          url: "/png/lighthouse-result.png",
          alt: "High-Scoring Speed Test Results for a Website",
        },
      },
      {
        content: {
          icon: {
            url: "/icon/awda.svg",
            alt: "AwDA Compliance Checkmark List",
            title: "AwDA Compliant",
          },
          innerTitle: "Accessible to everyone",
          paragraph:
            "ADA Compliancy has become increasingly important to accommodate all potential customers without hindering accountability.",
        },
        image: {
          url: "/png/awda-accessibility.png",
          alt: "Accessible Website",
        },
      },
      {
        content: {
          icon: {
            url: "/icon/search-engine.svg",
            alt: "Online Search Engine",
            title: "Search Engine Optimization",
          },
          innerTitle: "Watch your targeted keywords soar",
          paragraph:
            "Narrow down what are your successful keywords, who is clicking on them, and which ones yield the highest number of new patient inquiries.",
        },
        image: {
          url: "/png/search-result.png",
          alt: "Search Engine Results with Your Practice In #1",
        },
      },
    ]}
  />
)
