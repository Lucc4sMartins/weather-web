import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { fetchWeather } from '@/ducks/Weather'
import * as Styled from './styles'
import { Spinner } from '../Spinner'

const SearchButton = () => {
  const dispatch = useDispatch()
  const { lat, lng, loading } = useSelector(({ location, weather }) => ({
    lat: location.lat,
    lng: location.lng,
    loading: weather.citiesWeatherLoading
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
        {loading ? <Spinner /> : 'Search'}
      </Styled.Button>
    </form>
  )
}

export { SearchButton }