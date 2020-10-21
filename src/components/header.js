import { Link } from "gatsby"
import styled from "@emotion/styled"
import React from "react"
import { GitHub, Rss, Speaker } from "react-feather"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const NavLink = styled(Link)`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff;
  background: #f2f4f8;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.2s linear;

  :hover {
    box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
      inset -3px -3px 6px 0px #fff;
    transition: all 0.2s linear;
    // background: -webkit-linear-gradient(#eee, #333);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
`

const IconLink = styled.a`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: all 0.2s linear;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff;
  background: #f2f4f8;
  padding: 10px;
  border-radius: 8px;

  :hover {
    box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
      inset -3px -3px 6px 0px #fff;
    color: #808c99;
  }

  ${(props) =>
    props.active &&
    `
  box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
  inset -3px -3px 6px 0px #fff;
  color: #808c99;
`}
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Header = ({ siteTitle, path }) => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">{siteTitle}</HomeLink>
        {/* <NavLink to="/blog">Blog</NavLink> */}
        <IconLink
          target="_blank"
          href="https://rss.nickmonaco.me"
          rel="noreferrer"
        >
          <Rss />
        </IconLink>
        <IconLink
          target="_blank"
          href="https://github.com/monaco89"
          rel="noreferrer"
        >
          <GitHub />
        </IconLink>
        <IconLink href="/fm" active={path && path.includes("fm")}>
          <Speaker />
        </IconLink>
      </p>
    </Content>
  </SiteHeader>
)

export default Header
