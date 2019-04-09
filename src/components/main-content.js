import React from "react"
import mainContentStyles from "./main-content.module.css"

export default ({ children }) => (
  <div className={mainContentStyles.mainContent}>{children}</div>
)
