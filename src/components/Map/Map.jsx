import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { setLocation } from '@/ducks/Location'
import useWindowSize from '@/hooks/useWindowsSize'

const center = {
  lat: -34.397,
  lng: 150.644
}

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const Map = () => {
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const { lat, lng } = useSelector(({ location: { lat, lng } }) => ({
    lat,
    lng
  }))

  const handleMapClick = ({ latLng: { lat, lng }}) => {
    dispatch(setLocation(lat(), lng()))
  }

  const containerStyle = {
    width: width < 1024 ? '100vw' : '70vw',
    height: width < 1024 ? '55vh' : 'calc(100vh - 50px)'
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        onClick={handleMapClick}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}>
        {lat && lng && (
          <Marker position={{ lat, lng }} />
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export { Map }