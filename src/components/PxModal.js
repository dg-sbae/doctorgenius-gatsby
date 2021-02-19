import React, { useEffect } from "react"

import PxForm from '../components/px-form'

import ModalStyles from "./pxModal.module.scss"
import RowStyles from "../components/Row.module.scss"

import pxLogo from '../img/dg-px-logo.svg'
import formImage from '../img/Contact-Form-02.jpg'

const Modal = ({ buttonID }, data) => {

  useEffect(() => {
    var modal = document.getElementById("subscribeModal")
    var button = document.getElementById(buttonID)
    var span = document.getElementsByClassName(`${ModalStyles.close}`)[0]
    button.onclick = function () {
      modal.style.display = "block"
    }
    span.onclick = function () {
      modal.style.display = "none"
    }
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none"
      }
    }
  })
  return (
    <div id="subscribeModal" className={ModalStyles.modal + " " + RowStyles.rowStyling}>
      <div className={ModalStyles.modalContent}>
        <div className={ModalStyles.modalForm + " " + RowStyles.row}>
          <div className="col-sm-6">
            <span className={ModalStyles.close}>&times;</span>
            <div className={RowStyles.rowStyling}>
              <div className="col-sm-12">
                <img src={pxLogo} className={ModalStyles.pxLogo} alt="Doctor Genius PX" />
                <p className={ModalStyles.modalCaption}>Complete the form below to learn more about improving your patient's experience</p>
                <PxForm />
                <p className={ModalStyles.privacyStatement}>
                  By registering I confirm that I have read and agree to the <br /><a href="/privacy-policy/" target="_blank">Privacy Statement</a>.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <img className={ModalStyles.modalImage} src={formImage} alt="Patient Experience Package" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Modal

/*
//This will need to be updated to use <StaticQuery> method of Graphql Query
export const PxFormImageQuerys = graphql`
  query ModalImages {
    CFImage: file(relativePath: { eq: "Contact-Form-2.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
*/
