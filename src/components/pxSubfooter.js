import React, { useState } from "react"
import Modal from 'react-modal'

import PxFooterStyles from "./pxSubfooter.module.scss"
import RowStyles from "./Row.module.scss"
import PxForm from '../components/px-form'
import PxModalStyles from './pxModal.module.scss'

import pxLogo from "../img/dg-px-logo.svg"
import formImage from '../img/Contact-Form-02.jpg'

const PxSubfooter = () => {
  // Modal stuff.
  const modalCustomStyles = {
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0'
    }
  }

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement(`#___gatsby`);

  return (
    <div className={PxFooterStyles.pxSubfooterStyles + " px-sub-footer"}>
      <div
        className={
          RowStyles.row +
          " " +
          RowStyles.tallTop
        }
      >
        <div className="col-sm-10 col-md-9 col-lg-5">
          <div className={PxFooterStyles.contentBlock}>
            <h1>
              Transform Your Patient Experience With Doctor Genius
              </h1>
            <div className={PxFooterStyles.strapline}>
              <p>
                You're now one step closer to improving your overall patient experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={RowStyles.row}>

        <div className="col-sm-10 col-lg-4">
          <div className={PxFooterStyles.ctaSection}>
            <button className={PxFooterStyles.ctaButton} id="pxModalGetStarted" onClick={openModal}>Get Started</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={modalCustomStyles}
              contentLabel="PX Form Modal"
            >

              <div className={PxModalStyles.pxModal}>
                <div className={PxModalStyles.modalContent}>
                  <img src={pxLogo} className={PxModalStyles.pxLogo} alt="Doctor Genius PX" />
                  <p className={PxModalStyles.pxModalCaption}>Complete the form below to learn more about improving your patient's experience</p>
                  <div className={PxModalStyles.formHolder}>
                    <PxForm />
                  </div>
                  <p className={PxModalStyles.privacyStatement}>
                    By registering I confirm that I have read and agree to the <br /><a href="/privacy-policy/" target="_blank">Privacy Statement</a>.
                    </p>


                </div>

                <div className={PxModalStyles.modalImageHolder}>
                  <img className={PxModalStyles.modalImage} src={formImage} alt="Patient Experience Package" />
                </div>

              </div>
            </Modal>

            <div className={PxFooterStyles.pxLogo}>
              <img src={pxLogo} alt="Doctor Genius PX" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PxSubfooter