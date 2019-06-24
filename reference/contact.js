import React from "react"
import { Helmet } from "react-helmet"

import DefaultPageLayout from "../components/DefaultPageLayout"

export default () => (
  <DefaultPageLayout>
    <Helmet>
      <title>
        Contact the Doctor Genius Team in Irvine, California | Doctor Genius
      </title>
      <meta
        name="description"
        content="Need help? Have questions? The live support team at Doctor Genius is here to help. Give us a call, send us an email, connect on social media, or get our address."
      />
    </Helmet>
    <h1>We'd love to talk! Email us anytime</h1>
  </DefaultPageLayout>
)
