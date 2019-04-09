import React from "react"
import innerTitleStyles from "./inner-title.module.css"

/*
<div class="inner-title underlined">
    <h3 class="subheading">Testimonials</h3>
    <h2 >What <span>Clients Are Saying</span></h2>
</div>
*/

export default ({ children, underlined, title, accent }) => (
  <div className={innerTitleStyles.innerTitle}>
    <h1
      className={
        underlined ? innerTitleStyles.underline : innerTitleStyles.noUnderline
      }
    >
      {title}
      <b>{accent}</b>
    </h1>
  </div>
)
