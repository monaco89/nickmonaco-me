import React from 'react';
import LandingBio from '../components/LandingBio';
import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage({ path }) {
  return (
    <Layout path={path}>
      <SEO
        title="Nick Monaco | Engineer"
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
