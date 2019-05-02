import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"

//import logo from "../img/logo-white.svg"
import phone from "../img/phone-white.svg"
import ourTech from "../../public/icon/our-technology-white.svg"
import responsiveWebsites from "../../public/icon/website-white.svg"
import info from "../../public/icon/info.svg"
import contentMarketing from "../../public/icon/contract-white.svg"
import onlineReputation from "../../public/icon/online-reputation-white.svg"
import digitalAdvertising from "../../public/icon/digital-advertising-white.svg"
import hostingSolutions from "../../public/icon/hosting-solutions-white.svg"
import dentalPractices from "../../public/icon/tooth.svg"
import cosmeticSurgeons from "../../public/icon/surgeon.svg"
import urgentCare from "../../public/icon/urgent-care.svg"
import healthcareMarketing from "../../public/icon/sphygmomanometer.svg"
import caseStudy from "../../public/icon/briefcase.svg"
import webinars from "../../public/icon/television.svg"
import theStudy from "../../public/icon/the-study-white.svg"

import "../styles/global-styles.scss"
import "bootstrap/dist/js/bootstrap.min.js"
// import "../../static/scripts/navigationFunctionality.js"

const ListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <Link to={props.to} activeClassName="active" partiallyActive={true}>
      {props.children}
    </Link>
    {}
  </li>
)

const OurClientsListLink = props => (
  <li className={props.dataToggle}>
    <Link
      className="dropdown-heading"
      to={props.to}
      activeClassName="active"
      partiallyActive={true}
      data-toggle={props.dataToggle}
    >
      {props.children}
    </Link>
    <div className="dropdown-menu caret who-we-serve-dropdown">
      <div className="row">
        <div className="col-sm-12">
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={dentalPractices} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Dental Practices
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={cosmeticSurgeons} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Cosmetic Surgeons
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>
          </div>
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={urgentCare} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Urgent Care Clinics
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={healthcareMarketing} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Healthcare Marketing
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>
          </div>
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={ourTech} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Chiropractor Practices
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="dropdown-content-block">
                <Link className="" to={props.to} />
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {}
  </li>
)

const MarketingSolutionsListLink = props => (
  <li className={props.dataToggle}>
    <Link
      className="dropdown-heading"
      to={props.to}
      activeClassName="active"
      partiallyActive={true}
      data-toggle={props.dataToggle}
    >
      {props.children}
    </Link>
    <div className="dropdown-menu caret marketing-solutions-dropdown">
      <div className="row">
        <div className="col-sm-12">
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={responsiveWebsites} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Responsive Websites
                </Link>
                <p>
                  Our websites are power-packed with fresh & unique content
                  tailored to your practice.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={onlineReputation} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Online Reputation
                </Link>
                <p>
                  Our websites are power-packed with fresh & unique content
                  tailored to your practice.
                </p>
              </div>
            </div>
          </div>
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={contentMarketing} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Content Marketing
                </Link>
                <p>
                  Our websites are power-packed with fresh & unique content
                  tailored to your practice.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={ourTech} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Our Technology
                </Link>
                <p>
                  Our websites are power-packed with fresh & unique content
                  tailored to your practice.
                </p>
              </div>
            </div>
          </div>
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={digitalAdvertising} />
                </div>
              </div>

              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Digital Advertising
                </Link>
                <p>
                  Our websites are power-packed with fresh & unique content
                  tailored to your practice.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={hostingSolutions} />
                </div>
              </div>

              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Hosting Solutions
                </Link>
                <p>
                  Our websites are power-packed with fresh & unique content
                  tailored to your practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {}
  </li>
)

const StudySingleListLink = props => (
  <li className={props.dataToggle}>
    <Link
      className="dropdown-heading"
      to={props.to}
      activeClassName="active"
      partiallyActive={true}
      data-toggle={props.dataToggle}
    >
      {props.children}
    </Link>
    <div className="dropdown-menu caret resources-dropdown">
      <div className="row">
        <div className="col-sm-12">
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <img className="image-icon" src={theStudy} />
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  The Study
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={webinars} />
                </div>
              </div>

              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Webinars
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>
          </div>
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={caseStudy} />
                </div>
              </div>

              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Case Studies
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={info} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  Knowledge Base
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>
          </div>
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={ourTech} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to={props.to}>
                  eBooks &amp; Whitepapers
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="dropdown-content-block">
                <Link className="" to={props.to} />
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          <MarketingSolutionsListLink
            className="nav-item dropdown marketing-solutions-dropdown"
            dataToggle="dropdown"
            to="/marketing-solutions/"
          >
            Marketing Solutions
          </MarketingSolutionsListLink>
          <OurClientsListLink
            className="nav-item dropdown who-we-serve-dropdown"
            dataToggle="dropdown"
            to="/our-clients/"
          >
            Who We Serve
          </OurClientsListLink>

          <ListLink className="" to="/plans/">
            Plans
          </ListLink>
          <ListLink className="" to="/company/">
            Company
          </ListLink>
          <StudySingleListLink
            className="nav-item dropdown resources-dropdown"
            dataToggle="dropdown"
            to="/the-study/"
          >
            Resources
          </StudySingleListLink>
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
