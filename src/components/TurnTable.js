import React from 'react';
import styled from '@emotion/styled';
import { SkipBack, SkipForward, Play, Pause } from 'react-feather';
import ReactPlayer from 'react-player/youtube';
import { GlobalStateContext } from '../utils/context';
import { playlist } from '../constants/playlist';
import Cover from '../images/cover.jpeg';

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 70vh;

  @media (max-width: 767px) {
    height: 50vh;
  }
`;

const Container = styled.div`
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  padding: 0px 3% 0% 3%;
  border-radius: 8px;
  width: 100%;
  height: 50vh;
  min-height: 420px;

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
`;

const WheelsContainter = styled.div`
  //   height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const Wheel = styled.div`
  transition: all 0.4s ease-in-out;
  height: 280px !important;
  width: 280px !important;
  transform: scale(0.94);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  :hover {
    opacity: 1;
  }

  .spinning {
    transform: scale(1);
  }
`;

const WheelCircle = styled.div`
  border-radius: 50%;
  background: #c6c7cc;
  height: 80px;
  z-index: -1;
  width: 80px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;

  :before,
  :after {
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    content: '';

    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }

  :before {
    height: 140px;
    width: 140px;
  }

  :after {
    height: 210px;
    width: 210px;
  }
`;

const WheelCover = styled.img`
  -webkit-animation: spin 60s linear infinite;
  animation: spin 60s linear infinite;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
  position: absolute;
  background: #fff;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.8;
  height: 100%;
  width: 100%;
  z-index: -2;
  top: 0;
  max-width: 100%;
  display: block;
  opacity: 1;
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 10px;
  display: block;
`;

const Dials = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
`;

const Button = styled.button`
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) =>
    props.active ? props.theme.boxShadowInset : props.theme.boxShadow};
  color: ${(props) => (props.active ? '#808c99' : props.theme.color)};
  padding: 10px;
  height: 60px;
  width: 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.2s linear;
  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
    color: #808c99;
  }
  :active,
  :focus {
    outline: none;
  }
`;

const Dial = styled.div`
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) =>
    props.active ? props.theme.boxShadowInset : props.theme.boxShadow};
  color: ${(props) => (props.active ? '#808c99' : props.theme.color)};
  padding: 10px;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.2s linear;
  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
    color: #808c99;
  }
  :active,
  :focus {
    outline: none;
  }
`;

function TurnTable() {
  const state = React.useContext(GlobalStateContext);
  const [play, toggle] = React.useState(false);
  const [track, setTrack] = React.useState(0);

  return (
    <OuterContainer>
      <Container theme={{ ...state.themeLoaded }}>
        <Dials>
          <Dial
            theme={{ ...state.themeLoaded }}
            style={{ transform: 'rotate(50deg)' }}
          >
            |
          </Dial>
          <Dial
            theme={{ ...state.themeLoaded }}
            style={{ transform: 'rotate(140deg)' }}
          >
            |
          </Dial>
          <Dial theme={{ ...state.themeLoaded }}>|</Dial>
        </Dials>
        <WheelsContainter>
          <Wheel className={play && 'wheel spinning'}>
            <WheelCircle />
            {/* <img className="wheel-bg" src={Cover} alt="record cover" /> */}
            <WheelCover
              src={Cover}
              alt="record cover"
              className={play && 'wheel-bg'}
            />
          </Wheel>
          <Wheel className={play && 'wheel spinning'}>
            <WheelCircle />
            <WheelCover
              src={Cover}
              alt="record cover"
              className={play && 'wheel-bg'}
            />
          </Wheel>
        </WheelsContainter>
        <ReactPlayer
          url={`https://www.youtube.com/embed/${playlist[track]}?autoplay=0&loop=1&enablejsapi=1&origin=https://nickmonaco.me`}
          playing={play}
          height="0px"
          width="0px"
        />
        <Buttons>
          <Button
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
                    color: 'maroon',
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
                    color: 'maroon',
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
  );
}

export default TurnTable;
