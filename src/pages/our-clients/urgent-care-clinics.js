import React from "react"

import OurClientsInnerPages from "../../templates/our-clients-inner-pages"

export default () => (
  <OurClientsInnerPages
    className="urgent-care-clinics "
    page="/our-clients/urgent-care-clinics" /* this should be dynamic from the page props */
    pageTitle="Urgent Care Clinics"
    pageSubTitle="<span>Broaden Your</span> Online Presence <span>For New Patients to</span> Find You"
    pageIntro="We bring you a robust platform and digital marketing solutions that focus on new patient acquisition."
    caseStudy={false}
    metaTitle="Grow your Urgent Care Center | Digital Marketing Agency | Doctor Genius"
    contentRows={{
      contentParagraphBlock: {
        heading: {
          strapline: "Grow Your Urgent Care Center",
          title:
            "<span>Monitor and Improve <b>Patient Experience</b> and <b>Increase Retention</b><span>",
        },
        paragraphBlock:
          "<p>Keyword searches “urgent care” averages over 1,000,000 searches per month.  Use\
           Doctor Genius’ powerful data-driven technology to help you leverage comprehensive\
           reporting and  make it easy for them to find and access your care.  Let your practice\
           thrive among competitors and accelerate your revenue cycle by optimizing practice operations\
           and financial performance\
          </p>\
          <p>\
          On average, Doctor Genius clients see a 300% increase in new patient (volume/calls) by month 12.\
          Our services include healthcare focused Search Engine Optimization, high-performing web content\
          and assets, completely transparent analytical reporting and tracking, comprehensive and robust\
          content strategy, social media marketing, reputation management tools, revenue cycle\
          management, and much more.  Achieve your desired practice goals with the efficiency,\
          expertise, and sustainable growth you deserve.\
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
            imageFallback: {
              content: "JS",
            },
          },
        },
        {
          cardContent: {
            title: "Card 2",
            author: "John Noyes",
            quote:
              "<p>Doctor Genius hands down has given me the best results out of any of the 5 other\
            website companies I have used.  I am actually getting significant patient calls in the 3\
            months I have been with them.  The staff is friendly and helpful.  And you can actually\
            reach them when you have a question.  You should start using this company over the rest.</p>",
            location: "",
            imageFallback: {
              content: "JN",
            },
          },
        },
        {
          cardContent: {
            title: "Card 3",
            author: "Peter G",
            quote:
              "<p>Doctor Genius is a wonderful practice builder. I had some bad experiences with SEO\
            companies in the past, paying for poor results. The tools DG offers and tracking reports\
            assures me that I am getting bang for my buck. Satisfied with the support as well!</p>",
            location: "",
            imageFallback: {
              content: "PG",
            },
          },
        },
      ],
    }}
  />
)
