/* Ref:
https://kenwheeler.github.io/slick/
https://github.com/kenwheeler/slick/
https://github.com/akiran/react-slick
*/

import React from "react"
import Slider from "react-slick"
import styles from "./testimonials-slider.module.scss"
import quoteMark from "../img/quote-mark.svg"

export default class TestimonialsSlider extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const settings = {
      centerPadding: "28%",
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            centerPadding: "17%",
          },
        },
        {
          breakpoint: 1300,
          settings: {
            centerPadding: "15%",
          },
        },
        {
          breakpoint: 991,
          settings: {
            centerPadding: "10%",
          },
        },
        {
          breakpoint: 880,
          settings: {
            centerPadding: "6%",
          },
        },
        {
          breakpoint: 767,
          settings: {
            centerPadding: false,
            centerPadding: "0",
          },
        },
      ],
    }

    return (
      <div className={styles.testimonialsSlider}>
        <Slider className={styles.cardSlider} {...settings}>
          {this.props.cards.map(card => (
            <div>
              <div className={styles.cardWrapper}>
                <div className={styles.card}>
                  <div className={styles.quoteWrapper}>
                    <img
                      className={styles.quoteMark}
                      src={quoteMark}
                      alt="Quote Symbol"
                    />
                  </div>
                  <div className={styles.cardContentWrapper}>
                    <div
                      className={styles.copy}
                      dangerouslySetInnerHTML={{
                        __html: card.cardContent.quote,
                      }}
                    />
                    <p className={styles.author}>{card.cardContent.author}</p>
                    {/* JS shortcircuit to conditionally render the location*/}
                    {card.cardContent.location != "" && (
                      <p className={styles.location}>
                        {card.cardContent.location}
                      </p>
                    )}
                  </div>

                  {card.cardContent.image && (
                    <div className={styles.portraitWrapper}>
                      <img
                        className={styles.portrait}
                        src="/png/testimonials-slider-profile-1.png"
                        alt="A Doctor"
                      />
                    </div>
                  )}
                  {!card.cardContent.image &&
                    card.cardContent.imageFallback.content && (
                      <div className={styles.imageFallback}>
                        <h5>{card.cardContent.imageFallback.content}</h5>
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
