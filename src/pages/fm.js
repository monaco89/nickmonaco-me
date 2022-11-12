import React from "react";
import { Cassette, Layout, SEO } from "../components";

function FmPage({ path }) {
  return (
    <Layout path={path}>
      <SEO title="🔈" keywords={[`nick`, `monaco`, `music`, `fm`]} />
      <Cassette />
    </Layout>
  );
}

export default FmPage;
