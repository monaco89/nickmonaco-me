import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Cassette from '../components/CassettePlayer';
import TurnTable from '../components/TurnTable';

function FmPage({ path }) {
  return (
    <Layout path={path}>
      <SEO title="🔈" keywords={[`nick`, `monaco`, `music`, `fm`]} />
      <TurnTable />
    </Layout>
  );
}

export default FmPage;
