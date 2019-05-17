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
      testimonialContent: [
        {
          cardContent: {
            title: "Card 1",
            author: "Don DuBose M.D.",
            quote:
              "<p>I was somewhat skeptical of Doctor Genius because I had been burned by other companies\
               before. Its not easy to find reliable companies these days but Doctor Genius has been\
               exemplary. Within 5 months my google rankings significantly increased. We are first page\
               on most of our search terms. We have also seen an increase in our conversions from web\
               traffic to actual appointments. Customer service is generally responsive,  I have had\
               some delays in website adjustments, but that was partially my fault for not giving\
               clear directions. Since then the turn around time has on adjustments have been very\
               fast. I highly recommend Doctor Genius they have created a good return on investment\
               (ROI)  for us.</p>",
            location: "",
            image: {
              src: "",
              alt: "",
            },
          },
        },
        {
          cardContent: {
            title: "Card 2",
            author: "Roberto Bellegarrigue",
            quote: "<p>Been working with them for 2 years now. My web visibility has increased and my new\
            patients have doubled as a result. They're always available to talk if you have any issues or\
            questions. Two thumbs up!! Just ask for Francesco, he's my account manager and he'll take\
            good care of you.</p>",
            location: "",
            image: {
              src: "",
              alt: "",
            },
          },
        },
        {
          cardContent: {
            title: "Card 3",
            author: "Dr James Helmy",
            quote: "<p>These guys have changed my online presence in a dramatic way, and more patients\
            are finding and calling us as a result of their work.  Their team is friendly and responsive,\
            and I'd definitely recommend them to my colleagues.</p>",
            location: "",
            image: {
              src: "",
              alt: "",
            },
          },
        },
      ],
    }}
  />
)
