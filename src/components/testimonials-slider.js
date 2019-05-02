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
  render() {
    const settings = {
      centerPadding: "29%",
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const cards = [
      { title: "Card 1" },
      { title: "Card 2" },
      { title: "Card 3" },
      { title: "Card 4" },
      { title: "Card 5" },
    ]
    return (
      <div className={styles.testimonialsSlider}>
        <Slider className={styles.cardSlider} {...settings}>
          {cards.map(card => (
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
                    <p className={styles.copy}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis.Lorem ipsum dolor
                      sit amet, consectetuer adipiscing elit.
                    </p>
                    <p className={styles.author}>John Doe</p>
                    <p className={styles.location}>Irvine Dental Care</p>
                  </div>
                  <div className={styles.portraitWrapper}>
                    <img
                      className={styles.portrait}
                      src="/png/testimonials-slider-profile-1.png"
                      alt="A Doctor"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
