import React from "react"

import HeaderStyles from "./Header.module.scss"

export default ({ children, }) => <header className={HeaderStyles.header}>{children}</header>
