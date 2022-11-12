import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({
  description,
  lang = "en",
  // keywords = ['nick', 'monaco', 'software', 'developer'],
  title,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = "https://files.nickmonaco.me/nickmonac-metatag-image.png";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <title>{title} | Nick Monaco</title>
      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href=""
      /> */}
      <meta name="description" content={metaDescription} />
      <meta property="og:site_name" content="Nick Monaco" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nickmonaco.me" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:site" content="@nick_monaco" />
      <meta name="twitter:url" content="https://nickmonaco.me" />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="apple-mobile-web-app-title" content="Nick Monaco" />
      <meta name="application-name" content="Nick Monaco" />
      <meta name="theme-color" content="#f2f4f8" />
    </Helmet>
  );
}

export default SEO;
