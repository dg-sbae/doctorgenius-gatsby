import React from "react"
import TagManager from "react-gtm-module"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

import "../styles/_global-styles.scss"

const tagManagerArgs = {
  gtmId: "GTM-52SPGC",
}

TagManager.initialize(tagManagerArgs)

export default ({ children, location }, props) => (
  <div className={location + " content-wrapper"}>
    <Header>
      <Navigation />
    </Header>
    {children}
    <Footer />
  </div>
)
