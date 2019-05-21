import React from "react"
import { Helmet } from "react-helmet"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import ContactForm from "../components/contact-form.js"
import star from "../img/star.svg"
import sslBadge from "../img/ssl-logo.png"

import Dennis from "../img/icon-dennis-baik.jpg"
import Taylor from "../img/icon-taylor-dental-care.jpg"
import Daniel from "../img/icon-daniel-savarino.jpg"
import Christina from "../img/icon-christina-guilin.jpg"
import Erika from "../img/icon-erika-rodriguez.jpg"
import Roberto from "../img/icon-roberto-bellegarrigue.jpg"
import Justine from "../img/icon-justine-schepis.jpg"
import Alexandra from "../img/icon-alexandra-ramasahai.jpg"
import Diamond from "../img/icon-diamond-head-dental-care.jpg"

import "../styles/demo.scss"

export default props => (
  <DefaultPageLayout location={props["*"]}>
    <Helmet>
      <title>
        Get a Free Demo of the Doctor Genius Marketing Platform | Doctor Genius
      </title>
    </Helmet>
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
                  <img class="portrait" src={Dennis} alt="Review Author" />
                  <p>
                    Dennis
                    <br />
                    Baik
                  </p>
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
                      Dr. Genius and its team delivers what they promise. It has
                      been about two years since I signed up with their Silver
                      Plan. Since then, my dental practice has grown with more
                      phone calls that were referred from online and SEO
                      marketing (more so within last one year). Previously, I
                      have used Prosites for my website and separate social
                      media managing company but never had much of response. Dr.
                      Genius is the only marketing company that I currently work
                      with and my dental practice is doing better than ever. I
                      am even considering to upgrade my marketing plan with them
                      to a more premium plan (Gold or Platinum).
                    </p>

                    <p>
                      I am not sure however, if my current Silver Plan with Dr.
                      Genius has turned into 20+ additional new patients per
                      month (as it is advertised on their website).
                      Nevertheless, I truly believe that working with Dr. Genius
                      has been a success with great return on investment (ROI).
                      Particularly, Shawn and Shanyn have been great. Dr. Genius
                      and its team (especially Shawn) have undoubtedly been
                      instrumental to my marketing success. Thanks guys!
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
                  <img class="portrait" src={Taylor} alt="Review Author" />
                  <p>
                    Taylor <br />
                    Dental Care
                  </p>
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
                    <p>2 Months Ago</p>
                  </div>
                  <div class="content">
                    <p>
                      I have worked with Francesco at 3 separate dental offices
                      over the course of 8 years. If that doesn't tell you that
                      their program works, I don't know what will. Francesco has
                      great customer service and follows up throughout the set
                      up to make sure things are going well. If I ever have
                      issues, I can contact him or email their customer support
                      team and my questions or website changes are handled
                      quickly.
                    </p>

                    <p>
                      Their contract is lengthy, and a little complicated, so
                      read it well to make sure you understand what you are
                      signing. Your "online" phone number will change for their
                      tracking purposes, you'll have a little recorded message
                      at the beginning of patient calls saying that call will be
                      recorded, and your website will have copy and pasted
                      material as another reviewer said. But that matters little
                      when the new patients call after having been engaged on
                      your website.
                    </p>

                    <p>
                      We have been consistently getting heavy web traffic (this
                      is tracked and they'll show you the metrics -- it' not
                      just a verbal monthly follow up like I had previously had
                      with SEO companies), and more new patients since the
                      website launched. We are getting what we paid for, and
                      will continue to utilize their services. They are up to
                      date on all the google algorithms, and gave us ideas to
                      keep the "freshness" up on our website, our google
                      business listing and social media. I highly recommend
                      their services!
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
                  <img class="portrait" src={Daniel} alt="Review Author" />
                  <p>
                    Daniel <br />
                    Savarino
                  </p>
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
                    <p>6 months ago</p>
                  </div>
                  <div class="content">
                    <p>
                      I have been working with doctor genius for about 6 months.
                      I opened my sports medicine practice back in July. I found
                      doctor genius on Facebook and spoke with Francesco. He
                      went over my current site and discussed how he could help
                      improve my Google ranking. What I really liked about them
                      was they were not trying to push their most expensive
                      package, in fact they were stressing to start with the
                      basics and upgrade gradually as I grow. Whenever I have a
                      question, if I send an email I always get an immediate
                      call back from Francesco, which I find amazing as most
                      other companies I work with take days to respond if at
                      all. Most of the website work has been with Shanyn who has
                      also been great. She is responsive and listens to my
                      suggestions. I have the blogs set so I can review them
                      before they go up which I like because I like to have my
                      own spin put in as well. I recently upgraded to the Gold
                      package and I am looking forward to seeing how much more
                      business we get!!
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
                  <img class="portrait" src={Christina} alt="Review Author" />
                  <p>
                    Christina
                    <br /> Guilin
                  </p>
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
                    <p>2 Months Ago</p>
                  </div>
                  <div class="content">
                    <p>
                      I have just recently started working with Doctor Genius,
                      specifically with Dartangnan Johnson and my experience so
                      far has been nothing but stellar! We had a lot of turnover
                      with our marketing the last 1-2 years, and were struggling
                      to find a team who really understood our needs and
                      expectations. We really hit it out of the park being
                      connected to Dartangan and Doctor Genius, because their
                      experience and knowledge with Google is what sets them
                      apart from other marketers. The resources provided to
                      clients are wonderful tools to stay on top of your
                      practice and numbers. Thank you Dartangan, our future
                      looks bright with you!
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
                  <img class="portrait" src={Erika} alt="Review Author" />
                  <p>
                    Erika
                    <br /> Rodriguez
                  </p>
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
                    <p>3 Weeks Ago</p>
                  </div>
                  <div class="content">
                    <p>
                      I have been working with Doctor Genius for sometime now
                      and can honestly say this is by far, the BEST team to have
                      by your side. Besides increasing our numbers, they have
                      always put our needs and wants first. Doctor Genius has
                      educated us through out our entire journey together and we
                      are a better company because of it. A special recognition
                      goes to Mr. Shawn S. who has gone above and beyond for us
                      and helped us see the light at the end of a dark,dark
                      tunnel. And for that, Thank you Shawn for helping us show
                      the world who we are. Blessings!
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
                  <img class="portrait" src={Roberto} alt="Review Author" />
                  <p>
                    Roberto
                    <br />
                    Bellegarrigue
                  </p>
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
                    <p>2 Months Ago</p>
                  </div>
                  <div class="content">
                    <p>
                      Been working with them for 2 years now. My web visibility
                      has increased and my new patients have doubled as a
                      result. They're always available to talk if you have any
                      issues or questions. Two thumbs up!! Just ask for
                      Francesco, he's my account manager and he'll take good
                      care of you.
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
                  <img class="portrait" src={Justine} alt="Review Author" />
                  <p>
                    Justine
                    <br />
                    Schepis
                  </p>
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
                    <p>10 Months Ago</p>
                  </div>
                  <div class="content">
                    <p>
                      I started using Doctor Genius to improve my google
                      presence and increase my monthly number of new patients.
                      They told me it would take 3-4 months to see results. Its
                      been about 2 now that my google presence has been cleaned
                      up and my website is up and running and I am starting to
                      see people come in the door who found us solely on google.
                    </p>

                    <p>
                      We are happy and have now upgraded our package with
                      them.The team is really nice and caring and good with
                      following up and explaining everything to you. Francesco
                      was the first person I worked with and he is wonderful. He
                      really took the time to explain everything. Although it is
                      early in the process, what he said would happen after
                      cleaning up our internet presence is starting to unfold. I
                      have also worked with Brandon, Shawn, Victoria, and Kylie,
                      all of which have been a pleasure to work with.
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
                  <img class="portrait" src={Alexandra} alt="Review Author" />
                  <p>
                    Alexandra
                    <br />
                    Ramsahai D.M.D
                  </p>
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
                    <p>5 Months Ago</p>
                  </div>
                  <div class="content">
                    <p>
                      The customer service is awesome! We have had a great start
                      and we continue to grow and develop. Thanks francesco and
                      everyone at DocGenius that make communication a breeze.
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
                  <img class="portrait" src={Diamond} alt="Review Author" />
                  <p>
                    Diamond Head <br />
                    Dental Care
                  </p>
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
                      Doctor Genius was a game changer for our office, we saw a
                      SIGNIFICANT increase in new patient counts and online
                      search results. We doubled our new patient counts within a
                      few months of starting with Doctor Genius, with half of
                      the credit due to their online optimization and service.
                      Shawn Stiffler has been an excellent guiding force as we
                      ramped up this service and when we decided to upgrade the
                      service after one year with them. Thank you! Krista
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
