import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import tableHeader from "../img/plans-table-header-image.svg"
import checkmark from "../img/checked.svg"
import downChevron from "../img/down-chevron.svg"
import thinArrowRight from "../img/right-arrow.svg"

import "../styles/plans.scss"
import "../styles/global-styles.scss"

export default props => (
  <DefaultPageLayout>
    <div className={props["*"]}>
      <div className="hero">
        {/* Hero will be a layout component */}
        {/* @todo: Heros need a thin grey border underneath, not included in pic */}
        <Container>
          <div className="valign-wrapper row">
            <div className="col-sm-12">
              <div class="hero-content accent-block">
                <h1>Our Plans</h1>
                <h2>
                  Solution To Your
                  <span class="font-weight-semibold"> Online Marketing </span>
                  Needs
                </h2>
                <div className="accented-paragraph">
                  <p>
                    From new patient acquisition to retention, Doctor Genius has
                    you covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Main>
        <Container>
          <div className="row padded">
            <div className="col-sm-12">
              <div className="plans-table">
                {/* <!-- image-row --> */}
                <div className="grid-item image-row">
                  <img src={tableHeader} alt="Assembling a Website" />
                </div>
                <div className="grid-item column-signup">
                  <h2>Silver</h2>
                  <p className="column-signup-body">
                    Lorem Ipsum is simply dummy text of the printing and type.
                  </p>
                  <a href="$#" className="button rounder">
                    Sign Up
                  </a>
                  <a href="$#" className="subtle-link">
                    Learn More
                  </a>
                </div>
                <div className="grid-item column-signup">
                  <span className="recommended button rounder">
                    Recommended
                  </span>
                  <h2>Gold</h2>
                  <p className="column-signup-body">
                    Lorem Ipsum is simply dummy text of the printing and type.
                  </p>
                  <a href="$#" className="button rounder">
                    Sign Up
                  </a>
                  <a href="$#" className="subtle-link">
                    Learn More
                  </a>
                </div>
                <div className="grid-item column-signup">
                  <h2>Platinum</h2>
                  <p className="column-signup-body">
                    Lorem Ipsum is simply dummy text of the printing and type.
                  </p>
                  <a href="$#" className="button rounder">
                    Sign Up
                  </a>
                  <a href="$#" className="subtle-link">
                    Learn More
                  </a>
                </div>
                {/* <!-- /header-row --> */}

                {/* <!-- details section 1: --> */}
                <dt className="spacer-row justify-content-start">
                  <div className="plans-row-title">
                    Genius Framework Website
                  </div>
                </dt>
                {/* <!-- details section 1 row 1: --> */}
                <div className="grid-item plans-row-title">
                  High Performance Website
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 1 row 2: --> */}
                <div className="grid-item plans-row-title">
                  SEO Focused Domain Name (Optional)
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 1 row 3: --> */}
                <div className="grid-item plans-row-title">
                  Secure Reliable Hosting
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 1 row 4: --> */}
                <div className="grid-item plans-row-title">
                  Migrated/Scraped Pages
                </div>
                <div className="grid-item">10 Pages</div>
                <div className="grid-item">20 Pages</div>
                <div className="grid-item">50 Pages</div>
                {/* <!-- details section 1 row 5: --> */}
                <div className="grid-item plans-row-title">
                  Website Revisions
                </div>
                <div className="grid-item">1 Round</div>
                <div className="grid-item">3 Rounds</div>
                <div className="grid-item">4 Rounds</div>

                {/* <!-- details section 2: --> */}
                <dt className="spacer-row justify-content-start">
                  <div className="plans-row-title">
                    Strategic Content Writing
                  </div>
                </dt>
                {/* <!-- details section 2 row 1: --> */}
                <div className="grid-item plans-row-title">
                  Targeted Organic Keywords
                </div>
                <div className="grid-item">25 Keywords</div>
                <div className="grid-item">35 Keywords</div>
                <div className="grid-item">55 Keywords</div>
                {/* <!-- details section 2 row 2: --> */}
                <div className="grid-item plans-row-title">
                  Industry Related Service Page Content
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 2 row 3: --> */}
                <div className="grid-item plans-row-title">
                  Doctor & Staff Page
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 2 row 4: --> */}
                <div className="grid-item plans-row-title">
                  Call to Action Home Page Slides
                </div>
                <div className="grid-item">3 CTA Slides</div>
                <div className="grid-item">6 CTA Slides</div>
                <div className="grid-item">8 CTA Slides</div>
                {/* <!-- details section 2 row 5: --> */}
                <div className="grid-item plans-row-title">PR Release</div>
                <div className="grid-item">&nbsp;</div>
                <div className="grid-item">Annually</div>
                <div className="grid-item">Bi-Annually</div>

                {/* <!-- details section 3: --> */}
                <dt className="spacer-row justify-content-start">
                  <div className="plans-row-title">
                    Search Engine Optimization
                  </div>
                </dt>
                {/* <!-- details section 3 row 1: --> */}
                <div className="grid-item plans-row-title">
                  On-Site Optimization
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 3 row 2: --> */}
                <div className="grid-item plans-row-title">
                  Structured Data Markup
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 3 row 3: --> */}
                <div className="grid-item plans-row-title">
                  Monthly review from an SEO Analyst
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>

                {/* <!-- details section 3: --> */}
                <dt className="spacer-row justify-content-start">
                  <div className="plans-row-title">
                    Integrated Performance Reporting
                  </div>
                </dt>
                {/* <!-- details section 3 row 1: --> */}
                <div className="grid-item plans-row-title">
                  Google Analytics Integration
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 3 row 2: --> */}
                <div className="grid-item plans-row-title">
                  Google Ranking Reporting
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 3 row 3: --> */}
                <div className="grid-item plans-row-title">
                  Ranking Report Monthly Email
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 3 row 4: --> */}
                <div className="grid-item plans-row-title">
                  New Patient Inquiry Reporting
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 3 row 5: --> */}
                <div className="grid-item plans-row-title">
                  Call & Web Submissions Tracking
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 3 row 6: --> */}
                <div className="grid-item plans-row-title">
                  Google Analyst Integration
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 3 row 7: --> */}
                <div className="grid-item plans-row-title">
                  Appointment Request Integration
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>

                {/* <!-- details section 4: --> */}
                <dt className="spacer-row justify-content-start">
                  <div className="plans-row-title">Social Media Promotion</div>
                </dt>
                {/* <!-- details section 4 row 1: --> */}
                <div className="grid-item plans-row-title">
                  Practice Promoter
                </div>
                <div className="grid-item">120 Day Trial</div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 4 row 2: --> */}
                <div className="grid-item plans-row-title">Blog Posts</div>
                <div className="grid-item">1 Post/Mo</div>
                <div className="grid-item">2 Posts/Mo</div>
                <div className="grid-item">3 Posts/Mo</div>
                {/* <!-- details section 4 row 3: --> */}
                <div className="grid-item plans-row-title">
                  Social Media Syndication
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 4 row 4: --> */}
                <div className="grid-item plans-row-title">
                  Social Media Branding
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 4 row 5: --> */}
                <div className="grid-item plans-row-title">
                  Directory Submissions
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 4 row 6: --> */}
                <div className="grid-item plans-row-title">
                  Duplicate Suppression
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 4 row 7: --> */}
                <div className="grid-item">
                  <b>Paid Advertising Campaigns</b>
                </div>
                <div className="grid-item" />
                <div className="grid-item" />
                <div className="grid-item" />
                {/* <!-- details section 4 row 8: --> */}
                <div className="grid-item plans-row-title">
                  Paid Advertising Campaigns
                </div>
                <div className="grid-item" />
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 4 row 9: --> */}
                <div className="grid-item plans-row-title">
                  Paid Advertising Campaigns
                </div>
                <div className="grid-item" />
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 4 row 10: --> */}
                <div className="grid-item plans-row-title">
                  Paid Advertising Campaigns
                </div>
                <div className="grid-item" />
                <div className="grid-item">2 Landing Pages</div>
                <div className="grid-item">4 Landing Pages</div>

                {/* <!-- details section 5: --> */}
                <dt className="spacer-row justify-content-start">
                  <div className="plans-row-title">Traditional Marketing</div>
                </dt>
                {/* <!-- details section 5 row 1: --> */}
                <div className="grid-item plans-row-title">
                  Logo Creation or Enhancement
                </div>
                <div className="grid-item" />
                <div className="grid-item" />
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 5 row 2: --> */}
                <div className="grid-item plans-row-title">
                  2k Branded Business Cards
                </div>
                <div className="grid-item" />
                <div className="grid-item" />
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>

                {/* <!-- details section 6: --> */}
                <dt className="spacer-row justify-content-start">
                  <div className="plans-row-title">Call Tracking</div>
                </dt>
                {/* <!-- details section 6 row 1: --> */}
                <div className="grid-item plans-row-title">
                  Call Tracking Phone Number
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                {/* <!-- details section 6 row 2: --> */}
                <div className="grid-item plans-row-title">
                  Call Tracking Web Integration
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>

                {/* <!-- details section 7: --> */}
                <dt className="spacer-row justify-content-start">
                  <div className="plans-row-title">Customer Support</div>
                </dt>
                {/* <!-- details section 7 row 1: --> */}
                <div className="grid-item plans-row-title">
                  Dedicated Support Representative
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
                <div className="grid-item">
                  <img src={checkmark} alt="checkmark" />
                </div>
              </div>
              <div className="plans-table no-bg">
                {/* <!-- cta section: --> */}
                <div className="grid-item" />
                <div className="grid-item column-signup">
                  <a href="$#" className="button rounder">
                    Sign Up
                  </a>
                  <a href="$#" className="subtle-link">
                    Learn More
                  </a>
                </div>
                <div className="grid-item column-signup">
                  <a href="$#" className="button rounder">
                    Sign Up
                  </a>
                  <a href="$#" className="subtle-link">
                    Learn More
                  </a>
                </div>
                <div className="grid-item column-signup">
                  <a href="$#" className="button rounder">
                    Sign Up
                  </a>
                  <a href="$#" className="subtle-link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row padded">
            <div class="col-sm-1" />
            <div class="col-sm-10">
              <div class="inner-title center">
                <h2>Commonly Asked Questions</h2>
              </div>
            </div>
            <div class="col-sm-1" />
          </div>
          <div class="row padded">
            <div class="col-sm-1" />
            <div class="col-sm-10">
              <div class="faq-table lg-pad">
                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>Is there a long term agreement?</p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>

                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>
                        Why is a call tracking necessary for you online
                        marketing package?
                      </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>

                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>
                        What do you do differently than other marketing
                        companies?
                      </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>
                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>
                        Can I work with other SEO companies alongside
                        Dental/Doctor Genius?
                      </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>
                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>What happens if I don't have a website? </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>

                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>When will I start seeing results? </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>
                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>
                        What if there are any spelling and grammar errors on the
                        new website?
                      </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>
                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>
                        Do I immediately own the website after signing up with
                        you?
                      </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>

                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>
                        Can you use my main line for the call tracking number?
                      </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>
                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>What is the Review Promoter? </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>
                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>
                        I have domain name emails; will this affect the work you
                        are doing?
                      </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>
                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>
                        How long does it take to get started? What happens in
                        the first two months?
                      </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>
                <div class="faq-wrapper">
                  <div class="question">
                    <dt>
                      <p>
                        How many calls new customers or new patients should I
                        get?
                      </p>
                    </dt>
                    <a href="$#" class="accordion-target">
                      <img src={downChevron} alt="Open" class="open" />
                    </a>
                  </div>
                  <dd />
                </div>
              </div>
            </div>
            <div class="col-sm-1" />
          </div>
          <div class="row padded tall-top request-demo-footer">
            <div className="col-sm-1" />
            <div class="col-sm-5">
              <div class="content-block">
                <div class="inner-title">
                  <h2>
                    Start your
                    <span class="font-weight-semibold"> success </span>
                    with Doctor Genius today!
                  </h2>
                  <div class="accented-paragraph">
                    <p class="s-thin">
                      The Genius platform makes every part of your company
                      process more efficient. Our support team is very excited
                      to help you and get your company on the right path of
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="center">
                <a href="/" className="button flat white-text">
                  Request Demo <img src={thinArrowRight} />
                </a>
              </div>
            </div>
            <div className="col-sm-1" />
          </div>
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)
