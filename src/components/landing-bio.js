import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Download } from "react-feather"
import Profile from "../images/me.jpeg"
import Resume from "../data/NickMonacoResume_20200201.pdf"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 20vh;
  width: 20vh;
  overflow: hidden;
`

const ResumeLink = styled.a`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

const LandingBio = () => (
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
        <Container>
          <ProfilePicture src={Profile} alt="Nick Monaco Smiling" />
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <ResumeLink href={Resume} target="_blank">
            Resume 
            {' '}
            <Download style={{ height: "15px" }} />
          </ResumeLink>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
