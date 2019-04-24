import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"

import logo from "../img/logo-white.svg"
import phone from "../img/phone-white.svg"

import "../styles/global-styles.scss"

const ListLink = props => (
  <li className={props.className}>
    <Link to={props.to} activeClassName="active" partiallyActive={true}>
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <nav className="navbar navbar-expand-md">
    <Container>
      <div class="logo">
        <Link>
          <img className="navbar-brand" src={logo} alt="Our Logo" />
        </Link>
      </div>

      <div
        className="main-links collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <ListLink
            className="dropdown-marketing-solutions"
            to="/marketing-solutions/"
          >
            Marketing Solutions
          </ListLink>
          <ListLink className="dropdown-our-clients" to="/our-clients/">
            Our Clients
          </ListLink>

          <ListLink className="" to="/plans/">
            Plans
          </ListLink>
          <ListLink className="" to="/company/">
            Company
          </ListLink>
          <ListLink className="dropdown-study-archive" to="/study-archive/">
            Resources
          </ListLink>
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
