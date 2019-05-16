import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <footer>
    <Container>
      <div className="row padded tall-top footer-row">
        <div className="col-sm-12 col-lg-4">
          <img
            src="/icon/logo-white.svg"
            className="logo img-responsive"
            alt="Our Logo"
          />
        </div>
        <div className="d-sm-none d-md-block col-sm-12 col-md-6 col-lg-4 footer-page-links">
          <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/marketing-solutions/">Marketing Solutions</ListLink>
            <ListLink to="/our-clients/">Our Clients</ListLink>
            <ListLink to="/plans/">Plans</ListLink>
            <ListLink to="/company/">Company</ListLink>
            <ListLink to="/the-study/">Resources</ListLink>
            <ListLink to="/demo">Free Demo</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </div>
        <div className="col-sm-8 col-md-6 col-lg-4">
          <div className="footer-contact-row">
            <div className="icon-wrapper">
              <img
                className="img-icon"
                src="/icon/ringing-phone.svg"
                alt="Phone Icon"
              />
            </div>
            <p className="footer-contact-details">&#40;877&#41; 477-2311</p>
          </div>
          <div className="footer-contact-row">
            <div className="icon-wrapper">
              <img
                className="img-icon"
                src="/icon/mail.svg"
                alt="Envelope Icon"
              />
            </div>
            <p className="footer-contact-details">support@doctorgenius.com</p>
          </div>
          <div className="footer-contact-row">
            <div className="icon-wrapper">
              <img
                className="img-icon"
                src="/icon/map-pin.svg"
                alt="Map Icon"
              />
            </div>
            <address className="footer-contact-details">
              2121 Alton Parkway
              <br />
              Irvine, CA 92880
            </address>
          </div>
          <div className="social-media-row">
            <div className="social-media-item">
              <a href="https://www.facebook.com/DoctorGeniusMarketing">
                <img src="/icon/facebook-circle.svg" alt="Facebook Icon" />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://twitter.com/DoctorGeniusCA">
                <img src="/icon/twitter-circle.svg" alt="Twitter Icon" />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://www.instagram.com/doctor.genius/">
                <img src="/icon/instagram-circle.svg" alt="Instagram Icon" />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://www.linkedin.com/company/doctor-genius">
                <img src="/icon/linkedin-circle.svg" alt="LinkedIn Icon" />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos">
                <img src="/icon/youtube-circle.svg" alt="Youtube Icon" />
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
