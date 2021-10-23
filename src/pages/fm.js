import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Cassette from '../components/CassettePlayer';
import TurnTable from '../components/TurnTable';
import useIsMobile from '../utils/useIsMobile';

function FmPage({ path }) {
  const isMobile = useIsMobile();

  return (
    <Layout path={path}>
      <SEO title="🔈" keywords={[`nick`, `monaco`, `music`, `fm`]} />
      {isMobile ? <Cassette /> : <TurnTable />}
    </Layout>
  );
}

export default FmPage;
