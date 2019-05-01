import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"

//import logo from "../img/logo-white.svg"
import phone from "../img/phone-white.svg"

import "../styles/global-styles.scss"
// import "../scripts/navigationFunctionality.js"

const ListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <Link to={props.to} activeClassName="active" partiallyActive={true}>
      {props.children}
    </Link>
    {}
  </li>
)

export default ({ children }) => (
  <nav className="navbar navbar-expand-md fixed-top">
    <Container>
      <div className="logo">
        <Link to="/">
          <div className="navbar-brand logo-holder" />
        </Link>
      </div>

      <div
        className="main-links collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <ListLink
            className="dropdown-marketing-solutions"
            dataToggle="dropdown-marketing-solutions"
            to="/marketing-solutions/"
          >
            Marketing Solutions
          </ListLink>
          <ListLink
            className="dropdown-our-clients"
            dataToggle="dropdown-our-clients"
            to="/our-clients/"
          >
            Who We Serve
          </ListLink>

          <ListLink className="" to="/plans/">
            Plans
          </ListLink>
          <ListLink className="" to="/company/">
            Company
          </ListLink>
          <ListLink
            className="dropdown-the-study"
            dataToggle="dropdown-the-study"
            to="/the-study/"
          >
            Resources
          </ListLink>
        </ul>
      </div>
      <div className="contact-links">
        <ul>
          <ListLink to="/">
            <img src={phone} alt="Phone" className="phone" />
            877.477.2311
          </ListLink>
          <ListLink to="/contact" className="button flat transparent">
            Free Demo
          </ListLink>
        </ul>
      </div>

      {children}
    </Container>
  </nav>
)
