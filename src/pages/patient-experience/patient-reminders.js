import React from "react"
import { graphql } from "gatsby"

import PxExperienceTemplate from "../../templates/patient-experience-inner"

const PatientReminder = data => {
  const images = data.data

  return (
    <PxExperienceTemplate
      page="patient-reminders" /* this should be dynamic from the page props */
      pageTitle="Patient Reminders"
      pageSubtitle="Focus on Your Patients; Automate the Rest."
      pageIntro="Use smart and innovative technology to connect with patients where it matters most. Help patients become more engaged and informed through our curated program."
      metaTitle="Patient Reminders | Healthcare Marketing Agency"
      metaDescription="Stay ahead of the curve by introducing innovative patient first technology that positions your dental practice as a safe and convenient solution for providing quality care."
      backgroundImage={images.backgroundImage.childImageSharp.fluid}
      subfooterBgImage={images.subfooterBgImage.childImageSharp.fluid}
      contentRows={[
        {
          content: {
            rowType: 'odd-row',
            title: "Patient Reminders",
            innerTitle: "Improve Your Patient Experience",
            paragraph:
              "Improve your patient experience with this easy to use solution. It makes communicating with patients easier than ever. With appointment reminders, your team can easily keep patients engaged and informed with their treatment plans while your staff can process information quicker and more efficiently. Stay connected with your patients when it matters most."
          },
          image: {
            url: images.image_one.childImageSharp.fluid.src,
            alt: "Patient Reminders",
          },
        },
        {
          content: {
            rowType: 'icon-row',
            title: "More Than Appointment Reminders",
            innerTitle: "A Communication Suite of Tools to Maintain and Grow Your Practice",
            panels: [
              {
                icon: images.icon_one.childImageSharp.fluid.src,
                title: "Patient Portal",
                caption: "Centralize your patient's data where you can successfully manage and access information easier from one Location."
              },
              {
                icon: images.icon_two.childImageSharp.fluid.src,
                title: "Via Text SMS",
                caption: "Implementing SMS features allows for instant clear and proactive communications anytime, any place."
              },
              {
                icon: images.icon_three.childImageSharp.fluid.src,
                title: "Automated Emails",
                caption: "Keep patient information safe and secure. Instantly boost practice production through new methods of technology and automation."
              },
              {
                icon: images.icon_four.childImageSharp.fluid.src,
                title: "Staff Notifications",
                caption: "Staff can operate and process information, including digital consent forms and treatment plans, faster and more efficiently."
              },
            ],
          }
        },
        {
          content: {
            rowType: 'odd-row',
            title: "Live Updates",
            innerTitle: "Text Your Patients in Real-Time",
            paragraph:
              "Take your practice recall one step further by utilizing our easily automated features, including friendly reminders via text message and or through emails. Through this communication method, we can ensure our staff and patients are safer by reducing contact, helping you reduce the chance of virus transmissions.",
          },
          image: {
            url: images.image_two.childImageSharp.fluid.src,
            alt: "Live Updates",
          },
        },
        {
          content: {
            rowType: 'even-row',
            title: "Notifications",
            innerTitle: "Reduce No Shows & Last Minute Cancellations",
            paragraph:
              "Finally, your practice has a go-to strategy when dealing with appointment cancellations. Simply send a mass text to patients who opt-in to be notified if a sooner time becomes available. Now, you can recoup those lost appointments quickly with a simple click of a button.",
          },
          image: {
            url: images.image_three.childImageSharp.fluid.src,
            alt: "Notifications",
          },
        },
        {
          content: {
            rowType: 'odd-row',
            title: "Secured Emails",
            innerTitle: "Patients' Privacy is Our Priority",
            paragraph:
              "The Doctor Genius PX, Patient Experience Package provides secure emails, offering a truly HIPAA-compliant email solution that won't leave your office susceptible to violations.",
          },
          image: {
            url: images.image_four.childImageSharp.fluid.src,
            alt: "Secured Emails",
          },
        },
      ]}
    />
  )
}

export default PatientReminder

export const ImageQuery = graphql`
  query PatientReminderImages {
    backgroundImage: file(relativePath: { eq: "patient-reminders-head.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    subfooterBgImage: file(relativePath: { eq: "px-subfooter-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image_one: file(relativePath: { eq: "patient-reminders.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_two: file(relativePath: { eq: "live-updates.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_three: file(relativePath: { eq: "notifications.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_four: file(relativePath: { eq: "secured-emails.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_one: file(relativePath: { eq: "patient-portal.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_two: file(relativePath: { eq: "via-txt-sms.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_three: file(relativePath: { eq: "automated-emails.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_four: file(relativePath: { eq: "staff-notification.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
