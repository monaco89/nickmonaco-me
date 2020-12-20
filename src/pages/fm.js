import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cassette from "../components/CassettePlayer"

const FmPage = ({ path }) => (
  <Layout path={path}>
    <SEO title="🔈" keywords={[`nick`, `monaco`, `music`, `fm`]} />
    <Cassette />
  </Layout>
)

export default FmPage
