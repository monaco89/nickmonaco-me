import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ path }) => (
  <Layout path={path}>
    <SEO
      title="Hello"
      keywords={[`nick`, `monaco`, `resume`, `software`, `developer`]}
    />
    <LandingBio />
  </Layout>
)

export default IndexPage
