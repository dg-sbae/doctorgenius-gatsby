import React from "react"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

export default () => (
  <OurClientsInnerPages
    className="dental-practices"
    page="/our-clients/dental-practices/" /* this should be dynamic from the page props */
    pageTitle="Dentistry Practices"
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
          "<p>In order to stand out among the masses on Google search results, professionals need a quality\
            website service that continues maintenance and updates to the website. Doctor Genius does both of\
            these things and more, applying skills and necessary tools to the foundation of the website. At\
            Doctor Genius, we build a website with the potential patient’s focus in mind. We know where to\
            place the correct terms, information and content people want immediately.\
          </p>\
          <p>Our team understands that when people are considering calling a medical\
           practice, they are searching for the surface level of information. After\
           finding the basic information, patients may begin to look at the rest of\
           the website to find quality content that breaks down the practice’s services.\
           While each patient is different, there tends to be a similar search routine for\
           medical care. Insurance also plays a significant role in selecting a medical\
           practice. We can help the professional determine how much or little about the\
           subject they want to place on their website.\
          </p>",
      },
      contentSplitScreen: {
        // Figure out how to implement once we know the layout
      },
    }}
  />
)
