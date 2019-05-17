import React from "react"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

export default () => (
  <OurClientsInnerPages
    className="chiropractor-practices"
    page="/our-clients/chiropractor-practices/" /* this should be dynamic from the page props */
    pageTitle="Chiropractor Practices"
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
            author: "Levente Bodak-Gyovai",
            quote:
              "<p>Impressive results from this company.  We regularly receive calls from prospective\
               patients who find us based on our SEO rankings. We have had great communication from\
               this company with regular updates. Whenever we contact them, they are always\
               responsive. We are planning to renew our contract for a third year so I think that\
               says it all!</p>",
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
            author: "Dr James Helmy",
            quote: "<p>These guys have changed my online presence in a dramatic way, and more\
            patients are finding and calling us as a result of their work.  Their team is friendly\
            and responsive, and I'd definitely recommend them to my colleagues.</p>",
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
            author: "Mike Warren",
            quote: "<p>Doctor Genius is the best way to provide your business with a professional\
            online representation. I have seen my fellow practitioner’s websites and they do not\
            compare to what Doctor Genius can provide.</p>",
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
