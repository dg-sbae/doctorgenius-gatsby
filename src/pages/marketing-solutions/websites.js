import React from "react"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

export default () => (
  <MarketingSolutionsTemplate
    page="/marketing-solutions/websites/" /* this should be dynamic from the page props */
    contentRows={[
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "websites",
            title: "Websites",
          },
          innerTitle: "Design Your Presence.",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat nunc, et venenatis felis. Sed in nunc suscipit, sodales lectus eget, pretium erat. Donec semper hendrerit mattis.",
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
            "Your brand is the most precious component of your marketing.",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat nunc, et venenatis felis. Sed in nunc suscipit, sodales lectus eget, pretium erat. Donec semper hendrerit mattis.",
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
          innerTitle: "Design & developing for maximum impact.",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat nunc, et venenatis felis. Sed in nunc suscipit, sodales lectus eget, pretium erat. Donec semper hendrerit mattis.",
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
          innerTitle:
            "We build websites that will perform your business ranking.",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat nunc, et venenatis felis. Sed in nunc suscipit, sodales lectus eget, pretium erat. Donec semper hendrerit mattis.",
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
          innerTitle: "Leave no one behind. AwDa compliant.",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat nunc, et venenatis felis. Sed in nunc suscipit, sodales lectus eget, pretium erat. Donec semper hendrerit mattis.",
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
          innerTitle: "Identify your patients and valuable keywords.",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat nunc, et venenatis felis. Sed in nunc suscipit, sodales lectus eget, pretium erat. Donec semper hendrerit mattis.",
        },
        image: {
          url: "/png/search-result.png",
          alt: "Search Engine Results with Your Practice In #1",
        },
      },
    ]}
  />
)
