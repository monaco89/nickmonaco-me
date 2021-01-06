import React, { useContext } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { FileText } from "react-feather"
import Profile from "../images/me.jpeg"
import { GlobalStateContext } from "../utils/context"

const Container = styled.div`
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 50px;
  border-radius: 8px;

  @media (max-width: 767px) {
    padding: 25px 0px 30px 0px;
  }
`
const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const SubTitle = styled.h2`
  padding: 0;
`

const Description = styled.p`
  padding: 8px;
  font-size: 1rem;
  box-shadow: ${(props) => props.theme.boxShadowInset};
  border-radius: 8px;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 20vh;
  width: 20vh;
  overflow: hidden;
`

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
`

const LandingBio = () => {
  const state = useContext(GlobalStateContext)

  return (
    <StaticQuery
      query={graphql`
        query LandingSiteTitleQuery {
          site {
            siteMetadata {
              title
              subtitle
            }
          }
        }
      `}
      render={(data) => (
        <OuterContainer>
          <Container theme={{ ...state.themeLoaded }}>
            <ProfilePicture src={Profile} alt="Nick Monaco Smiling" />
            <NameHeader>{data.site.siteMetadata.title}</NameHeader>
            <SubTitle>{data.site.siteMetadata.subtitle}</SubTitle>
            <Description theme={{ ...state.themeLoaded }}>
              Based in Washington, D.C.
            </Description>
            <ResumeLink
              href="nickmonacoresume.pdf"
              target="_blank"
              theme={{ ...state.themeLoaded }}
            >
              <FileText style={{ height: "15px" }} />
              {' '}
              Resume
            </ResumeLink>
          </Container>
        </OuterContainer>
      )}
    />
  )
}

export default LandingBio
