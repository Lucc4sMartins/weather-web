import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { fetchWeather } from '@/ducks/Weather'
import * as Styled from './styles'
import { Spinner } from '../Spinner'

const SearchButton = () => {
  const dispatch = useDispatch()
  const { lat, lng, weatherLoading } = useSelector(({ location, weather }) => ({
    lat: location.lat,
    lng: location.lng,
    weatherLoading: weather.weatherLoading
  }))

  const onSubmit = e => {
    e && e.preventDefault()

    if (!lat || !lng) {
      toast(
        'You must place a pin on the map before searching for weather information',
        { type: 'error' }
      )
    } else {
      dispatch(fetchWeather())
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Styled.Button type='submit'>
        {weatherLoading ? <Spinner /> : 'Search'}
      </Styled.Button>
    </form>
  )
}

export { SearchButton }