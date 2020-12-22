import React, { useEffect } from "react"
import css from "./pxModal.module.scss"

const Modal = ({ btnID }) => {
  useEffect(() => {
    var modal = document.getElementById("subscribeModal")
    var btn = document.getElementById(btnID)
    var span = document.getElementsByClassName(`${css.close}`)[0]
    btn.onclick = function () {
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
    <div id="subscribeModal" className={css.modal}>
      <div className={css.modalContent}>
        <div class={css.modalHeader}>
          <span className={css.close}>&times;</span>
          <h2>Subscribe Now</h2>
        </div>
        <div class={css.modalBody}>
          <p>Sign up with your email for news and updates.</p>
        </div>
        <div class={css.modalFooter}>
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  )
}
export default Modal