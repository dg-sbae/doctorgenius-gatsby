import React from "react"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

export default () => (
  <OurClientsInnerPages
    className="urgent-care-clinics "
    page="/our-clients/urgent-care-clinics/" /* this should be dynamic from the page props */
    pageTitle="Urgent Care Clinics"
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
            author: "Justine Schepis",
            quote:
              "<p>I started using Doctor Genius to improve my google presence and increase my monthly\
               number of new patients. They told me it would take 3-4 months to see results. Its been\
               about 2 now that my google presence has been cleaned up and my website is up and running\
               and I am starting to see people come in the door who found us solely on google.  We are\
               happy and have now upgraded our package with them.</p>",
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
            author: "John Noyes",
            quote: "<p>Doctor Genius hands down has given me the best results out of any of the 5 other\
            website companies I have used.  I am actually getting significant patient calls in the 3\
            months I have been with them.  The staff is friendly and helpful.  And you can actually\
            reach them when you have a question.  You should start using this company over the rest.</p>",
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
            author: "Peter G",
            quote: "<p>Doctor Genius is a wonderful practice builder. I had some bad experiences with SEO\
            companies in the past, paying for poor results. The tools DG offers and tracking reports\
            assures me that I am getting bang for my buck. Satisfied with the support as well!</p>",
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
