import React, { useState, useContext } from "react"
import styled from "@emotion/styled"
import { SkipBack, SkipForward, Play, Pause } from "react-feather"
import ReactPlayer from "react-player/youtube"
import { playlist } from "../constants/playlist"
import { GlobalStateContext } from "../utils/context"

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 70vh;

  //   @media (max-width: 767px) {
  //     height: 50vh;
  //   }
`

const Container = styled.div`
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  padding: 0px 3% 3% 3%;
  border-radius: 8px;
  width: 90%;
  height: 50vh;

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
  margin-bottom: 50px;
`

const Button = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.buttonColor};
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

const Bottom = styled.div`
  //   box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const Speaker = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  height: 25vh;
  width: 250px;
  border-radius: 100%;
  position: relative;

  @media (max-width: 767px) {
    height: 18vh;
    width: 120px;
  }
`

const Circle = styled.div`
  box-shadow: ${(props) => props.theme.boxShadowInset};
  background: ${(props) => props.theme.background};
  height: 30%;
  width: 30%;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Handle = styled.div`
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  border-radius: 8px 8px 0px 0px;
  width: 60%;
  height: 8vh;
  position: relative;
`

const HandleGap = styled.div`
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadowInset};
  background: ${(props) => props.theme.background};
  border-radius: 8px;
  width: 85%;
  height: 4vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

// TODO Have state, play wrapper for both players
// TODO Move components toc components.js
const Boombox = () => {
  const state = useContext(GlobalStateContext)
  const [play, toggle] = useState(false)
  const [track, setTrack] = useState(0)

  return (
    <OuterContainer>
      <Handle theme={{ ...state.themeLoaded }}>
        <HandleGap theme={{ ...state.themeLoaded }} />
      </Handle>
      <Container theme={{ ...state.themeLoaded }}>
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
        <Bottom theme={{ ...state.themeLoaded }}>
          <Speaker theme={{ ...state.themeLoaded }}>
            <Circle
              theme={{ ...state.themeLoaded }}
              className={play && "scaler"}
            />
          </Speaker>
          {/* <p>Cassette</p> */}
          <Speaker theme={{ ...state.themeLoaded }}>
            <Circle
              theme={{ ...state.themeLoaded }}
              className={play && "scaler"}
            />
          </Speaker>
        </Bottom>
      </Container>
    </OuterContainer>
  )
}

export default Boombox
