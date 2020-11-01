import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api'
import { setLocation } from '@/ducks/Location'
import useWindowSize from '@/hooks/useWindowsSize'
import * as Styled from './styles'

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const libraries = ['places']

const Map = () => {
  const [searchBoxRef, setSearchBoxRef] = useState(null)
  const [center, setCenter] = useState({
    lat: -22.9068467,
    lng: -43.1728965
  })
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const { lat, lng } = useSelector(({ location: { lat, lng } }) => ({
    lat,
    lng
  }))

  const handleMapClick = ({ latLng: { lat, lng }}) => {
    dispatch(setLocation(lat(), lng()))
  }

  const handlePlacesChange = () => {
    const { lat, lng } = searchBoxRef.getPlaces()[0].geometry.location;
    setCenter({ lat: lat(), lng: lng() })
  }

  const containerStyle = {
    width: width < 1024 ? '100vw' : '70vw',
    height: width < 1024 ? '55vh' : 'calc(100vh - 50px)'
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
      <GoogleMap
        onClick={handleMapClick}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}>
          <StandaloneSearchBox
            onLoad={ref => { setSearchBoxRef(ref) }}
            onPlacesChanged={handlePlacesChange}>
              <Styled.Input 
                type='text'
                placeholder='Search on Google Maps' />
          </StandaloneSearchBox>
        {lat && lng && (
          <Marker position={{ lat, lng }} />
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export { Map }