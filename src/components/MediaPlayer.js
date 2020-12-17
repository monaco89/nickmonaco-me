import React, { useContext } from "react"
import styled from "@emotion/styled"
import { Speaker } from "react-feather"
import { GlobalDispatchContext } from "../utils/context"

const IconLink = styled.button`
  color: black;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s linear;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff;
  background: #f2f4f8;
  padding: 10px 10px 0px 10px;
  border-radius: 8px;
  border: none;
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;

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

const MediaPlayer = () => {
  const dispatch = useContext(GlobalDispatchContext)
  // const state = useContext(GlobalStateContext)

  return (
    <IconLink
      type="button"
      onClick={() => {
        dispatch(["TOGGLE_PLAYER"])
      }}
    >
      <Speaker />
    </IconLink>
  )
}

export default MediaPlayer
