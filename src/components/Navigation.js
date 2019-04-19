import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <nav>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>Doctor Genius</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/">Marketing Solutions</ListLink>
      <ListLink to="/our-clients/">Our Clients</ListLink>
      <ListLink to="/plans/">Plans</ListLink>
      <ListLink to="/about/">Company</ListLink>
      <ListLink to="/plans/">Resources</ListLink>
    </ul>
    {children}
  </nav>
)
