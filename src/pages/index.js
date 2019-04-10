import React from "react"
//import { graphql } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import InnerTitle from "../components/inner-title.js"
import "bootstrap/dist/css/bootstrap.css"

import medal from "../img/medal.png"
import money from "../img/money.png"
import stars from "../img/stars.png"
import groupChat from "../img/group-chat.png"
import homepageMobileMockup from "../img/homepage-mobile-mockup.png"
import fullBleedBackgroundSlanted from "../img/full-bleed-bg-slanted.png"
import newPatientAcquisitions from "../img/home-new-patient-acquisitions.png"
import dgDifferent from "../img/home-dg-different.png"
import dgClientSatisfaction from "../img/home-dg-client-satisfaction.png"

export default ({ data }) => (
  <DefaultPageLayout>
    {/*<div className="col-xl-">
      <InnerTitle title="This Is" accent=" the Homepage" underlined>
        Test
      </InnerTitle>
    </div>*/}
    <div class="container">
      <div class="row">
        <div class="inner-title col-xl-12">
          <h3 class="strapline">Performance, Results, Excellence</h3>
          <h2>We Care About Your Success</h2>
        </div> 
        <div class="col-xl-3">
          <div class="panel">
            <img src={medal} alt="" />
            <div class="inner-title">
              <h2>1,125%</h2>
            </div>
            <p>Increase in Google First-Page Results</p>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="panel">
            <img src={money} alt="" />
            <div class="inner-title">
              <h2>100%</h2>
            </div>
            <p>Increase in Revenue!</p>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="panel">
            <img src={groupChat} alt="" />
            <div class="inner-title">
              <h2>88%</h2>
            </div>
            <p>Increase in New Patient Calls!</p>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="panel">
            <img src={stars} alt="" />
            <div class="inner-title">
              <h2>4+ Stars</h2>
            </div>
            <p>We take pride in our Google reviews</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="content-block col-xl-12">
          <div class="inner-title col-xl-12">
            <h3 class="strapline">Built for success</h3>
            <h2>All-in-One <span class="bold">Marketing Dashboard</span></h2>
          </div>
        </div>
      </div>
      <div class="row">
        <p class="accented">
          Our robust, comprehensive marketing solutions helps keep your online digital marketing presence ahead of competition. 
          We provide tools and analysis to improve new patient acquisition with transparent reporting to measure our results.
        </p>
      </div>
      <div class="row">
        <div class="full-bleed marketing-dashboard-background">
          <img src={homepageMobileMockup} alt="" />
        </div>
      </div>
      <div class="row">
        <div class="inner-title col-xl-12">
          <h3 class="strapline">Setting the foundation for success</h3>
          <h2>Why Choose <span class="bold">Doctor Genius</span></h2>
        </div> 
      </div>
      <div class="row">
        <div class="col-xl-6 ">
          <img src={newPatientAcquisitions} alt="" />
        </div>
        <div class="col-xl-6">
          <div class="inner-title col-xl-12">
            <h2>Why is Doctor Genius #1 in new patient acquisitions?</h2>
            <p class="accented">When you join the Doctor Genius Family, we are now partnered. We have a direct interest in your business doing well.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="inner-title col-xl-12">
            <h2>What makes Doctor Genius different?</h2>
            <p class="accented">We are not a cookie cutter type program. We are a performance based program and take pride in your success.</p>
          </div>
        </div>
        <div class="col-xl-6 ">
          <img src={dgDifferent} alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 ">
          <img src={dgClientSatisfaction} alt="" />
        </div>
        <div class="col-xl-6">
          <div class="inner-title col-xl-12">
            <h2>How would you rate Doctor Genius client satisfaction?</h2>
            <p class="accented">Don't take our word for it, see what our clients say about us 100+ 5 Stars.  Check our <a href="/reviews">reviews</a></p>
          </div>
        </div>
      </div>
      <div class="row">
          <div class="col-xl-6">
            <div class="inner-title col-xl-12">
              <h2>Start your <span class="bold">success</span> with Doctor Genius today!</h2>
              <p class="accented">The Genius platform makes every part of your company process more efficient. 
              Our support team is very excited to help you and get your company on the right path of success.</p>
            </div>
          </div>
          <div class="col-xl-6 d-flex justify-content-center align-items-center">
            <div class="button flat">
              <a>Request Demo <i></i></a>
            </div>
          </div>
      </div>
    </div>
  </DefaultPageLayout>
)

// export const pageQuery = graphql`
// query {
//     allWordpressPage {
//       edges {
//         node {
//           id
//           title
//           excerpt
//           slug
//           date(formatString: "MMMM DD, YYYY")
//         }
//       }
//     }
//   }
//   `
