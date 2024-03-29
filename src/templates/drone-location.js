import React, { useContext } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
// import GoogleMapReact from "google-map-react";
import {
  Content,
  MarkdownContent,
  HeaderDate,
  Layout,
  MapPinIcon,
  SEO,
  Video,
} from "../components";
import { GlobalStateContext } from "../utils/context";

const Header = styled.h1`
  font-size: 1.6rem;
  padding: 12px 12px 12px 0px;
  border-radius: 8px;
  text-align: left;
  width: fit-content;
  display: flex;
  align-content: flex-start;
  align-items: center;

  background-image: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// const MapLocationTag = styled.p`
//   font-size: 1.2rem;
//   padding: 12px 12px 12px 0px;
//   border-radius: 8px;
//   text-align: left;
//   width: fit-content;
//   white-space: nowrap;
//   font-weight: bold;

//   background-image: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const MapsContainer = styled.div`
//   height: 50vh;
//   margin-bottom: 30px;
//   // width: 50vw;

//   @media (max-width: 767px) {
//     width: 80vw;
//   }
// `;

const DroneLocation = ({ data }) => {
  const state = useContext(GlobalStateContext);
  const { frontmatter, html, excerpt } = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />
      <Content>
        <Header theme={{ ...state.themeLoaded }}>
          <MapPinIcon />
          {frontmatter.title}
        </Header>
        <HeaderDate>{frontmatter.date}</HeaderDate>
        {/* <MapsContainer>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
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
        </MapsContainer> */}
        <MarkdownContent
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ color: state.themeLoaded.color }}
        />
        {frontmatter.videoSourceUrl && (
          <Video videoSrcURL={frontmatter.videoSourceUrl} />
        )}
      </Content>
    </Layout>
  );
};

export default DroneLocation;

export const pageQuery = graphql`
  query ($path: String!) {
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
    }
  }
`;
