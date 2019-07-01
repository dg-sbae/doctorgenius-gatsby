import React from "react"
import jQuery from "jquery"
import { Link } from "gatsby"
import $ from "jquery"

import styles from "./mobile-secondary-nav.module.scss"
import downArrow from "../../public/icon/down-arrow.svg"

const mobileSubNavLinks = {
  marketingSolutions: [
    { title: "Responsive Websites", slug: "websites" },
    { title: "Content Marketing", slug: "content-marketing" },
    { title: "Digital Advertising", slug: "digital-advertising" },
    { title: "Online Reputation", slug: "online-reputation-management" },
    { title: "Our Technology", slug: "our-technology" },
    { title: "Hosting Solutions", slug: "hosting-solutions" },
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

  onScrollListener = () => {
    var navBottom = document.querySelector("nav.navbar").getBoundingClientRect()
      .bottom
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

        // Get the number of items in the secondary Nav inner list
        var listLength = mobileSubNavLinks[this.props.parentPage].length - 1 //dont include the first title

        // Get the position of the first item in the dropdown ( since it's always visible)
        var yPositionDropdown = document
          .querySelector("." + styles.mobileSecondaryNavDropdown)
          .getBoundingClientRect()

        // var bodyRect = document.body.getBoundingClientRect()
        // Gives the height of the inner part of the secondary nav (minus the first element in the list)
        var heightSubNavDropdown = yPositionDropdown.height * listLength
        // var heightSubNavDropdown = document.querySelector(
        //   "." + styles.innerSecondaryNavLinks
        // ).offsetHeight
        //Take the yPositionDropdown.height and multiply by the amount of items in the inner dropdown to get the height while not visible
        console.log("height subnav dropdown " + heightSubNavDropdown)
        console.log("dropdown of each nav item" + yPositionDropdown.height)
        console.log(
          "y position of the top of the first nav item" + yPositionDropdown.top
        )
        // d.scrollTop(270)

        var heightTotalDropdown =
          yPositionDropdown.height + heightSubNavDropdown
        var BottomOfDropdown = heightTotalDropdown + yPositionDropdown.top
        var heightViewport = window.innerHeight

        console.log("bottom of dropdown" + BottomOfDropdown)
        console.log("height viewport" + heightViewport)
        $(document).scrollTop(BottomOfDropdown - heightViewport)
      })

      // On scroll check when to stick the mobile subnav to the bottom of the navigation
      document.addEventListener("scroll", this.onScrollListener, true)
      // document.removeEventListener("scroll", onScrollListener, true)

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

  componentWillUnmount() {
    console.log("unmounting")
    document.removeEventListener("scroll", this.onScrollListener, true)
    $("." + styles.downArrowContainer).off()
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
              to={`/marketing-solutions/${this.props.currentSlug}`}
              clickHandler={() => this.setState({ open: !this.state.open })}
            >
              {this.props.titleItem}
            </FirstListLink>
            <ul
              className={`${styles.innerSecondaryNavLinks}${
                this.state.open ? " " + styles.open : ""
              }`}
            >
              {mobileSubNavLinks[this.props.parentPage].map(key => {
                return (
                  key.title !== this.props.titleItem && (
                    <ListLink
                      className=""
                      to={`/marketing-solutions/${key.slug}`}
                    >
                      {key.title}
                    </ListLink>
                  )
                )
              })}
            </ul>
          </ul>
        </div>
      </div>
    )
  }
}
