import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Sun, Moon } from "react-feather"
import { GlobalDispatchContext, GlobalStateContext } from "../utils/context"

const IconButton = styled.a`
  color: ${(props) => props.theme.color};
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s linear;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  padding: 10px 10px 0px 10px;
  border-radius: 8px;
  position: absolute;
  bottom: 25px;
  right: 15px;
  cursor: pointer;

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
