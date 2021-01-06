import React, { useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStateContext } from "../utils/context"
import Seneca from "../images/drone/seneca/seneca.jpg"
import {
  OuterContainer,
  Container,
  LocationTag,
  MapPinIcon,
  LocationPicture,
} from "../components/components"

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
