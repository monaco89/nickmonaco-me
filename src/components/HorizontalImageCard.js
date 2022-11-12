import React from "react";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { MapPinIcon } from "./components";

const CardContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  margin-left: 0;
  margin-right: 0;
  width: 50%;
  transition-delay: 0.1s;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-duration: 0.8s;
  transition-duration: 0.8s;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  min-width: 300px;
`;

const ImageContainer = styled.div`
  // height: 17rem;
  width: 100%;
  // border: 0 solid #eee;
  position: relative;
  // background-color: #d8d8d8;

  .gatsby-image-wrapper {
    -webkit-transition: -webkit-transform 4s cubic-bezier(0.35, 0.9, 0.5, 1);
    transition: -webkit-transform 4s cubic-bezier(0.35, 0.9, 0.5, 1);
    transition: transform 4s cubic-bezier(0.35, 0.9, 0.5, 1);
    transition: transform 4s cubic-bezier(0.35, 0.9, 0.5, 1),
      -webkit-transform 4s cubic-bezier(0.35, 0.9, 0.5, 1);

    :hover {
      transform: scale(1.2);
    }
  }

  img {
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50%;
    max-width: 100%;
    display: block;
  }
`;

const SubHeader = styled.p`
  display: block;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  font-size: 9px;
  // color: #4d4d4d;
  color: ${(props) => props.theme.color};
  bottom: 0;
  right: 0;
  position: absolute;
  line-height: 2rem;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: bottom right;
  transform-origin: bottom right;
`;

const HeaderContainer = styled.div`
  padding-bottom: 3rem;
  padding-top: 0.5rem;

  background-image: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Header = styled.h2`
  font-size: 18px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  line-height: 2rem;
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.theme.color};
  display: flex;
  align-content: flex-start;
  align-items: center;
`;

export default function HorizontalImageCard({
  header,
  url = "/",
  subHeader,
  theme,
  gatsbyImage,
}) {
  return (
    <CardContainer>
      <a
        href={url}
        target={url.startsWith("https") ? "_blank" : ""}
        style={{ display: "block", textDecoration: "none" }}
        rel="noreferrer"
      >
        <ImageContainer>
          <div
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              borderRadius: "2px",
            }}
          >
            <GatsbyImage image={gatsbyImage} alt={header} />
          </div>
          <SubHeader theme={theme}>{subHeader}</SubHeader>
        </ImageContainer>
        <HeaderContainer>
          <Header theme={theme}>
            <MapPinIcon /> {header}
          </Header>
        </HeaderContainer>
      </a>
    </CardContainer>
  );
}
