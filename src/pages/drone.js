import React, { useContext } from "react"
import styled from "@emotion/styled"
import GoogleMapReact from "google-map-react"
import { MapPin } from "react-feather"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStateContext } from "../utils/context"
import Seneca from "../images/seneca.jpg"

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.color};
  }
`

const Container = styled.div`
  text-align: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 50px 50px 20px 50px;
  border-radius: 8px;

  @media (max-width: 767px) {
    padding: 25px 0px 30px 0px;
  }
`

const LocationTag = styled.h2`
  font-size: 1.4rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 12px;
  border-radius: 8px;
  text-align: left;
  width: fit-content;

  background-image: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
  }
`

const LocationPicture = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

const MapPinIcon = styled(MapPin)`
  color: #833ab4;
  margin-right: 10px;
`

const Location = ({ location, url }) => {
  const state = useContext(GlobalStateContext)

  return (
    <Container theme={{ ...state.themeLoaded }}>
      <LocationTag theme={{ ...state.themeLoaded }}>
        <a href={`drone/${url}`}>
          <MapPinIcon />
          {location}
        </a>
      </LocationTag>
      <LocationPicture src={Seneca} alt={location} />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{ lat: 59.9, lng: 30.3 }}
        defaultZoom={11}
      >
        <LocationTag
          theme={{ ...state.themeLoaded }}
          // lat={59.955413}
          // lng={30.337844}
        >
          <a href={`drone/${url}`}>
            <MapPinIcon />
            {location}
          </a>
        </LocationTag>
      </GoogleMapReact>
    </Container>
  )
}

const DroneLocations = () => {
  const state = useContext(GlobalStateContext)

  return (
    <OuterContainer theme={{ ...state.themeLoaded }}>
      <h1>Drone Photography</h1>
      <p>Click locations to see more.</p>
      <Location location="Seneca Creek State Park, MD" url="seneca" />
    </OuterContainer>
  )
}

// TODO Use Gatsby images, query
const DronePage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Drone" keywords={[`nick`, `monaco`, `drone`, `photography`]} />
    <DroneLocations />
  </Layout>
)

export default DronePage
