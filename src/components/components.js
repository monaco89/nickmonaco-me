import styled from "@emotion/styled";
import { MapPin } from "react-feather";

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.color};
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

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
  p {
    line-height: 140%;
  }
`;

export const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
  font-size: 1.1rem;
`;

export const MapPinIcon = styled(MapPin)`
  color: #833ab4;
  margin-right: 10px;
`;
