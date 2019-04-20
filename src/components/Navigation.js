import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"

import logo from "../img/logo-white.svg"
import phone from "../img/phone-white.svg"

import "../styles/global-styles.scss"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <nav>
    <Container>
      <div class="logo">
        <Link>
          <img src={logo} alt="Our Logo" />
        </Link>
      </div>
      <div class="main-links">
        <ul>
          <ListLink to="/marketing-solutions/">Marketing Solutions</ListLink>
          <ListLink to="/our-clients/">Our Clients</ListLink>
          <ListLink to="/plans/">Plans</ListLink>
          <ListLink to="/company/">Company</ListLink>
          <ListLink to="/study-archive/">Resources</ListLink>
        </ul>
      </div>
      <div class="contact-links">
        <ul>
          <ListLink to="$#">
            <img src={phone} alt="Phone" class="phone" />
            877.477.2311
          </ListLink>
          <ListLink>
            <a href="/contact/" className="button flat transparent">
              Free Demo
            </a>
          </ListLink>
        </ul>
      </div>

      {children}
    </Container>
  </nav>
)
