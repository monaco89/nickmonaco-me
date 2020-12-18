import React from "react"
import styled from "@emotion/styled"
import { Maximize2 } from "react-feather"
import ReactPlayer from "react-player/youtube"
import { playlist } from "../constants/playlist"
import Wheelsvg from "../images/wheel.svg"
import Wheelpng from "../images/wheel.png"
import Tapepng from "../images/tape.png"
import Labelpng from "../images/labelscript.png"
import Labelsvg from "../images/labelscript.svg"

const Link = styled.button`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  :active,
  :focus {
    outline: none;
  }
`
const Window = styled.div`
  box-shadow: inset 3px 3px 6px 0px rgba(0, 0, 0, 0.06),
    inset -3px -3px 6px 0px #fff;
  background: #f2f4f8;
  margin-left: 5px;
  height: 5vh;
  width: 95%;
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

const ControlOverlay = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`

const CassettePlayer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s ease;
  backface-visibility: hidden;
  display: block;
`

const Container = styled.div`
  text-align: center;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff;
  background: #f2f4f8;
  padding: 5px;
  border-radius: 8px;
  width: 10%;
  height: 9vh;

  position: absolute;
  bottom: 15px;
  right: 15px;

  :hover ${ControlOverlay} {
    opacity: 1;
  }
`

const MiniCassette = () => (
  <Container>
    <ControlOverlay>
      <Link href="/fm">
        <Maximize2
          size={32}
          style={{
            color: "maroon",
          }}
        />
      </Link>
    </ControlOverlay>
    <CassettePlayer>
      <CassetteLabel data={Labelsvg} type="image/svg+xml">
        <img src={Labelpng} alt="Cassette label" />
      </CassetteLabel>
      <Window>
        <Wheel data={Wheelsvg} type="image/svg+xml" className="spinner">
          <img src={Wheelpng} alt="Cassette wheel" />
        </Wheel>
        <Tape src={Tapepng} alt="Cassette tape" />
        <Wheel data={Wheelsvg} type="image/svg+xml" className="spinner">
          <img src={Wheelpng} alt="Cassette wheel" width="75" />
        </Wheel>
      </Window>
      <ReactPlayer
        url={`https://www.youtube.com/embed/${playlist[0]}?autoplay=0&loop=1&enablejsapi=1&origin=https://nickmonaco.me`}
        playing
        height="0px"
        width="0px"
      />
    </CassettePlayer>
  </Container>
)

export default MiniCassette
