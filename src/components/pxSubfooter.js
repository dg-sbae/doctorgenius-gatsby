import React from "react"

import PxFooterStyles from "./pxSubfooter.module.scss"
import RowStyles from "./Row.module.scss"

import pxLogo from "../img/dg-px-logo.svg"

class PxSubfooter extends React.Component {
  render() {
    return (
      <div className={PxFooterStyles.pxSubfooterStyles}>
        <div
          className={
            RowStyles.row +
            " " +
            RowStyles.tallTop
          }
        >
          <div className="col-sm-10 col-md-10 col-lg-5">
            <div className={PxFooterStyles.contentBlock}>
              <h1>
                Transform your patient experience with Doctor Genius
            </h1>
              <div className={PxFooterStyles.strapline}>
                <p>
                  You're now one step closer to improving your overall patient experience.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className={RowStyles.row}>

          <div className="col-sm-10 col-lg-4">
            <div className={PxFooterStyles.ctaSection}>
              <a
                href="/demo"
                className={PxFooterStyles.ctaButton}
              >
                Get Started
              </a>
              <div className={PxFooterStyles.pxLogo}>
                <img src={pxLogo} alt="Doctor Genius PX" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PxSubfooter