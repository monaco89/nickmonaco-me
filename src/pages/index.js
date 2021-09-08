import React from 'react';
import LandingBio from '../components/LandingBio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ path }) => (
  <Layout path={path}>
    <SEO
      title="Engineer"
      keywords={[`nick`, `monaco`, `resume`, `software`, `developer`]}
    />
    <LandingBio />
  </Layout>
);

export default IndexPage;
