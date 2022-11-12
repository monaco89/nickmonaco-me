import React from "react";
import { Layout, LandingBio, SEO } from "../components";

function IndexPage({ path }) {
  return (
    <Layout path={path}>
      <SEO
        title="Engineer"
        keywords={[
          `nick`,
          `monaco`,
          `resume`,
          `software`,
          `developer`,
          `engineer`,
        ]}
      />
      <LandingBio />
    </Layout>
  );
}

export default IndexPage;
