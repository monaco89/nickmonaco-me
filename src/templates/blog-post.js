// import React from "react"
// import { graphql } from "gatsby"
// import styled from "@emotion/styled"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { Content, MarkdownContent, HeaderDate } from "../components/components"

// const MarkedHeader = styled.h1`
//   display: inline;
//   border-radius: 1em 0 1em 0;
//   background-image: linear-gradient(
//     -100deg,
//     rgba(255, 250, 150, 0.15),
//     rgba(255, 250, 150, 0.8) 100%,
//     rgba(255, 250, 150, 0.25)
//   );
// `

// export default ({ data }) => {
//   const post = data.markdownRemark
//   return (
//     <Layout>
//       <SEO
//         title={post.frontmatter.title}
//         description={post.frontmatter.description || post.excerpt}
//       />
//       <Content>
//         <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
//         <HeaderDate>
//           {post.frontmatter.date} - {post.fields.readingTime.text}
//         </HeaderDate>
//         <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
//       </Content>
//     </Layout>
//   )
// }

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       excerpt(pruneLength: 160)
//       frontmatter {
//         date(formatString: "DD MMMM, YYYY")
//         path
//         title
//       }
//       fields {
//         readingTime {
//           text
//         }
//       }
//     }
//   }
// `
