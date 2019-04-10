import React from "react"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"

import "bootstrap/dist/css/bootstrap.css"
import "../styles/company-page.scss"
import "../styles/global-styles.scss"

export default props => (
  <DefaultPageLayout>
    <div className={props["*"]}>
      <div className="hero">
        {/* Hero will be a layout component */}
        <Container>
          <div className="valign-wrapper row">
            <div className="col-sm-5">
              <div className="accent-block">
                <h1>Company</h1>
                <h2>What We Are About</h2>
                <div className="accentedParagraph">
                  <p>
                    DoctorGenius establishes and boosts your brand online using
                    innovative digital marketing and search engine optimization
                    strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Main>
        <Container>
          <div className="row valign-wrapper">
            <div className="col-sm-6">
              <div className="innerTitle">
                <h2>
                  The <b>Doctor Genius</b> Story
                </h2>
              </div>
              <div className="accentedParagraph">
                <p>
                  We are based in Irvine, California, USA. Dental Genius has
                  consistent 5 Star Ratings on Google+, and A Rated with the
                  BBB. We employ and all-star development, support, and sales
                  team to provide high level online marketing solutions to
                  medical & health practices within the United States.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <img className="logo" src="/logo.png" alt="Our Logo" />
            </div>
          </div>
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)
