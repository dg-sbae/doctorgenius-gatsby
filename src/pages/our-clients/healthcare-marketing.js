import React from "react"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

export default () => (
  <OurClientsInnerPages
    page="/our-clients/healthcare-marketing/" /* this should be dynamic from the page props */
    pageTitle="Healthcare Marketing"
    pageSubTitle="<span>Engage and Convert More</span> Patients To Your Practice"
    pageIntro="Doctor Genius provides digital marketing solutions by leveraging content, mobile-first web design, SEO, online directories, and social media to drive new patients to your private practice"
    contentRows={[
      {
        content: {
          icon: {
            url: "/icon/website.svg",
            alt: "Blog and Social updates",
            title: "Blog and Social updates",
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
