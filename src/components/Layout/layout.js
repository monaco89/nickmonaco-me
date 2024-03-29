import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import Header from "./header";
import { GlobalStateContext } from "../../utils/context";

import "./layout.css";

const Body = styled.div`
  background: ${(props) => props.theme.background};
  min-height: 100vh;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 2.0875rem 1rem;
  padding-top: 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 0.9rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Layout = ({ path, children }) => {
  const state = useContext(GlobalStateContext);
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <Body theme={{ ...state.themeLoaded }}>
      <Header siteTitle={site.siteMetadata.title} path={path} />
      <Content>
        <main>{children}</main>
        <div>
          <Footer theme={{ ...state.themeLoaded }}>
            <p>©{new Date().getFullYear()} Nick Monaco</p>
          </Footer>
        </div>
      </Content>
    </Body>
  );
};

export default Layout;
