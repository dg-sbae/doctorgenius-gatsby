import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

import "./default-page-layout.css"

export default ({ children }) => (
  <div className="content-wrapper">
    <Header>
      <Navigation />
    </Header>

    {children}

    <Footer />
  </div>
)
