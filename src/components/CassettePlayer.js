import React, { useState, useContext } from "react"
import styled from "@emotion/styled"
import { SkipBack, SkipForward, Play, Pause } from "react-feather"
import ReactPlayer from "react-player/youtube"
import { playlist } from "../constants/playlist"
import { GlobalStateContext } from "../utils/context"
import Wheelsvg from "../images/wheel.svg"
import Wheelpng from "../images/wheel.png"
import Tapepng from "../images/tape.png"
import Labelpng from "../images/labelscript.png"
import Labelsvg from "../images/labelscript.svg"

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;

  @media (max-width: 767px) {
    height: 50vh;
  }
`
const Container = styled.div`
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  padding: 0px 3% 3% 3%;
  border-radius: 8px;
  width: 80%;
  height: 40vh;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  align-items: center;
  justify-content: center;

  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;

  @media (max-width: 767px) {
    width 100%;
 }
`
const Buttons = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 15px;
  height: 45px;
  width: 100%;
  cursor: pointer;
  margin-top: 10%;
`

const Button = styled.button`
  background: ${(props) => props.theme.background};
  border-right: none;
  border-left: 1px solid black;
  border-top: none;
  border-bottom: none;
  border-radius: 0;
  height: 100%;
  width: 25%;
  cursor: pointer;
  padding-top: 5px;
  transition: all 0.2s linear;
  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
    color: #808c99;
  }
  :active,
  :focus {
    outline: none;
  }
`
const Window = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  height: 10vh;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`
const Wheel = styled.object`
  height: auto;
  width: 15%;
`
const Tape = styled.img`
  padding-top: 25px;
  width: 30%;
`
const CassetteLabel = styled.object`
  width: 90%;
  height: 30%;
`

const Cassette = () => {
  const state = useContext(GlobalStateContext)
  const [play, toggle] = useState(false)
  const [track, setTrack] = useState(0)

  return (
    <OuterContainer>
      <Container theme={{ ...state.themeLoaded }}>
        <CassetteLabel data={Labelsvg} type="image/svg+xml">
          <img src={Labelpng} alt="Cassette label" />
        </CassetteLabel>
        <Window theme={{ ...state.themeLoaded }}>
          <Wheel
            data={Wheelsvg}
            type="image/svg+xml"
            className={play && "spinner"}
          >
            <img src={Wheelpng} alt="Cassette wheel" />
          </Wheel>
          <Tape src={Tapepng} alt="Cassette tape" />
          <Wheel
            data={Wheelsvg}
            type="image/svg+xml"
            className={play && "spinner"}
          >
            <img src={Wheelpng} alt="Cassette wheel" width="75" />
          </Wheel>
        </Window>
        <ReactPlayer
          url={`https://www.youtube.com/embed/${playlist[track]}?autoplay=0&loop=1&enablejsapi=1&origin=https://nickmonaco.me`}
          playing={play}
          height="0px"
          width="0px"
        />
        <Buttons theme={{ ...state.themeLoaded }}>
          <Button
            style={{ borderLeft: "none" }}
            disabled={track < 1}
            onClick={() => setTrack(track - 1)}
            theme={{ ...state.themeLoaded }}
          >
            <SkipBack />
          </Button>
          <Button
            onClick={() => toggle(true)}
            style={
              play
                ? {
                    boxShadow: state.themeLoaded.boxShadowInset,
                    color: "maroon",
                  }
                : {}
            }
            theme={{ ...state.themeLoaded }}
          >
            <Play />
          </Button>
          <Button
            onClick={() => toggle(false)}
            style={
              !play
                ? {
                    boxShadow: state.themeLoaded.boxShadowInset,
                    color: "maroon",
                  }
                : {}
            }
            theme={{ ...state.themeLoaded }}
          >
            <Pause />
          </Button>
          <Button
            disabled={track >= playlist.length - 1}
            onClick={() => setTrack(track + 1)}
            theme={{ ...state.themeLoaded }}
          >
            <SkipForward />
          </Button>
        </Buttons>
      </Container>
    </OuterContainer>
  )
}

export default Cassette
