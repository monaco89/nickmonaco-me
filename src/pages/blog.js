import React from "react";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Layout, SEO } from "../components";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`;

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`;

const IndexPage = ({ data, path }) => (
  <Layout path={path}>
    <SEO title="Blog" />
    <Content>
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges
        .filter(({ node }) => {
          const { rawDate } = node.frontmatter;
          const date = new Date(rawDate);
          return date < new Date();
        })
        .map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.frontmatter.path}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
              <div>
                <ArticleDate>{node.frontmatter.date}</ArticleDate>
              </div>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </Content>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { eq: false } } }
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
