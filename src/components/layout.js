import React, { useContext } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Header from "./header"
import ThemeButton from "./ThemeButton"
import { GlobalStateContext } from "../utils/context"

import "./layout.css"

const Body = styled.div`
  background: ${(props) => props.theme.background};
  height: 100%;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`

const Layout = ({ path, children }) => {
  const state = useContext(GlobalStateContext)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <Body theme={{ ...state.themeLoaded }}>
          <Header siteTitle={data.site.siteMetadata.title} path={path} />
          <ThemeButton />
          <Content>
            <main>{children}</main>
            <div>
              <Footer theme={{ ...state.themeLoaded }}>
                <p>
                  ©
                  {new Date().getFullYear()}
                  {' '}
                  Nick Monaco
                </p>
              </Footer>
            </div>
          </Content>
        </Body>
      )}
    />
  )
}

export default Layout
