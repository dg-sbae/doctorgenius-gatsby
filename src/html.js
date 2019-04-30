import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          
            document.addEventListener("DOMContentLoaded", function() {
              document.addEventListener("scroll", function(e) {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                if (winScroll >= 100 && winScroll < 200) {
                  document.querySelector("nav.navbar").classList.add("main-navbar-stuck");
                  document.querySelector("nav.navbar").classList.add("stuck-midway");
                  document.querySelector("nav.navbar").classList.remove("stuck-fully");
                  document.querySelector("nav.navbar .navbar-brand").src = "icon/logo-blue.svg";
                  document.querySelector("nav.navbar .phone").src = "icon/phone-blue.svg";
                } else if (winScroll >= 200) {
                  document.querySelector("nav.navbar").classList.add("main-navbar-stuck");
                  document.querySelector("nav.navbar").classList.add("stuck-fully");
                  document.querySelector("nav.navbar").classList.remove("stuck-midway");
                  document.querySelector("nav.navbar .navbar-brand").src = "icon/logo-blue.svg";
                  document.querySelector("nav.navbar .phone").src = "icon/phone-blue.svg";
                } else {
                  document.querySelector("nav.navbar").classList.remove("main-navbar-stuck");
                  document.querySelector("nav.navbar").classList.remove("stuck-midway");
                  document.querySelector("nav.navbar .navbar-brand").src = "icon/logo-white.svg";
                  document.querySelector("nav.navbar .phone").src = "icon/phone-white.svg";
                }
              })
            })
          
          `,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
