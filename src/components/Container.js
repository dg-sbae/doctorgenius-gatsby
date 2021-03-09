import React from "react"
import containerStyles from "./Container.module.scss"

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
