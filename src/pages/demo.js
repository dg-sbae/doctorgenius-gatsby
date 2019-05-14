import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import ContactForm from "../components/contact-form.js"
import star from "../img/star.svg"
import sslBadge from "../img/ssl-logo.png"

import "../styles/demo.scss"

export default props => (
  <DefaultPageLayout>
    <div className={props["*"]}>
      <div className="hero">
        {/* Hero will be a layout component */}
        <Container>
          <div className="valign-wrapper row">
            <div className="col-sm-8">
              <h1>Experience The Solution for Optimal Practice Growth</h1>
              <p>
                Need help with new patient acquisitions, patient reminders, and
                retention? Sign up for our demo to learn how you can have
                predictable practice growth with Doctor Genius.
              </p>
              <hr />
              <div class="row valign-wrapper padded short-top">
                <div class="col-sm-5">
                  <div class="content-block">
                    <div class="inner-title">
                      <h2>Our Plans</h2>
                      <div class="accented-paragraph">
                        <p>
                          We created 3 individual packages that will take your
                          practice to the next level. Our tiers have unique plan
                          features to meet your practice needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-7">
                  <div class="plan-details">
                    <div class="title">
                      <h3>Silver Plan</h3>
                      <p>The Starter Package</p>
                    </div>
                    <div class="stripe" />
                    <div class="details">
                      <h4>20+</h4>
                      <p>New Patients</p>
                    </div>
                  </div>
                  <div class="plan-details">
                    <div class="title">
                      <h3>Gold Plan</h3>
                      <p>Boost Your Online Presence</p>
                    </div>
                    <div class="stripe" />
                    <div class="details">
                      <h4>35+</h4>
                      <p>New Patients</p>
                    </div>
                  </div>
                  <div class="plan-details">
                    <div class="title">
                      <h3>Platinum Plan</h3>
                      <p>Maximize Your Pratice Potential</p>
                    </div>
                    <div class="stripe" />
                    <div class="details">
                      <h4>45+</h4>
                      <p>New Patients</p>
                    </div>
                  </div>
                  <p class="fine-print">
                    *Estimated new patients vary by industry, location, and
                    population.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 p-10">
              <div class="contact-form">
                <div class="header">
                  <h3>Contact us now for a FREE Consultation</h3>
                </div>
                <div class="form-body">
                  <ContactForm />
                  <p class="fine-print">
                    *By registering I confirm that I have read and agree to the
                    Privacy Statement.
                  </p>
                  <img src={sslBadge} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Main>
        <Container>
          <div className="row padded">
            <div className="col-sm-10">
              <div className="header inner-title center">
                <h2 className="underline">What Our Clients Are Saying!</h2>
              </div>
            </div>
          </div>
          <div className="row padded short-top">
            <div className="col-lg-1" />
            <div className="col-sm-10">
              <div class="review">
                <div class="author">
                  <img
                    class="portrait"
                    src="https://picsum.photos/200"
                    alt="Review Author"
                  />
                  <p>First Last Name</p>
                </div>
                <div class="body">
                  <div class="stars">
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                  </div>
                  <div class="date">
                    <p>11 Months Ago</p>
                  </div>
                  <div class="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row padded short-top">
            <div className="col-lg-1" />
            <div className="col-sm-10">
              <div class="review">
                <div class="author">
                  <img
                    class="portrait"
                    src="https://picsum.photos/200"
                    alt="Review Author"
                  />
                  <p>First Last Name</p>
                </div>
                <div class="body">
                  <div class="stars">
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                  </div>
                  <div class="date">
                    <p>11 Months Ago</p>
                  </div>
                  <div class="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row padded short-top">
            <div className="col-lg-1" />
            <div className="col-sm-10">
              <div class="review">
                <div class="author">
                  <img
                    class="portrait"
                    src="https://picsum.photos/200"
                    alt="Review Author"
                  />
                  <p>First Last Name</p>
                </div>
                <div class="body">
                  <div class="stars">
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                  </div>
                  <div class="date">
                    <p>11 Months Ago</p>
                  </div>
                  <div class="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)
