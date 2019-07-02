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
    { title: "Dental Practices", slug: "dental-practices" },
    { title: "Urgent Care Clinics", slug: "urgent-care-clinics" },
    { title: "Chiropractor Practices", slug: "chiropractor-practices" },
    { title: "Cosmetic Surgeons", slug: "cosmetic-surgeons" },
    { title: "Healthcare Marketing", slug: "healthcare-marketing" },
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
    <span to={props.to} activeClassName="active" partiallyActive={true}>
      {props.children}
    </span>
    <span className={styles.downArrowContainer} onClick={props.clickHandler}>
      <img className={styles.downArrow} src={downArrow} />
    </span>
  </li>
)

export default class MobileSecondaryNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.parentPage =
      props.parentPage === "ourClients" ? "our-clients" : "marketing-solutions"
  }

  onScrollListener = () => {
    var navBottom = document.querySelector("nav.navbar").getBoundingClientRect()
      .bottom
    var heroBottom = document.querySelector(".hero").getBoundingClientRect()
      .bottom

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
    $(document).ready(() => {
      $("." + styles.downArrowContainer).click(event => {
        // Get the number of items in the secondary Nav inner list
        var listLength = mobileSubNavLinks[this.props.parentPage].length - 1 //dont include the first title

        // Get the position of the first item in the dropdown ( since it's always visible)
        var yPositionDropdown = document
          .querySelector("." + styles.mobileSecondaryNavDropdown)
          .getBoundingClientRect()

        // Gives the height of the inner part of the secondary nav (minus the first element in the list)
        var heightSubNavDropdown = yPositionDropdown.height * listLength
        var heightTotalDropdown =
          yPositionDropdown.height + heightSubNavDropdown
        var heightViewport = window.innerHeight
        var bottomOfDropdown = heightTotalDropdown + yPositionDropdown.top // Position of the bottom of the opened secondary nav
        var differenceToScroll = bottomOfDropdown - heightViewport // Amount of the navigation hidden outside the viewport
        var amountScrolled = $(document).scrollTop() // Current scroll position of the entire page
        var isOpen = document
          .querySelector("." + styles.innerSecondaryNavLinks)
          .classList.contains(styles.open)

        // Open/Close Animation on the drop arrow
        if (!isOpen) {
          document
            .querySelector("." + styles.downArrowContainer + " img")
            .classList.add(styles.flipped)
        } else {
          document
            .querySelector("." + styles.downArrowContainer + " img")
            .classList.remove(styles.flipped)
        }

        // Scroll the page up to match the bottom of the secondary navigation menu when opened (if necessary)
        if (differenceToScroll > 0 && !isOpen) {
          $("html, body").animate(
            { scrollTop: differenceToScroll + amountScrolled },
            500
          )
        }
      })

      // On scroll check when to stick the mobile subnav to the bottom of the navigation
      document.addEventListener("scroll", this.onScrollListener, true)
    })
  }

  componentWillUnmount() {
    // Remove event listeners so that they don't error on non relevant pages
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
              to={`/${this.parentPage}/${this.props.currentSlug}`}
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
                      to={`/${this.parentPage}/${key.slug}`}
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
