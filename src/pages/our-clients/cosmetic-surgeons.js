import React from "react"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

export default () => (
  <OurClientsInnerPages
    className="cosmetic-surgeons"
    page="/our-clients/cosmetic-surgeons/" /* this should be dynamic from the page props */
    pageTitle="Cosmetic Surgeons"
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
            author: "Facial Spectrum",
            quote:
              "<p>Our company has been using Dr Genius since 2015.   Their team is very efficient and is\
               easy to communicate with.  Our on line exposure has significantly improved and our\
               patients have a quick and easy option to communicate via our web site.  The online blogs\
               that are approved by our Doctor are very well written and easy for the average person\
               with out clinical knowledge to read.   What I like most are their solution based\
               approach to any of my requests.  I would recommend Dr Genius to any business looking\
               to improve their Google rating and web site/social media exposure.</p>",
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
            author: "Carla Wostrel",
            quote: "<p>We have been with Dental Genius for 6 years now.  We've seen many changes to the\
            company and they just keep getting better and better.  Our online referrals have more than\
            doubled and our presence is the best in our area.  When it was time to update our website\
            three months ago, we turned to them and are thrilled with the response we have received.</p>",
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
            author: "Kristina Rivers",
            quote: "<p>Dental Genius has amazing customer service and the return-on-investment is on\
            point! We have used their services for almost a year, and last month we received 22 new\
            patients. The Support Team is easy to work with, they make requested changes quickly, and\
            we have seen our website be very effective in helping us to grow our practice. Doctor Genius\
            is G love and special sauce and we are so happy we went with them for our SEO needs!</p>",
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
