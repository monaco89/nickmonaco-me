import React from "react";
import { Layout, SEO } from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Where are you going?</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
);

export default NotFoundPage;
