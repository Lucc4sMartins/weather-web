import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { setLocation } from '@/ducks/Location'

const center = {
  lat: -34.397,
  lng: 150.644
}

const containerStyle = {
  width: '100vw',
  height: '60vh'
}

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const Map = () => {
  const dispatch = useDispatch()
  const { lat, lng } = useSelector(({ location: { lat, lng } }) => ({
    lat,
    lng
  }))

  const handleMapClick = ({ latLng: { lat, lng }}) => {
    dispatch(setLocation(lat(), lng()))
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