import React, { useContext } from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import GoogleMapReact from "google-map-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/Video"
import {
  Content,
  MarkdownContent,
  MapPinIcon,
  HeaderDate,
} from "../components/components"
import { GlobalStateContext } from "../utils/context"

const Header = styled.h1`
  font-size: 1.6rem;
  padding: 12px 12px 12px 0px;
  border-radius: 8px;
  text-align: left;
  width: fit-content;

  background-image: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const MapLocationTag = styled.p`
  font-size: 1.2rem;
  padding: 12px 12px 12px 0px;
  border-radius: 8px;
  text-align: left;
  width: fit-content;
  white-space: nowrap;
  font-weight: bold;

  background-image: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const MapsContainer = styled.div`
  height: 50vh;
  margin-bottom: 30px;
  // width: 50vw;

  @media (max-width: 767px) {
    width: 80vw;
  }
`

export default ({ data }) => {
  const state = useContext(GlobalStateContext)
  const { frontmatter, html, excerpt, fields } = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />
      <Content>
        <Header theme={{ ...state.themeLoaded }}>
          {/* <MapPinIcon /> */}
          {frontmatter.title}
        </Header>
        <HeaderDate>
          {frontmatter.date} - {fields.readingTime.text}
        </HeaderDate>
        <MapsContainer>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GOOGLE_MAPS_API_KEY,
            }}
            defaultCenter={{
              lat: frontmatter.lat,
              lng: frontmatter.lng,
            }}
            defaultZoom={15}
          >
            <MapLocationTag
              theme={{ ...state.themeLoaded }}
              lat={frontmatter.lat}
              lng={frontmatter.lng}
            >
              <MapPinIcon />
              {frontmatter.title}
            </MapLocationTag>
          </GoogleMapReact>
        </MapsContainer>
        <MarkdownContent
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ color: state.themeLoaded.color }}
        />
        <Video videoSrcURL={frontmatter.videoSourceUrl} />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        lat
        lng
        videoSourceUrl
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
