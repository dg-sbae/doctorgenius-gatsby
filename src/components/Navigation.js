import React from "react"
import { Component } from "react"
import { Link } from "gatsby"
import Container from "../components/Container"
import $ from "jquery"

//import logo from "../img/logo-white.svg"
//import phone from "../img/phone-white.svg"
import ourTech from "../img/icon/our-technology-white.svg"
import responsiveWebsites from "../img/icon/website-white.svg"
import contentMarketing from "../img/icon/contract-white.svg"
import onlineReputation from "../img/icon/online-reputation-white.svg"
import digitalAdvertising from "../img/icon/digital-advertising-white.svg"
import hostingSolutions from "../img/icon/hosting-solutions-white.svg"
import dentalPractices from "../img/icon/tooth.svg"
import cosmeticSurgeons from "../img/icon/surgeon.svg"
import urgentCare from "../img/icon/urgent-care.svg"
import healthcareMarketing from "../img/icon/sphygmomanometer.svg"
import caseStudy from "../img/icon/briefcase.svg"
//import webinars from "../img/icon/television.svg"
import theStudy from "../img/icon/the-study-white.svg"
import house from "../img/icon/house.svg"
import marketingSolutions from "../img/icon/statistics.svg"
import ourClients from "../img/icon/our-clients.svg"
import plans from "../img/icon/pricing.svg"
import company from "../img/icon/hotel.svg"
import resources from "../img/icon/resources.svg"
import freeDemo from "../img/icon/video-options.svg"
import contact from "../img/icon/email.svg"
import downArrow from "../img/icon/down-arrow.svg"
import dismissIcon from "../img/icon/dismiss-white.svg"
import facebook from "../img/icon/facebook-white.svg"
import twitter from "../img/icon/twitter-white.svg"
import instagram from "../img/icon/instagram-white.svg"
import linkedin from "../img/icon/linkedin-white.svg"
import youtube from "../img/icon/youtube-white.svg"

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
  <li className={props.className}>
    <a href={props.to} target="_blank" rel="noreferrer noopener">
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
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          <img
            className="image-icon"
            src={props.iconSubnav}
            alt="Navigation Icon"
          />
        </Link>
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
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          <img
            className="image-icon"
            src={props.iconSubnav}
            alt="Marketing Solutions Icon"
          />
        </Link>
      </div>
    </div>
    <div className="dropdown-links">
      <div>
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          {props.children}
        </Link>
        <span className="down-arrow-container">
          <img className="down-arrow" src={downArrow} alt="Down Arrow Icon" />
        </span>
      </div>
      <ul>
        <ListLink
          to="/marketing-solutions/websites"
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
          to="/marketing-solutions/online-reputation-management"
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
        <Link
          to={props.to}
          className=""
          activeClassName="active"
          partiallyActive={true}
        >
          <img
            className="image-icon"
            src={props.iconSubnav}
            alt="Who We Serve Icon"
          />
        </Link>
      </div>
    </div>
    <div className="dropdown-links">
      <div>
        <Link
          to={props.to}
          className="sidenav-link-dropdown"
          activeClassName="active"
          partiallyActive={true}
        >
          {props.children}
        </Link>
        <span className="down-arrow-container">
          <img className="down-arrow" src={downArrow} alt="Down Arrow Icon" />
        </span>
      </div>
      <ul>
        <ListLink
          to="/our-clients/dental-practices"
          activeClassName="active"
          partiallyActive={true}
        >
          Dental Practices
        </ListLink>
        <ListLink
          to="/our-clients/cosmetic-surgeons"
          activeClassName="active"
          partiallyActive={true}
        >
          Cosmetic Surgeons
        </ListLink>
        <ListLink
          to="/our-clients/urgent-care-clinics"
          activeClassName="active"
          partiallyActive={true}
        >
          Urgent Care Clinics
        </ListLink>
        <ListLink
          to="/our-clients/healthcare-marketing"
          activeClassName="active"
          partiallyActive={true}
        >
          Healthcare Marketing
        </ListLink>
        <ListLink
          to="/our-clients/chiropractor-practices"
          activeClassName="active"
          partiallyActive={true}
        >
          Chiropractor Practices
        </ListLink>
      </ul>
    </div>
  </li>
)

const CompanySideNavListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <div className="nav-icon-wrapper">
      <div className="icon-wrapper">
        <Link
          to={props.to}
          className="nav-disable-link-open-dropdown-icon"
          activeClassName="active"
          partiallyActive={true}
        >
          <img
            className="image-icon"
            src={props.iconSubnav}
            alt="Company Icon"
          />
        </Link>
      </div>
    </div>
    <div className="dropdown-links">
      <div>
        <Link
          to={props.to}
          className="nav-disable-link-open-dropdown"
          activeClassName="active"
          partiallyActive={true}
        >
          {props.children}
        </Link>
        <span className="down-arrow-container">
          <img className="down-arrow" src={downArrow} alt="Down Arrow Icon" />
        </span>
      </div>
      <ul>
        <ListLink to="/company" activeClassName="active" partiallyActive={true}>
          About
        </ListLink>
        {/* Hidden until the content for page is finalized */}
        <ListLink
          to="/partnerships"
          activeClassName="active"
          partiallyActive={true}
        >
          Partnerships
        </ListLink>
      </ul>
    </div>
  </li>
)

const ResourcesSideNavListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <div className="nav-icon-wrapper">
      <div className="icon-wrapper">
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          <img
            className="image-icon"
            src={props.iconSubnav}
            alt="Resources Icon"
          />
        </Link>
      </div>
    </div>
    <div className="dropdown-links">
      <div>
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          {props.children}
        </Link>
        <span className="down-arrow-container">
          <img className="down-arrow" src={downArrow} alt="Down Arrow Icon" />
        </span>
      </div>
      <ul>
        <ListLink
          to="/the-study"
          activeClassName="active"
          partiallyActive={true}
        >
          The Study
        </ListLink>
        {/* Hidden until the content for page is finalized */}
        {/*<ListLink
          to="/intentional-404/"
          activeClassName="active"
          partiallyActive={true}
        >
          Webinars
        </ListLink>*/}
        <ListLink
          to="/case-study"
          activeClassName="active"
          partiallyActive={true}
        >
          Case Studies
        </ListLink>
        {/* Hidden until the content for page is finalized */}
        {/*<ListLink
          to="/intentional-404/"
          activeClassName="active"
          partiallyActive={true}
        >
          Knowledge Base
        </ListLink>*/}
        {/* Hidden until the content for page is finalized */}
        {/*<ListLink
          to="/intentional-404/"
          activeClassName="active"
          partiallyActive={true}
        >
          eBooks and Whitepapers
        </ListLink>*/}
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
              <Link className="" to="/our-clients/dental-practices" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={dentalPractices}
                      alt="Dental Practices Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/our-clients/dental-practices">
                    Dental Practices
                  </Link>
                  <p>Bringing in new dental patients every day</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Link to="/our-clients/cosmetic-surgeons" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={cosmeticSurgeons}
                      alt="Cosmetic Surgeons Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/our-clients/cosmetic-surgeons">
                    Cosmetic Surgeons
                  </Link>
                  <p>Attract new patients to your office</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <Link className="" to="/our-clients/urgent-care-clinics" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={urgentCare}
                      alt="Urgent Care Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/our-clients/urgent-care-clinics">
                    Urgent Care Clinics
                  </Link>
                  <p>
                    Grow your Urgent Care Center and accelerate your revenue
                    cycle
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Link className="" to="/our-clients/healthcare-marketing" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={healthcareMarketing}
                      alt="Healthcare Marketing Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/our-clients/healthcare-marketing">
                    Healthcare Marketing
                  </Link>
                  <p>
                    Complete marketing specific to healthcare industry needs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <Link className="" to="/our-clients/chiropractor-practices" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={ourTech}
                      alt="Chiropractic Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/our-clients/chiropractor-practices">
                    Chiropractor Practices
                  </Link>
                  <p>
                    Stretch your online reach and increase your new patient
                    calls
                  </p>
                </div>
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
              <Link className="" to="/marketing-solutions/websites" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={responsiveWebsites}
                      alt="Marketing Solutions Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/marketing-solutions/websites">
                    Responsive Websites
                  </Link>
                  <p>Beautiful, High Performing Websites Built to Convert</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Link
                className=""
                to="/marketing-solutions/online-reputation-management"
              />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={onlineReputation}
                      alt="Online Reputation Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link
                    className=""
                    to="/marketing-solutions/online-reputation-management"
                  >
                    Online Reputation
                  </Link>
                  <p>
                    We direct your customers in a stepped out process that gets
                    you reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <Link className="" to="/marketing-solutions/content-marketing" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={contentMarketing}
                      alt="Content Marketing Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link
                    className=""
                    to="/marketing-solutions/content-marketing"
                  >
                    Content Marketing
                  </Link>
                  <p>Target ROI Focused Keywords for Google Search</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Link className="" to="/marketing-solutions/our-technology" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={ourTech}
                      alt="Our Technology Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/marketing-solutions/our-technology">
                    Our Technology
                  </Link>
                  <p>Experience our performance based marketing program</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row dropdown-row">
            <div className="col-sm-6">
              <Link
                className=""
                to="/marketing-solutions/digital-advertising"
              />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={digitalAdvertising}
                      alt="Digital Advertising Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link
                    className=""
                    to="/marketing-solutions/digital-advertising"
                  >
                    Digital Advertising
                  </Link>
                  <p>
                    Expanding your digital reach and drawing in new patients
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Link className="" to="/marketing-solutions/hosting-solutions" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={hostingSolutions}
                      alt="Hosting Solutions Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link
                    className=""
                    to="/marketing-solutions/hosting-solutions"
                  >
                    Hosting Solutions
                  </Link>
                  <p>Enterprise Power for Medical Practice Websites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {}
  </li>
)

