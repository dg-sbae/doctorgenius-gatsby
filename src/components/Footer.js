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
          <img src="/icon/logo-white.svg" className="logo img-responsive" />
        </div>
        <div className="d-sm-none d-md-block col-sm-12 col-md-6 col-lg-4 footer-page-links">
          <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/marketing-solutions/">Marketing Solutions</ListLink>
            <ListLink to="/our-clients/">Our Clients</ListLink>
            <ListLink to="/plans/">Plans</ListLink>
            <ListLink to="/company/">Company</ListLink>
            <ListLink to="/study-archive/">Resources</ListLink>
            <ListLink to="$#">Free Demo</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </div>
        <div className="col-sm-8 col-md-6 col-lg-4">
          <div className="footer-contact-row">
            <div className="icon-wrapper">
              <img className="img-icon" src="/icon/ringing-phone.svg" />
            </div>
            <p className="footer-contact-details">&#40;877&#41; 477-2311</p>
          </div>
          <div className="footer-contact-row">
            <div className="icon-wrapper">
              <img className="img-icon" src="/icon/mail.svg" />
            </div>
            <p className="footer-contact-details">support@doctorgenius.com</p>
          </div>
          <div className="footer-contact-row">
            <div className="icon-wrapper">
              <img className="img-icon" src="/icon/map-pin.svg" />
            </div>
            <address className="footer-contact-details">
              2121 Alton Parkway
              <br />
              Irvine, CA 92880
            </address>
          </div>
          <div class="social-media-row">
            <div class="social-media-item">
              <a
                href="https://www.facebook.com/DoctorGeniusMarketing"
                target="_blank"
              >
                <img src="/icon/facebook-circle.svg" />
              </a>
            </div>
            <div class="social-media-item">
              <a href="https://twitter.com/DoctorGeniusCA" target="_blank">
                <img src="/icon/twitter-circle.svg" />
              </a>
            </div>
            <div class="social-media-item">
              <a
                href="https://www.instagram.com/doctor.genius/"
                target="_blank"
              >
                <img src="/icon/instagram-circle.svg" />
              </a>
            </div>
            <div class="social-media-item">
              <a
                href="https://www.linkedin.com/company/doctor-genius"
                target="_blank"
              >
                <img src="/icon/linkedin-circle.svg" />
              </a>
            </div>
            <div class="social-media-item">
              <a
                href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos"
                target="_blank"
              >
                <img src="/icon/youtube-circle.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row padded short-top">
        <div class="col-sm-12">
          <div class="footer-subrow">
            <div class="copyright-section">
              &copy;2019 Doctor Genius. All Rights Reserved.
            </div>
            <div class="legal-links">
              <ListLink to="/">Privacy Policy</ListLink>
              <span> | </span>
              <ListLink to="/">Terms and Conditions</ListLink>
            </div>
          </div>
        </div>
      </div>
      {children}
    </Container>
  </footer>
)
