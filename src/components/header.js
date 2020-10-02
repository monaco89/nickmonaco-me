import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"
import { GitHub, Rss } from "react-feather"

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

  // ::after {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   transform: scaleX(0);
  //   height: 2px;
  //   bottom: 0;
  //   left: 0;
  //   background-color: rgba(0, 0, 0, 0.8);
  //   transform-origin: bottom right;
  //   transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  // }

  // :hover::after {
  //   transform: scaleX(1);
  //   transform-origin: bottom left;
  // }
  :hover {
    box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
      inset -3px -3px 6px 0px #fff;
    color: #808c99;
  }
`

const GitHubLink = styled.a`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff;
  background: #f2f4f8;
  padding: 10px;
  border-radius: 8px;

  // ::after {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   transform: scaleX(0);
  //   height: 2px;
  //   bottom: 0;
  //   left: 0;
  //   background-color: rgba(0, 0, 0, 0.8);
  //   transform-origin: bottom right;
  //   transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  // }

  // :hover::after {
  //   transform: scaleX(1);
  //   transform-origin: bottom left;
  // }
  :hover {
    box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
      inset -3px -3px 6px 0px #fff;
    color: #808c99;
  }
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

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">{siteTitle}</HomeLink>
        {/* <NavLink to="/blog">Blog</NavLink> */}
        <GitHubLink
          target="_blank"
          href="https://rss.nickmonaco.me"
          rel="noreferrer"
        >
          <Rss />
        </GitHubLink>
        <GitHubLink
          target="_blank"
          href="https://github.com/monaco89"
          rel="noreferrer"
        >
          <GitHub />
        </GitHubLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
