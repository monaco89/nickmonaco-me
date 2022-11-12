import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { GitHub, Mail, Aperture, Radio } from "react-feather";
import { GlobalStateContext } from "../../utils/context";
import ThemeButton from "../ThemeButton";

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`;

const FlexBox = styled.p`
  display: inline-flex;
  flex-wrap: wrap;
`;

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
`;

const IconLink = styled.a`
  margin-left: 15px;
  text-decoration: none;
  position: relative;
  transition: all 0.2s linear;
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) =>
    props.active ? props.theme.boxShadowInset : props.theme.boxShadow};
  color: ${(props) => (props.active ? "#808c99" : props.theme.color)};
  padding: 10px;
  border-radius: 8px;
  justify-content: space-around;
  margin-bottom: 20px;

  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
    color: #808c99;
  }
`;

const HomeLink = styled(NavLink)`
  margin-left: 0;
  padding: 10px;
  max-height: 46px;
  font-weight: bold;
`;

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Header = ({ path }) => {
  const state = useContext(GlobalStateContext);

  return (
    <SiteHeader>
      <Content>
        <FlexBox>
          <HomeLink to="/" theme={{ ...state.themeLoaded }}>
            Nick Monaco
          </HomeLink>
          <HomeLink
            to="/blog"
            theme={{ ...state.themeLoaded }}
            style={{ marginLeft: "15px" }}
          >
            Blog
          </HomeLink>
          {/* <IconLink
            target="_blank"
            href="https://rss.nickmonaco.me"
            rel="noreferrer"
            title="RSS Feed"
            theme={{ ...state.themeLoaded }}
          >
            <Rss />
          </IconLink> */}
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
            href="mailto:nickmonacodev@gmail.com"
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
            <Radio />
          </IconLink>
          {/* <IconLink
            href="https://www.goodreads.com/user/show/77669630-nick-monaco"
            target="_blank"
            rel="noreferrer"
            title="Books"
            theme={{ ...state.themeLoaded }}
          >
            <Book />
          </IconLink> */}
          <IconLink
            href="/drone"
            active={path && path.includes("drone")}
            title="Drone"
            theme={{ ...state.themeLoaded }}
          >
            <Aperture />
          </IconLink>
          <ThemeButton />
        </FlexBox>
      </Content>
    </SiteHeader>
  );
};

export default Header;
