import React from "react"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"
import TestimonialImage2 from '../../img/dentalTestimonial2.png'
import TestimonialImage3 from '../../img/dentalTestimonial3.png'

export default () => (
  <OurClientsInnerPages
    page="dental-practices" /* this should be dynamic from the page props */
    pageTitle="Dentistry Practices"
    pageSubTitle="<span>Engage and Convert More</span> Patients To Your Practice"
    pageIntro="Doctor Genius provides digital marketing solutions by leveraging content, mobile-first web design, SEO, online directories, and social media to drive new patients to your private practice"
    caseStudy={true}
    metaTitle="Dental Patient Engagement, Acquisition, Retention | Predictable Practice Growth Solution"
    metaDescription="Is your current website and marketing underperforming? Curious about a strong performance driven marketing platform? Start getting the new patients your dental practice deserves."
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
      testimonialContent: [
        {
          cardContent: {
            title: "Card 1",
            author: "Amberly Money",
            quote:
              "<p>Our practice has worked with Doctor Genius for a few years now. Francesco\
              and team have gone above and beyond to make sure that we are always top on\
              the list for dentist in our area. We started as a brand new practice in 2009\
              and now have a full clientele of patients with our first available hygiene\
              appointment for six months out. Our biggest referrals are online. Thank you\
              Francesco and Doctor Genius for your hard work and many years of working together!</p>",
            location: "",
            imageFallback: {
              content: "AM",
            },
          },
        },
        {
          cardContent: {
            title: "Card 2",
            author: "Tod Anderson",
            quote:
              "<p>Coming from a Tech background before dental school, I have been searching\
            for a good way to manage my dental web presence, including social media, and reputation.\
            I have tried multiple things over the last 10 years, Yelp (was the worst!), Yext, Custom\
            built website with local web developer, Prosites, to name a few and have redone my dental\
            office web site 4 times in 10 years with little success.</p>\
            <p>When I talked to Doctor Genius I knew right away this was the technology and service I\
            needed to market my dental practice and manage this presence. I signed up immediately.</p>\
            <p>As a techy dentist I can tell you dentists are too busy and usually the office team can't\
            possible manage the complexities of web marketing with the ever changing google algorithms\
            and with the 100's of other websites that track dentists and doctors.</p>\
            <p>I am thrilled with the results and am excited to see Doctor Genius grow!</p>",
            location: "",
            image: TestimonialImage2,
          },
        },
        {
          cardContent: {
            title: "Card 3",
            author: "Nancy Lee DDS",
            quote:
              "<p>Working with Dental Genius has been great. They helped us create a new website\
            for our office and continuously create blogs for updated content.  They have improved our\
            office's online visibility.  The Dental Genius portal is a great tool not only to keep\
            track on how many new patient phone calls we receive, but also to keep track on our online\
            presence.</p>",
            location: "",
            image: TestimonialImage3,
          },
        },
      ],
    }}
  />
)
