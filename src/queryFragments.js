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
    all_image_urls {
      information_image_url {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt_text
      }
      hero_image_url {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
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

  fragment speakers on wordpress__wp_events {
    speaker_items {
      wordpress_1 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_2 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_3 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_4 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_5 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_6 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_7 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_8 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_9 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_10 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_11 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_12 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordpress_13 {
        order
        speaker_name
        speaker_profile_image_url {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }

  fragment eventListing on wordpress__wp_events {
    all_image_urls {
      hero_image_url {
        localFile {
          childImageSharp {
            fluid(maxWidth: 2201) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      featured_image_url_large {
        source_url
      }
    }
    end_time
    event_city
    event_date
    event_details_text
    event_state
    event_title
    featured_media {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    featured_event
    information_heading1
    include_location
    register_button_text
    register_url
    start_time
    slug
  }
`
