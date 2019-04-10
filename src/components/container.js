import React from "react"
import containerStyles from "./container.module.css"

const bootstrapContainerClassName = "container"

export default ({ children }) => (
  <div className={(containerStyles.container, bootstrapContainerClassName)}>
    {children}
  </div>
)
