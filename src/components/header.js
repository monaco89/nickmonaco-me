import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { GitHub, Rss, Speaker, Mail, Book, Aperture } from "react-feather"
import { GlobalStateContext } from "../utils/context"
import Logo from "../images/svg/Logo.svg"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const FlexBox = styled.p`
  display: inline-flex;
  flex-wrap: wrap;
`

const NavLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 10px;
  border-radius: 8px;
  transition: all 0.2s linear;

  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
    transition: all 0.2s linear;
  }
`

const IconLink = styled.a`
  margin-left: 15px;
  text-decoration: none;
  // display: inline-block;
  position: relative;
  transition: all 0.2s linear;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  color: ${(props) => (props.active ? "#808c99" : props.theme.color)};
  padding: 10px;
  border-radius: 8px;
  justify-content: space-around;

  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
    color: #808c99;
  }

  box-shadow: ${(props) => props.active && props.theme.boxShadowInset};
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
  font-weight: Bold;
  width: 80px;
  // background: none;
  // box-shadow: none;
  padding: 5px 10px 5px 10px;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

const LogoIcon = styled(Logo)`
  width: 100%;
  height: auto;
`

const Header = ({ path }) => {
  const state = useContext(GlobalStateContext)

  return (
    <SiteHeader>
      <Content>
        <FlexBox>
          <HomeLink to="/" theme={{ ...state.themeLoaded }}>
            <LogoIcon />
          </HomeLink>
          {/* <NavLink to="/blog">Blog</NavLink> */}
          <IconLink
            target="_blank"
            href="https://rss.nickmonaco.me"
            rel="noreferrer"
            title="RSS Feed"
            theme={{ ...state.themeLoaded }}
          >
            <Rss />
          </IconLink>
          <IconLink
            target="_blank"
            href="https://github.com/monaco89"
            rel="noreferrer"
            title="Github"
            theme={{ ...state.themeLoaded }}
          >
            <GitHub />
          </IconLink>
          <IconLink
            href="mailto:nick.monaco15@gmail.com"
            title="Email"
            theme={{ ...state.themeLoaded }}
          >
            <Mail />
          </IconLink>
          <IconLink
            href="/fm"
            active={path && path.includes("fm")}
            title="Music"
            theme={{ ...state.themeLoaded }}
          >
            <Speaker />
          </IconLink>
          <IconLink
            href="/books"
            active={path && path.includes("books")}
            title="Books"
            theme={{ ...state.themeLoaded }}
          >
            <Book />
          </IconLink>
          <IconLink
            href="/drone"
            active={path && path.includes("drone")}
            title="Drone"
            theme={{ ...state.themeLoaded }}
          >
            <Aperture />
          </IconLink>
        </FlexBox>
      </Content>
    </SiteHeader>
  )
}

export default Header
