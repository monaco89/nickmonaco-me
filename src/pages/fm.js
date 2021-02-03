import React, { useState, useContext } from "react"
import styled from "@emotion/styled"
import { Headphones, Speaker } from "react-feather"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cassette from "../components/CassettePlayer"
import Boombox from "../components/Boombox"
import { GlobalStateContext } from "../utils/context"

const IconLink = styled.button`
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) =>
    props.active ? props.theme.boxShadowInset : props.theme.boxShadow};
  color: ${(props) => (props.active ? "#808c99" : props.theme.color)};
  border: none;
  padding: 10px 10px 0px 10px;
  border-radius: 8px;
  cursor: pointer;
  outline: none;

  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
    color: #808c99;
  }
`

const FmPage = ({ path }) => {
  const state = useContext(GlobalStateContext)
  const [player, setPlayer] = useState(0)

  return (
    <Layout path={path}>
      <SEO title="🔈" keywords={[`nick`, `monaco`, `music`, `fm`]} />
      {player === 0 ? <Cassette /> : <Boombox />}
      <IconLink
        type="button"
        onClick={() => setPlayer(player === 0 ? 1 : 0)}
        theme={{ ...state.themeLoaded }}
      >
        {player === 1 ? <Headphones /> : <Speaker />}
      </IconLink>
    </Layout>
  )
}

export default FmPage