const CompanyListLink = props => (
  <li className={props.dataToggle}>
    <Link
      className="dropdown-heading disable-link"
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
              <Link className="" to="/company" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <img
                    className="image-icon"
                    src={company}
                    alt="Company Icon"
                  />
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/company">
                    About
                  </Link>
                  <p>
                    Offering high-end marketing services to health professionals
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Link className="" to="/partnerships" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={caseStudy}
                      alt="Case Studies Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/partnerships">
                    Partnerships
                  </Link>
                  <p>Establishing value-added partnerships</p>
                </div>
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
              <Link className="" to="/the-study" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <img
                    className="image-icon"
                    src={theStudy}
                    alt="The Study Icon"
                  />
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/the-study">
                    The Study
                  </Link>
                  <p>
                    Education on all things digital marketing and practice
                    management
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Link className="" to="/case-study" />
              <div className="dropdown-item-block">
                <div className="nav-icon-wrapper">
                  <div className="icon-wrapper">
                    <img
                      className="image-icon"
                      src={caseStudy}
                      alt="Case Study Icon"
                    />
                  </div>
                </div>
                <div className="dropdown-content-block">
                  <Link className="" to="/case-study">
                    Case Studies
                  </Link>
                  <p>
                    See Doctor Genius Action Plan to address one doctor’s needs
                  </p>
                </div>
              </div>
            </div>
            {/* Hidden until the content for page is finalized */}
            {/*<div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={webinars} />
                </div>
              </div>

              <div className="dropdown-content-block">
                <Link className="" to="/intentional-404">
                  Webinars
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>*/}
          </div>
          {/*<div className="row dropdown-row">*/}
          {/* Hidden until the content for page is finalized */}
          {/*<div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={caseStudy} />
                </div>
              </div>

              <div className="dropdown-content-block">
                <Link className="" to="/case-study">
                  Case Studies
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>*/}
          {/* Hidden until the content for page is finalized */}
          {/*<div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={info} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to="/intentional-404">
                  Knowledge Base
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>*/}
          {/*</div>*/}
          {/*<div className="row dropdown-row">*/}
          {/* Hidden until the content for page is finalized */}
          {/*<div className="col-sm-6">
              <div className="nav-icon-wrapper">
                <div className="icon-wrapper">
                  <img className="image-icon" src={ourTech} />
                </div>
              </div>
              <div className="dropdown-content-block">
                <Link className="" to="/intentional-404">
                  eBooks &amp; Whitepapers
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  volutpat mi sit amet.
                </p>
              </div>
            </div>*/}
          {/*<div className="col-sm-6">
              <div className="dropdown-content-block">
                <Link className="" to={props.to} />
                <p />
              </div>
          </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
    {}
  </li>
)

class Navigation extends Component {
  componentDidMount() {
    $(document).ready(function() {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      // let vh = window.innerHeight * 0.01
      // Then we set the value in the --vh custom property to the root of the document
      // document.getElementById("sidebar").style.setProperty("--vh", `${vh}px`)
      $(".dropdown-heading").click(function(event) {
        event.stopPropagation()
      })

      // START - Disable the title icon for the dropdown menu
      $(".disable-link").click(function(event) {
        event.preventDefault()
      })

      $(".nav-disable-link-open-dropdown-icon").click(function(event) {
        event.preventDefault()
        var thisDropdownList = $(this)
          .parent()
          .parent()
          .siblings(".dropdown-links")
          .children("ul")
        $("#sidebar .dropdown-links ul")
          .not(thisDropdownList)
          .slideUp(500)
        thisDropdownList.slideDown(500)
      })
      $(".nav-disable-link-open-dropdown").click(function(event) {
        event.preventDefault()
        var thisDropdownList = $(this)
          .parent()
          .siblings("ul")
        $("#sidebar .dropdown-links ul")
          .not(thisDropdownList)
          .slideUp(500)
        thisDropdownList.slideDown(500)
      })
      // END - Disable the title icon for the dropdown menu

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
          var thisDropdownTitle = $(this).parents(".nav-item")
          $("#sidebar .dropdown-links ul")
            .not(thisDropdownList)
            .slideUp(500)
          if (thisDropdownTitle.hasClass("show")) {
            thisDropdownTitle.removeClass("show")
            thisDropdownList.slideUp(500)
          } else {
            thisDropdownList.slideDown(500)
            thisDropdownTitle.addClass("show")
          }
        }
      )
    })
  }
  render() {
    return (
      <div className="navigation-wrapper">
        <nav id="sidebar">
          <button
            className=""
            id="dismiss"
            type="button"
            data-toggle=""
            aria-label=""
          >
            <img
              className="dismiss-icon"
              src={dismissIcon}
              alt="Dismiss Icon"
            />
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
              to="/our-clients/dental-practices"
            >
              Our Clients
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
            <CompanySideNavListLink
              className="nav-item dropdown"
              dataToggle="dropdown"
              iconSubnav={company}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/company"
            >
              Company
            </CompanySideNavListLink>
            <ResourcesSideNavListLink
              className="nav-item dropdown"
              dataToggle="dropdown"
              iconSubnav={resources}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/the-study"
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
              to="/demo"
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
                className="social-link-container"
              />
              <ExternalLink
                to="https://twitter.com/DoctorGeniusCA"
                source={twitter}
                alt="Twitter logo icon"
                className="social-link-container"
              />
              <ExternalLink
                to="https://www.instagram.com/doctor.genius/"
                source={instagram}
                alt="Instagram logo icon"
                className="social-link-container"
              />
              <ExternalLink
                to="https://www.linkedin.com/company/doctor-genius"
                source={linkedin}
                alt="LinkedIn logo icon"
                className="social-link-container"
              />
              <ExternalLink
                to="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos"
                source={youtube}
                alt="Youtube logo icon"
                className="social-link-container"
              />
            </ul>
          </div>
        </nav>
        <div className="overlay" />
        <nav className="navbar navbar-default navbar-expand-lap fixed-top">
          <Container>
            {/*<button type="button" id="sidebarCollapse" className="btn btn-info">
              <i className="fas fa-align-left" />
              <span>Toggle Sidebar</span>
    </button>*/}
            <button
              className="navbar-toggler"
              id="sidenav-trigger"
              type="button"
              data-toggle="collapse"
              // data-target="#navbarSupportedContent"
              // aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
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
                  to="/marketing-solutions"
                >
                  Marketing Solutions
                </MarketingSolutionsListLink>
                <OurClientsListLink
                  className="nav-item dropdown who-we-serve-dropdown"
                  dataToggle="dropdown"
                  to="/our-clients/dental-practices"
                >
                  Our Clients
                </OurClientsListLink>

                <ListLink className="" to="/plans">
                  Plans
                </ListLink>
                <CompanyListLink
                  className="nav-item dropdown company-dropdown"
                  dataToggle="dropdown"
                  to="/company"
                >
                  Company
                </CompanyListLink>
                <StudySingleListLink
                  className="nav-item dropdown resources-dropdown"
                  dataToggle="dropdown"
                  to="/the-study"
                >
                  Resources
                </StudySingleListLink>
              </ul>
            </div>
            <div className="contact-links">
              <ul className="main-contact-links">
                <li className="phone">
                  <a href="tel:877-477-2311">
                    <div className="phone phone-holder" />
                    877.477.2311
                  </a>
                </li>
                <ListLink
                  to="/demo"
                  className="button nav-button transparent free-demo-button"
                >
                  Free Demo
                </ListLink>
              </ul>
              <ul className="demo-only">
                <li className="call">Call For Demo!</li>
                <a
                  href="tel:877-477-2311"
                  className="button nav-button transparent free-demo-button"
                >
                  877.477.2311
                </a>
              </ul>
            </div>
          </Container>
        </nav>
      </div>
    )
  }
}

export default Navigation
