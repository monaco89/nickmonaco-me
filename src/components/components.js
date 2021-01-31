import styled from "@emotion/styled"
import { MapPin } from "react-feather"
import Img from "gatsby-image"

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.color};
  }
`

export const Container = styled.div`
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 50px;
  border-radius: 8px;

  @media (max-width: 767px) {
    padding: 25px 10px 30px 10px;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
export const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(255, 250, 150, 0.8),
      rgba(255, 250, 150, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }
`

export const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
  font-size: 1.1rem;
`

export const LocationTag = styled.h2`
  font-size: 1.4rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  padding: 12px;
  border-radius: 8px;
  text-align: left;
  width: fit-content;
  white-space: nowrap;

  background-image: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
  }

  @media (max-width: 767px) {
    white-space: normal;
    max-width: 90%;
    line-height: 30px;
  }
`

export const MapPinIcon = styled(MapPin)`
  color: #833ab4;
  margin-right: 10px;
`

export const LocationPicture = styled(Img)`
  width: 100%;
  height: auto;
  border-radius: 8px;
`
