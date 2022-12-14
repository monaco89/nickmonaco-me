import React, { useContext } from "react";
import styled from "@emotion/styled";
import { GlobalStateContext } from "../utils/context";
import LargeCard from "./LargeCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  color: ${(props) => props.theme.color};
`;

const LocationContainer = styled.div`
  position: absolute;
  padding-bottom: 0;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: top left;
  transform-origin: top left;
  color: ${(props) => props.theme.color};
`;

const Location = styled.h2`
  font-size: 11px;
  margin-top: -2rem;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  line-height: 2rem;
  margin: 0;
`;

function LandingBio() {
  const state = useContext(GlobalStateContext);

  return (
    <>
      <LocationContainer theme={{ ...state.themeLoaded }}>
        <Location>📍 Based in Connecticut, US.</Location>
      </LocationContainer>
      <Container>
        <LargeCard
          header="Resume"
          subHeader="Download PDF"
          picture="https://files.nickmonaco.me/home_resume.jpeg"
          url="https://files.nickmonaco.me/NickMonacoResume.pdf"
          theme={{ ...state.themeLoaded }}
        />
        <LargeCard
          header="Gallery"
          subHeader="Explore Drone Photos"
          picture="https://files.nickmonaco.me/home_gallery.jpeg"
          url="/drone"
          theme={{ ...state.themeLoaded }}
        />
      </Container>
    </>
  );
}

export default LandingBio;
