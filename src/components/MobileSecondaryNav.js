import React from "react"
import jQuery from "jquery"
import { Link } from "gatsby"
import $ from "jquery"

import styles from "./mobile-secondary-nav.module.scss"
import downArrow from "../../public/icon/down-arrow.svg"

const mobileSubNavLinks = {
  marketingSolutions: [
    "Responsive Websites",
    "Content Marketing",
    "Digital Advertising",
    "Online Reputation",
    "Our Technology",
    "Hosting Solutions",
  ],
  ourClients: [
    "Dental Practices",
    "Urgent Care Clinics",
    "Chiropractor Practices",
    "Cosmetic Surgeons",
    "Healthcare Marketing",
  ],
}

const ListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <Link to={props.to} activeClassName="active" partiallyActive={true}>
      {props.children}
    </Link>
    {}
  </li>
)

const FirstListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <Link to={props.to} activeClassName="active" partiallyActive={true}>
      {props.children}
    </Link>
    <span className={styles.downArrowContainer} onClick={props.clickHandler}>
      <img className={styles.downArrow} src={downArrow} />
    </span>
  </li>
)

const clickHandler = () => {}

export default class MobileSecondaryNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentDidMount() {
    // var props = this.props
    $(document).ready(() => {
      // console.log(this.props.parentPage)
      // var d = $("." + styles.innerSecondaryNavLinks)
      // var target = document.querySelector("." + styles.innerSecondaryNavLinks)
      // target.parentNode.scrollTop = target.offsetTop
      $("." + styles.downArrowContainer).click(event => {
        var d = $("." + styles.innerSecondaryNavLinks)
        // var heightHeader = document.querySelector(".hero").offsetHeight

        var listLength = mobileSubNavLinks[this.props.parentPage].length - 1 //dont include the first title

        var parentPage = mobileSubNavLinks[this.props.parentPage].map(key => {})

        var yPositionDropdown = document
          .querySelector("." + styles.mobileSecondaryNavDropdown)
          .getBoundingClientRect()

        // var bodyRect = document.body.getBoundingClientRect()
        var heightSubNavDropdown = yPositionDropdown.height * listLength
        // var heightSubNavDropdown = document.querySelector(
        //   "." + styles.innerSecondaryNavLinks
        // ).offsetHeight
        //Take the yPositionDropdown.height and multiply by the amount of items in the inner dropdown to get the height while not visible
        console.log(heightSubNavDropdown)
        console.log(yPositionDropdown.height)
        console.log(yPositionDropdown.top)
        // d.scrollTop(270)

        var heightTotalDropdown =
          yPositionDropdown.height + heightSubNavDropdown
        var BottomOfDropdown = heightTotalDropdown + yPositionDropdown.top
        var heightViewport = window.innerHeight

        console.log(BottomOfDropdown)
        console.log(heightViewport)
        $(document).scrollTop(BottomOfDropdown - heightViewport)
      })

      // On scroll check when to stick the mobile subnav to the bottom of the navigation
      document.addEventListener("scroll", function(e) {
        console.log("scrolling")
        var navBottom = document
          .querySelector("nav.navbar")
          .getBoundingClientRect().bottom
        var heroBottom = document.querySelector(".hero").getBoundingClientRect()
          .bottom

        console.log(heroBottom + " : " + navBottom)

        if (heroBottom <= navBottom) {
          document
            .querySelector("." + styles.mobileSecondaryNavDropdown)
            .classList.add(styles.mobileSubNavStuck)
          document.querySelector(".hero").classList.add("shift-down")
        } else {
          document
            .querySelector("." + styles.mobileSecondaryNavDropdown)
            .classList.remove(styles.mobileSubNavStuck)
          document.querySelector(".hero").classList.remove("shift-down")
        }
      })

      // document.scrollTop = BottomOfDropdown - heightViewport

      // console.log(styles.downArrowContainer)
      // $("." + styles.downArrowContainer).click(function(event) {
      //   // console.log("clicked")
      //   if (this.state.open) {
      //     this.setState({ open: true })
      //     styles.innerSecondaryNavLinks.removeClass("open")
      //     console.log("navigation closed")
      //   } else {
      //     this.setState({ open: false })
      //     styles.innerSecondaryNavLinks.addClass("open")
      //     console.log("navigation open")
      //   }
      // })
    })
  }

  render() {
    return (
      <div className="row">
        <div
          className={
            "col-12 d-none d-block d-sm-block d-md-none " +
            styles.mobileSecondaryNav
          }
        >
          <ul className={styles.mobileSecondaryNavDropdown}>
            <FirstListLink
              className={styles.currentSecondaryNavLink}
              to="/marketing-solutions/websites"
              clickHandler={() => this.setState({ open: !this.state.open })}
            >
              Responsive Websites
            </FirstListLink>
            <ul
              className={`${styles.innerSecondaryNavLinks}${
                this.state.open ? " " + styles.open : ""
              }`}
            >
              <ListLink
                className=""
                to="/marketing-solutions/content-marketing"
              >
                Content Marketing
              </ListLink>
              <ListLink
                className=""
                to="/marketing-solutions/digital-advertising"
              >
                Digital Advertising
              </ListLink>
              <ListLink
                className=""
                to="/marketing-solutions/online-reputation-management"
              >
                Online Reputation
              </ListLink>
              <ListLink className="" to="/marketing-solutions/our-technology">
                Our Technology
              </ListLink>
              <ListLink
                className=""
                to="/marketing-solutions/hosting-solutions"
              >
                Hosting Solutions
              </ListLink>
            </ul>
          </ul>
        </div>
      </div>
    )
  }
}
