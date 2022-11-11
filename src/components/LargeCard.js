import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

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

  //   @media screen and (min-width: 767px) {
  //     width 100%;
  //  }
`;

const ImageContainer = styled.div`
  height: 37rem;
  width: 100%;
  // border: 0 solid #eee;
  position: relative;
  // background-color: #d8d8d8;

  img {
    -webkit-transition: -webkit-transform 4s cubic-bezier(0.35, 0.9, 0.5, 1);
    transition: -webkit-transform 4s cubic-bezier(0.35, 0.9, 0.5, 1);
    transition: transform 4s cubic-bezier(0.35, 0.9, 0.5, 1);
    transition: transform 4s cubic-bezier(0.35, 0.9, 0.5, 1),
      -webkit-transform 4s cubic-bezier(0.35, 0.9, 0.5, 1);
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
    :hover {
      transform: scale(1.2);
    }
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
  padding-bottom: 5rem;
  padding-top: 1rem;
`;

const Header = styled.h2`
  font-size: 18px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  line-height: 2rem;
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.theme.color};
`;

export default function LargeCard({
  header,
  url = '/',
  picture = 'https://files.nickmonaco.me/drone/bigsur/DJI_0255.JPG',
  subHeader,
  theme,
  gatsbyImage,
}) {
  return (
    <CardContainer>
      <a
        href={url}
        target={url.startsWith('https') ? '_blank' : ''}
        style={{ display: 'block', textDecoration: 'none' }}
        rel="noreferrer"
      >
        <ImageContainer>
          <div
            style={{
              height: '100%',
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              borderRadius: '2px',
            }}
          >
            {!gatsbyImage && (
              <img data-src={picture} alt={header} src={picture} />
            )}
            {gatsbyImage && <GatsbyImage image={gatsbyImage} alt={header} />}
          </div>
          <SubHeader theme={theme}>{subHeader}</SubHeader>
        </ImageContainer>
        <HeaderContainer>
          <Header theme={theme}>{header}</Header>
        </HeaderContainer>
      </a>
    </CardContainer>
  );
}
