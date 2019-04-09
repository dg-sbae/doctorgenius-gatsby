import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Container from "../components/Container"
import Main from "../components/main-content"

import "./default-page-layout.css"

export default ({ children }) => (
  <div>
    <Header>
      <Navigation />
    </Header>

    {/* Possible Hero area? */}

    <Main>
      <Container>{children}</Container>
    </Main>

    <Footer />
  </div>
)
