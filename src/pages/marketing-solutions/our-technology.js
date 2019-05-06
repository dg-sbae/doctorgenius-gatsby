import React from "react"

import MarketingSolutionsTemplate from "../../templates/marketing-solutions-inner"

export default () => (
  <MarketingSolutionsTemplate
    page="/marketing-solutions/our-technology/" /* this should be dynamic from the page props */
    contentRows={[
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "Genius Portal",
            title: "Genius Portal",
          },
          innerTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat nunc, et venenatis felis. Sed in nunc suscipit, sodales lectus eget, pretium erat. Donec semper hendrerit mattis.",
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
            alt: "Lead Tracking",
            title: "Lead Tracking",
          },
          innerTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat nunc, et venenatis felis. Sed in nunc suscipit, sodales lectus eget, pretium erat. Donec semper hendrerit mattis.",
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
            alt: "Ranking Reports",
            title: "Ranking Reports",
          },
          innerTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a placerat nunc, et venenatis felis. Sed in nunc suscipit, sodales lectus eget, pretium erat. Donec semper hendrerit mattis.",
        },
        image: {
          url: "/png/design-your-presence.png",
          alt: "Lorem Ipsum",
        },
      },
    ]}
  />
)
