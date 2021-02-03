import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStateContext } from "../utils/context"
import {
  OuterContainer,
  Container,
  LocationTag,
  MapPinIcon,
  LocationPicture,
} from "../components/components"

const Location = ({ location, url, img }) => {
  const state = useContext(GlobalStateContext)

  return (
    <Container
      theme={{ ...state.themeLoaded }}
      style={{ marginBottom: "30px", width: "100%" }}
    >
      <LocationTag theme={{ ...state.themeLoaded }}>
        <Link to={url}>
          <MapPinIcon />
          {location}
        </Link>
      </LocationTag>
      <LocationPicture fluid={img} alt={location} />
    </Container>
  )
}

const DronePage = ({ data, path }) => {
  const state = useContext(GlobalStateContext)
  // console.log(data)
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
            img={node.frontmatter.heroImg.childImageSharp.fluid}
          />
        ))}
      </OuterContainer>
    </Layout>
  )
}

export default DronePage

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
                fluid(maxWidth: 1920, webpQuality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
            # readingTime {
            #   text
            # }
          }
          # excerpt
        }
      }
    }
  }
`
