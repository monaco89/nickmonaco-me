import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

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
`

const Layout = ({ path, children }) => (
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
      <>
        <Header siteTitle={data.site.siteMetadata.title} path={path} />
        <Content>
          <main>{children}</main>
          <div>
            <Footer>
              <p>
                ©
                {new Date().getFullYear()}
                {' '}
                Nick Monaco
              </p>
            </Footer>
          </div>
        </Content>
      </>
    )}
  />
)

export default Layout
