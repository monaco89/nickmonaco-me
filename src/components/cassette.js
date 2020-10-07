import React, { useState } from "react"
import styled from "@emotion/styled"
import { SkipBack, SkipForward, Play, Pause } from "react-feather"
import ReactPlayer from "react-player/youtube"
import { playlist } from "../constants/playlist"
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
`
const Container = styled.div`
  text-align: center;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff;
  background: #f2f4f8;
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
`
const Buttons = styled.div`
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff;
  border-radius: 15px;
  height: 45px;
  width: 100%;
  cursor: pointer;
  margin-top: 50px;
`

const Button = styled.button`
  background: #f2f4f8;
  border-right: none;
  border-left: 1px solid black;
  border-top: none;
  border-bottom: none;
  border-radius: 0;
  height: 100%;
  width: 25%;
  cursor: pointer;
  padding-top: 5px;
  :hover {
    box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
      inset -3px -3px 6px 0px #fff;
    color: #808c99;
  }
  :active,
  :focus {
    outline: none;
  }
`
const Window = styled.div`
  box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
    inset -3px -3px 6px 0px #fff;
  background: #f2f4f8;
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
  width: 25%;
`
const CassetteLabel = styled.object`
  width: 90%;
`

const Cassette = () => {
  const [play, toggle] = useState(false)
  const [track, setTrack] = useState(0)
  console.log(playlist[track])
  return (
    <OuterContainer>
      <Container>
        <CassetteLabel data={Labelsvg} type="image/svg+xml">
          <img src={Labelpng} alt="Cassette label" />
        </CassetteLabel>
        <Window>
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
        <Buttons>
          <Button
            style={{ borderLeft: "none" }}
            disabled={track < 1}
            onClick={() => setTrack(track - 1)}
          >
            <SkipBack />
          </Button>
          <Button
            onClick={() => toggle(true)}
            style={
              play
                ? {
                    boxShadow:
                      "inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),inset -3px -3px 6px 0px #fff",
                    color: "maroon",
                  }
                : {}
            }
          >
            <Play />
          </Button>
          <Button
            onClick={() => toggle(false)}
            style={
              !play
                ? {
                    boxShadow:
                      "inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),inset -3px -3px 6px 0px #fff",
                    color: "maroon",
                  }
                : {}
            }
          >
            <Pause />
          </Button>
          <Button
            disabled={track >= playlist.length - 1}
            onClick={() => setTrack(track + 1)}
          >
            <SkipForward />
          </Button>
        </Buttons>
      </Container>
    </OuterContainer>
  )
}

export default Cassette
