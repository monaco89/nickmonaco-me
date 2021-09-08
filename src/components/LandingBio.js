import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { FileText } from 'react-feather';
import { GlobalStateContext } from '../utils/context';
import { Container, OuterContainer } from './components';

const Title = styled.h1`
  padding-top: 20px;
  font-size: 18pt;
  font-weight: bold;
  max-width: 500px;
`;

const Description = styled.p`
  font-size: 13pt;
`;

const ProfilePictureContainer = styled.div`
  border-radius: 50%;
  height: auto;
  width: 20vh;
  overflow: hidden;
  display: inline-flex;
  margin-bottom: 1rem;
`;

const ResumeLink = styled.a`
  text-decoration: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 10px;
  border-radius: 8px;
  transition: all 0.2s linear;
  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
    color: #808c99;
  }
`;

const LandingBio = () => {
  const state = useContext(GlobalStateContext);

  return (
    <OuterContainer>
      <Container theme={{ ...state.themeLoaded }}>
        <ProfilePictureContainer>
          <StaticImage
            src="../images/me.jpg"
            alt="Nick Monaco Smiling"
            imgStyle={{ borderRadius: '100%' }}
          />
        </ProfilePictureContainer>
        <Title>👋🏻 I&#39;m Nick: Senior Software Engineer at ICF</Title>
        <Description>Programming professional. Drone enthusiast.</Description>
        <Description>📍 Based in Washington, DC.</Description>
        <br />
        <ResumeLink
          href="https://files.nickmonaco.me/NickMonacoResume.pdf"
          target="_blank"
          theme={{ ...state.themeLoaded }}
        >
          <FileText style={{ height: '15px' }} /> Resume
        </ResumeLink>
      </Container>
    </OuterContainer>
  );
};

export default LandingBio;
