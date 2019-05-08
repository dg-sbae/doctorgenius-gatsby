import React from "react"
import { Component } from "react"
import { Link } from "gatsby"
import Container from "../components/Container"
import $ from "jquery"

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
import house from "../../public/icon/house.svg"
import marketingSolutions from "../../public/icon/statistics.svg"
import ourClients from "../../public/icon/our-clients.svg"
import plans from "../../public/icon/pricing.svg"
import company from "../../public/icon/hotel.svg"
import resources from "../../public/icon/resources.svg"
import freeDemo from "../../public/icon/video-options.svg"
import contact from "../../public/icon/email.svg"
import downArrow from "../../public/icon/down-arrow.svg"
import dismissIcon from "../../public/icon/dismiss-white.svg"
import facebook from "../../public/icon/facebook-white.svg"
import twitter from "../../public/icon/twitter-white.svg"
import instagram from "../../public/icon/instagram-white.svg"
import linkedin from "../../public/icon/linkedin-white.svg"
import youtube from "../../public/icon/youtube-white.svg"

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

const ExternalLink = props => (
  <li className="">
    <a href={props.to} target="_blank">
      <div className="icon-wrapper">
        <img className="img-icon" src={props.source} alt={props.alt} />
      </div>
    </a>
  </li>
)

const SideNavListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <div className="nav-icon-wrapper">
      <div className="icon-wrapper">
        <img className="image-icon" src={props.iconSubnav} />
      </div>
    </div>
    <div className="dropdown-links">
      <Link to={props.to} activeClassName="active" partiallyActive={true}>
        {props.children}
      </Link>
    </div>
    {}
  </li>
)

const MarketingSolutionsSideNavListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <div className="nav-icon-wrapper">
      <div className="icon-wrapper">
        <img className="image-icon" src={props.iconSubnav} />
      </div>
    </div>
    <div className="dropdown-links">
      <div>
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          {props.children}
        </Link>
        <span className="down-arrow-container">
          <img className="down-arrow" src={downArrow} />
        </span>
      </div>
      <ul>
        <ListLink
          to="/marketing-solutions/responsive-websites"
          activeClassName="active"
          partiallyActive={true}
        >
          Responsive Websites
        </ListLink>
        <ListLink
          to="/marketing-solutions/content-marketing"
          activeClassName="active"
          partiallyActive={true}
        >
          Content Marketing
        </ListLink>
        <ListLink
          to="/marketing-solutions/digital-advertising"
          activeClassName="active"
          partiallyActive={true}
        >
          Digital Advertising
        </ListLink>
        <ListLink
          to="/marketing-solutions/online-reputation"
          activeClassName="active"
          partiallyActive={true}
        >
          Online Reputation
        </ListLink>
        <ListLink
          to="/marketing-solutions/our-technology"
          activeClassName="active"
          partiallyActive={true}
        >
          Our Technology
        </ListLink>
        <ListLink
          to="/marketing-solutions/hosting-solutions"
          activeClassName="active"
          partiallyActive={true}
        >
          Hosting Solutions
        </ListLink>
      </ul>
    </div>
  </li>
)

const WhoWeServeSideNavListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <div className="nav-icon-wrapper">
      <div className="icon-wrapper">
        <img className="image-icon" src={props.iconSubnav} />
      </div>
    </div>
    <div className="dropdown-links">
      <div>
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          {props.children}
        </Link>
        <span className="down-arrow-container">
          <img className="down-arrow" src={downArrow} />
        </span>
      </div>
      <ul>
        <ListLink
          to="/marketing-solutions/responsive-websites"
          activeClassName="active"
          partiallyActive={true}
        >
          Dental Practices
        </ListLink>
        <ListLink
          to="/marketing-solutions/content-marketing"
          activeClassName="active"
          partiallyActive={true}
        >
          Cosmetic Surgeons
        </ListLink>
        <ListLink
          to="/marketing-solutions/digital-advertising"
          activeClassName="active"
          partiallyActive={true}
        >
          Urgent Care Clinics
        </ListLink>
        <ListLink
          to="/marketing-solutions/online-reputation"
          activeClassName="active"
          partiallyActive={true}
        >
          Healthcare Marketing
        </ListLink>
        <ListLink
          to="/marketing-solutions/our-technology"
          activeClassName="active"
          partiallyActive={true}
        >
          Chiropractor Practices
        </ListLink>
      </ul>
    </div>
  </li>
)

const ResourcesSideNavListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <div className="nav-icon-wrapper">
      <div className="icon-wrapper">
        <img className="image-icon" src={props.iconSubnav} />
      </div>
    </div>
    <div className="dropdown-links">
      <div>
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          {props.children}
        </Link>
        <span className="down-arrow-container">
          <img className="down-arrow" src={downArrow} />
        </span>
      </div>
      <ul>
        <ListLink
          to="/marketing-solutions/responsive-websites"
          activeClassName="active"
          partiallyActive={true}
        >
          Dental Practices
        </ListLink>
        <ListLink
          to="/marketing-solutions/content-marketing"
          activeClassName="active"
          partiallyActive={true}
        >
          Cosmetic Surgeons
        </ListLink>
        <ListLink
          to="/marketing-solutions/digital-advertising"
          activeClassName="active"
          partiallyActive={true}
        >
          Urgent Care Clinics
        </ListLink>
        <ListLink
          to="/marketing-solutions/online-reputation"
          activeClassName="active"
          partiallyActive={true}
        >
          Healthcare Marketing
        </ListLink>
        <ListLink
          to="/marketing-solutions/our-technology"
          activeClassName="active"
          partiallyActive={true}
        >
          Chiropractor Practices
        </ListLink>
      </ul>
    </div>
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
                <Link className="" to="/our-clients/dental-practices/">
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
                <Link className="" to="/our-clients/cosmetic-surgeons/">
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
                <Link className="" to="/our-clients/urgent-care-clinics/">
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
                <Link className="" to="/our-clients/who-we-serve/">
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
                <Link className="" to="/our-clients/chiropractor-practices/">
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
                <Link className="" to="marketing-solutions/websites">
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
                <Link
                  className=""
                  to="marketing-solutions/online-reputation-management"
                >
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
                <Link className="" to="marketing-solutions/content-marketing">
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
                <Link className="" to="marketing-solutions/our-technology">
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
                <Link className="" to="marketing-solutions/digital-advertising">
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
                <Link className="" to="marketing-solutions/hosting-solutions">
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
                <Link className="" to="/the-study">
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
                <Link className="" to="/intentional-404/">
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
                <Link className="" to="/case-study/">
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
                <Link className="" to="/intentional-404/">
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
                <Link className="" to="/intentional-404/">
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

