import { graphql } from "gatsby"

// Reusable pacages of GraphQL fields
export const siteFragments = graphql`
  fragment blogPost on wordpress__POST {
    title
    slug
    excerpt
    content
    date(formatString: "MMMM D, YYYY")
    categories {
      name
    }
    author {
      name
    }
    featured_media {
      source_url
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      id
    }
  }
  fragment recentEvent on wordpress__wp_events {
    title
    date
    wordpress_id
    link
  }
  fragment eventPost on wordpress__wp_events {
    end_time
    event_city
    event_date
    event_details_text
    event_state
    event_strapline
    event_street_address
    event_subtitle
    event_title
    event_venue
    event_zip
    featured_event
    hero_bg_image
    include_location
    include_marketing
    include_speakers
    information_h1_li_1
    information_h1_li_2
    information_h1_li_3
    information_h1_li_4
    information_h2_li_1
    information_h2_li_2
    information_h2_li_3
    information_h2_li_4
    information_heading1
    information_heading2
    information_image
    register_button_text
    register_url
    speaker_section_subtitle
    speaker_section_title
    start_time
  }
`
