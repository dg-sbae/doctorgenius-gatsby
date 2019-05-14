import React from "react"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

export default () => (
  <OurClientsInnerPages
    className="healthcare-marketing"
    page="/our-clients/healthcare-marketing/" /* this should be dynamic from the page props */
    pageTitle="Healthcare Marketing"
    pageSubTitle="<span>Engage and Convert More</span> Patients To Your Practice"
    pageIntro="Doctor Genius provides digital marketing solutions by leveraging content, mobile-first web design, SEO, online directories, and social media to drive new patients to your private practice"
    contentRows={{
      contentParagraphBlock: {
        heading: {
          strapline: "Marketing Performance",
          title:
            "<span><b>Rank Higher, Gain New Patients, </b>Get Better <b>Visibility Online</b><span>",
        },
        paragraphBlock:
          "<p>Lorem Ipsum is simply dummy text of the printing and\
            typesetting industry. Lorem Ipsum has been the industry's\
            standard dummy text ever since the 1500s, when an unknown\
            printer took a galley of type and scrambled it to make a\
            type specimen book. It has survived not only five\
            centuries, but also the leap into electronic typesetting,\
            remaining essentially unchanged. It was popularised in the\
            1960s with the release of Letraset sheets containing Lorem\
            Ipsum passages, and more recently with desktop publishing\
            software like Aldus PageMaker including versions of Lorem\
            Ipsum.\
          </p>\
          <p>\
            Lorem Ipsum is simply dummy text of the printing and\
            typesetting industry. Lorem Ipsum has been the industry's\
            standard dummy text ever since the 1500s, when an unknown\
            printer took a galley of type and scrambled it to make a\
            type specimen book. It has survived not only five\
            centuries, but also the leap into electronic typesetting,\
            remaining essentially unchanged. It was popularised in the\
            1960s with the release of Letraset sheets containing Lorem\
            Ipsum passages, and more recently with desktop publishing\
            software like Aldus PageMaker including versions of Lorem\
            Ipsum.\
          </p>\
          <p>\
            Lorem Ipsum is simply dummy text of the printing and\
            typesetting industry. Lorem Ipsum has been the industry's\
            standard dummy text ever since the 1500s, when an unknown\
            printer took a galley of type and scrambled it to make a\
            type specimen book. It has survived not only five\
            centuries, but also the leap into electronic typesetting,\
            remaining essentially unchanged. It was popularised in the\
            1960s with the release of Letraset sheets containing Lorem\
            Ipsum passages, and more recently with desktop publishing\
            software like Aldus PageMaker including versions of Lorem\
            Ipsum.\
          </p>",
      },
      contentSplitScreen: {
        // Figure out how to implement once we know the layout
      },
    }}
  />
)
