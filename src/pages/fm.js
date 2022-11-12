import React from "react";
import { CassettePlayer, Layout, SEO } from "../components";

function FmPage({ path }) {
  return (
    <Layout path={path}>
      <SEO title="🔈" keywords={[`nick`, `monaco`, `music`, `fm`]} />
      <CassettePlayer />
    </Layout>
  );
}

export default FmPage;
