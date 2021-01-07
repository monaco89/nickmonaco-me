import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Sun, Moon } from "react-feather"
import { GlobalDispatchContext, GlobalStateContext } from "../utils/context"

const IconButton = styled.a`
  color: ${(props) => props.theme.color};
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  padding: 10px 10px 0px 10px;
  border-radius: 8px;
  cursor: pointer;
  max-height: 46px;

  @media (max-width: 767px) {
    position: relative;
    top: 0;
    left: 15px;
  }

  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
    color: #808c99;
  }

  ${(props) =>
    props.active &&
    `
  box-shadow: ${props.theme.boxShadowInset};
  color: #808c99;
`}

  svg:hover {
    -webkit-transition: 300ms ease all;
    -moz-transition: 300ms ease all;
    -o-transition: 300ms ease all;
    transition: 300ms ease all;

    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const ThemeButton = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  return (
    <IconButton theme={{ ...state.themeLoaded }}>
      {!state.dark ? (
        <Sun onClick={() => dispatch(["TOGGLE_THEME"])} />
      ) : (
        <Moon onClick={() => dispatch(["TOGGLE_THEME"])} />
      )}
    </IconButton>
  )
}

export default ThemeButton
