import React, { useContext } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import {
  Layout,
  SEO,
  OuterContainer,
  HorizontalImageCard,
} from "../components";
import { GlobalStateContext } from "../utils/context";

const Location = ({ location, url, img, date }) => {
  const state = useContext(GlobalStateContext);
  const gatsbyImage = getImage(img);

  return (
    <HorizontalImageCard
      theme={{ ...state.themeLoaded }}
      style={{ marginBottom: "30px", width: "100%" }}
      header={location}
      subHeader={date}
      url={url}
      gatsbyImage={gatsbyImage}
    />
  );
};

const DronePage = ({ data, path }) => {
  const state = useContext(GlobalStateContext);

  return (
    <Layout path={path}>
      <SEO
        title="Drone"
        keywords={[`nick`, `monaco`, `drone`, `photography`]}
      />
      <OuterContainer theme={{ ...state.themeLoaded }}>
        <h1>Drone Photography</h1>
        <p>Click locations to see more.</p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Location
            key={node.frontmatter.title}
            location={node.frontmatter.title}
            url={node.frontmatter.path}
            img={node.frontmatter.heroImg}
            date={node.frontmatter.rawDate}
          />
        ))}
      </OuterContainer>
    </Layout>
  );
};

export default DronePage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/content/drone/.*\\.md$/"}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
            heroImg {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
