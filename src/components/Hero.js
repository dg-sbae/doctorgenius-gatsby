import React from "react"

import Container from "./container"

import HeroStyles from "./Hero.module.scss"
import RowStyles from "../components/Row.module.scss"

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className={HeroStyles.hero + " hero"}>
        {/* Hero will be a layout component */}

        <Container>
          <div className={RowStyles.row + " valign-wrapper"}>
            <div className="col-sm-12">
              <div
                className={
                  HeroStyles.heroContent +
                  " " +
                  HeroStyles.accentBlock +
                  " hero-content accent-block"
                }
              >
                <h1>Marketing Solutions</h1>
                <h2>
                  <span>Predictable</span> Practice Growth Solution
                </h2>
                <div
                  className={
                    HeroStyles.accentedParagraph + " accented-paragraph"
                  }
                >
                  <p>
                    Proven and innovative solutions to move your business
                    forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Hero
