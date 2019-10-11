import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"
import logoWhite from "../img/icon/logo-white.svg"
import ringingPhoneIcon from "../img/icon/ringing-phone.svg"
import envelopeIcon from "../img/icon/mail.svg"
import mapPin from "../img/icon/map-pin.svg"
import facebookIcon from "../img/icon/facebook-circle.svg"
import twitterIcon from "../img/icon/twitter-circle.svg"
import instagramIcon from "../img/icon/instagram-circle.svg"
import linkedinIcon from "../img/icon/linkedin-circle.svg"
import youtubeIcon from "../img/icon/youtube-circle.svg"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const ListLinkNoPrefetch = props => (
  <li>
    <a href={props.to}>{props.children}</a>
  </li>
)

const ExternalLink = props => (
  <li>
    <a href={props.to}>{props.children}</a>
  </li>
)

export default ({ children }) => (
  <footer>
    <Container>
      <div className="row padded tall-top footer-row">
        <div className="col-sm-12 col-lg-4">
          <img src={logoWhite} className="logo img-responsive" alt="Our Logo" />
        </div>
        <div className="d-none d-sm-none d-md-block col-sm-12 col-md-6 col-lg-4 footer-page-links">
          <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/marketing-solutions">Marketing Solutions</ListLink>
            <ListLinkNoPrefetch to="/our-clients/dental-practices">
              Our Clients
            </ListLinkNoPrefetch>
            <ListLink to="/plans">Plans</ListLink>
            <ListLink to="/company">Company</ListLink>
            <ListLink to="/blog">Resources</ListLink>
            <ListLink to="/demo">Free Demo</ListLink>
            <ListLinkNoPrefetch to="/contact">Contact</ListLinkNoPrefetch>
            <ExternalLink to="https://portal.doctorgenius.com/login">
              Portal Login
            </ExternalLink>
          </ul>
        </div>
        <div className="col-10 col-sm-10 col-md-6 col-lg-4">
          <div className="footer-contact-row">
            <div className="icon-wrapper">
              <img
                className="img-icon"
                src={ringingPhoneIcon}
                alt="Phone Icon"
              />
            </div>
            <p className="footer-contact-details">&#40;877&#41; 477-2311</p>
          </div>
          <div className="footer-contact-row">
            <div className="icon-wrapper">
              <img
                className="img-icon"
                src={envelopeIcon}
                alt="Envelope Icon"
              />
            </div>
            <p className="footer-contact-details">support@doctorgenius.com</p>
          </div>
          <div className="footer-contact-row">
            <div className="icon-wrapper">
              <img className="img-icon" src={mapPin} alt="Map Icon" />
            </div>
            <address className="footer-contact-details">
              2121 Alton Parkway
              <br />
              Irvine, CA 92606
            </address>
          </div>
          <div className="social-media-row">
            <div className="social-media-item">
              <a href="https://www.facebook.com/DoctorGeniusMarketing">
                <img src={facebookIcon} alt="Facebook Icon" />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://twitter.com/DoctorGeniusCA">
                <img src={twitterIcon} alt="Twitter Icon" />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://www.instagram.com/doctor.genius/">
                <img src={instagramIcon} alt="Instagram Icon" />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://www.linkedin.com/company/doctor-genius">
                <img src={linkedinIcon} alt="LinkedIn Icon" />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos">
                <img src={youtubeIcon} alt="Youtube Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row padded short-top">
        <div className="col-sm-12">
          <div className="footer-subrow">
            <div className="copyright-section">
              &copy;2019 Doctor Genius. All Rights Reserved.
            </div>
            <div className="legal-links">
              <ListLink to="/privacy-policy">Privacy Policy</ListLink>
              {/* Waiting for page content before we show this link */}
              {/*<span> | </span>
              <ListLink to="/">Terms and Conditions</ListLink>*/}
            </div>
          </div>
        </div>
      </div>
      {children}
    </Container>
  </footer>
)
