import React from "react"
//import { SlickSlider } from "slick-carousel"
//import jQuery from "jquery"

export default class TestimonialsSlider extends React.Component {
  render() {
    return (
      <div className="card-slider">
        <div className="card">
          <i className="fa fa-quote">"</i>
          <div className="card-content-wrapper">
            <p className="card-copy">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit.
            </p>
            <p className="card-author">John Doe</p>
            <p className="card-location">Irvine Dental Care</p>
          </div>
          <img
            className="img-responsive"
            src="/png/testimonials-slider-profile-1.png"
            alt="A Doctor"
          />
        </div>
      </div>
    )
  }
}
