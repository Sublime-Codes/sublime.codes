import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

export const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{height: `100%`}} />,
    containerElement: <div style={{height: `400px`}} />,
    mapElement: <div style={{height: `100%`}} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={17.28}
    defaultCenter={{lat: 41.328316, lng: 2.097821}}
    fullscreenControl={false}
    panControl={false}
  >
    <Marker position={{lat: 41.328316, lng: 2.097821}} />
  </GoogleMap>
))
