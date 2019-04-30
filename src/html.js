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
          src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossOrigin="anonymous"
          // src="../node_modules/jquery/dist/jquery.min.js"
        />
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
                } else if (winScroll >= 200) {
                  document.querySelector("nav.navbar").classList.add("main-navbar-stuck");
                  document.querySelector("nav.navbar").classList.add("stuck-fully");
                  document.querySelector("nav.navbar").classList.remove("stuck-midway");
                } else {
                  document.querySelector("nav.navbar").classList.remove("main-navbar-stuck");
                  document.querySelector("nav.navbar").classList.remove("stuck-midway");
                }
              });
              function toggleDropdown (e) {
                const _d = $(e.target).closest('.dropdown'),
                  _m = $('.dropdown-menu', _d);
                setTimeout(function(){
                  const shouldOpen = e.type !== 'click' && _d.is(':hover');
                  _m.toggleClass('show', shouldOpen);
                  _d.toggleClass('show', shouldOpen);
                  $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
                }, e.type === 'mouseleave' ? 100 : 0);
              }
              
              $('body')
                .on('mouseenter mouseleave','.dropdown',toggleDropdown)
                .on('click', '.dropdown-menu a', toggleDropdown);
              
              setTimeout(function(){
                $('.dropdown-heading').click(function(event) {
                  console.log("will this work");
                  event.stopPropagation();
                });
              }, 3000);
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