class Navigation extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $(".dropdown-heading").click(function(event) {
        event.stopPropagation()
      })
      $(".dropdown-menu")
      // $("#sidebar").mCustomScrollbar({
      //   theme: "minimal",
      // })

      $("#dismiss, .overlay").on("click", function() {
        // hide sidebar
        $("#sidebar").removeClass("active")
        // hide overlay
        $(".overlay").removeClass("active")
      })

      $("#sidenav-trigger").on("click", function() {
        // open sidebar
        $("#sidebar").addClass("active")
        // fade in the overlay
        $(".overlay").addClass("active")
        $(".collapse.in").toggleClass("in")
        $("a[aria-expanded=true]").attr("aria-expanded", "false")
      })

      $("#sidebar .dropdown-links .down-arrow-container").on(
        "click",
        function() {
          var thisDropdownList = $(this)
            .parent()
            .siblings("ul")
          $("#sidebar .dropdown-links ul")
            .not(thisDropdownList)
            .slideUp(500)
          thisDropdownList.slideDown(500)
        }
      )
    })
  }
  render() {
    return (
      <div className="navigation-wrapper">
        <nav id="sidebar">
          <button
            class=""
            id="dismiss"
            type="button"
            data-toggle=""
            aria-expanded=""
            aria-label=""
          >
            <img className="dismiss-icon" src={dismissIcon} />
          </button>

          <ul className="navbar-nav">
            <SideNavListLink
              className="nav-item dropdown"
              dataToggle=""
              iconSubnav={house}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/"
            >
              Home
            </SideNavListLink>
            <MarketingSolutionsSideNavListLink
              className="nav-item dropdown"
              dataToggle="dropdown"
              iconSubnav={marketingSolutions}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/marketing-solutions"
            >
              Marketing Solutions
            </MarketingSolutionsSideNavListLink>
            <WhoWeServeSideNavListLink
              className="nav-item dropdown"
              dataToggle="dropdown"
              iconSubnav={ourClients}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/our-cleints"
            >
              Who We Serve
            </WhoWeServeSideNavListLink>
            <SideNavListLink
              className="nav-item dropdown"
              dataToggle="dropdown"
              iconSubnav={plans}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/plans"
            >
              Plans
            </SideNavListLink>
            <SideNavListLink
              className="nav-item dropdown"
              dataToggle="dropdown"
              iconSubnav={company}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/company"
            >
              Company
            </SideNavListLink>
            <ResourcesSideNavListLink
              className="nav-item dropdown"
              dataToggle="dropdown"
              iconSubnav={resources}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/resources"
            >
              Resources
            </ResourcesSideNavListLink>
            <SideNavListLink
              className="nav-item dropdown"
              dataToggle="dropdown"
              iconSubnav={freeDemo}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/demo"
            >
              Free Demo
            </SideNavListLink>
            <SideNavListLink
              className="nav-item dropdown"
              dataToggle="dropdown"
              iconSubnav={contact}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/contact"
            >
              Contact
            </SideNavListLink>
          </ul>
          <div className="social-media-container">
            <ul className="social-media">
              <ExternalLink
                to="https://www.facebook.com/DoctorGeniusMarketing"
                source={facebook}
                alt="Facebook logo icon"
              />
              <ExternalLink
                to="https://twitter.com/DoctorGeniusCA"
                source={twitter}
                alt="Twitter logo icon"
              />
              <ExternalLink
                to="https://www.instagram.com/doctor.genius/"
                source={instagram}
                alt="Instagram logo icon"
              />
              <ExternalLink
                to="https://www.linkedin.com/company/doctor-genius"
                source={linkedin}
                alt="LinkedIn logo icon"
              />
              <ExternalLink
                to="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos"
                source={youtube}
                alt="Youtube logo icon"
              />
            </ul>
          </div>
        </nav>
        <div class="overlay" />
        <nav className="navbar navbar-default navbar-expand-lap fixed-top">
          <Container>
            {/*<button type="button" id="sidebarCollapse" class="btn btn-info">
              <i class="fas fa-align-left" />
              <span>Toggle Sidebar</span>
    </button>*/}
            <button
              class="navbar-toggler"
              id="sidenav-trigger"
              type="button"
              data-toggle="collapse"
              // data-target="#navbarSupportedContent"
              // aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
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
                <ListLink className="phone" to="/">
                  <div className="phone phone-holder" />
                  877.477.2311
                </ListLink>
                <ListLink
                  to="/contact"
                  className="button nav-button transparent"
                >
                  Free Demo
                </ListLink>
              </ul>
            </div>
          </Container>
        </nav>
      </div>
    )
  }
}

export default Navigation
