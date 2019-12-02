import React from "react"
import containerStyles from "./container.module.scss"

const bootstrapContainerClassName = "container-fluid"

export default ({ children, parentClassNames }) => (
  // Receive the className from the parent component if provided
  <div
    className={
      containerStyles.container +
      " " +
      containerStyles.containerFluid +
      (parentClassNames ? " " + parentClassNames : "")
    }
  >
    {children}
  </div>
)
