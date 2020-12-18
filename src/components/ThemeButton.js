import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Sun, Moon } from "react-feather"
import { GlobalDispatchContext, GlobalStateContext } from "../utils/context"

const IconButton = styled.a`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s linear;
  box-shadow: ${(props) => props.theme.boxShadow}
  background: ${(props) => props.theme.background}
  padding: 10px 10px 0px 10px;
  border-radius: 8px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer

  :hover {
    box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
      inset -3px -3px 6px 0px #fff;
    color: #808c99;
  }

  ${(props) =>
    props.active &&
    `
  box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
  inset -3px -3px 6px 0px #fff;
  color: #808c99;
`}
`

const ThemeButton = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  console.log(state)

  return (
    <IconButton>
      {state.theme === "light" ? (
        <Sun onClick={() => dispatch(["TOGGLE_THEME"])} />
      ) : (
        <Moon onClick={() => dispatch(["TOGGLE_THEME"])} />
      )}
    </IconButton>
  )
}

export default ThemeButton
