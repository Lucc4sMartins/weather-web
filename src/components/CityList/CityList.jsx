import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as Styled from './styles'

const CityList = () => {
  const [selectedCities, setSelectedCities] = useState([])
  
  const { cityList, error } = useSelector(({ weather }) => ({
    cityList: weather.citiesWeather,
    error: weather.citiesWeatherError
  }))

  const handleCityClick = id => {
    if (selectedCities.includes(id)) {
      setSelectedCities(selectedCities.filter(cityId => cityId !== id))
    } else {
      setSelectedCities([...selectedCities, id])
    }
  }

  if (error) {
    return <Styled.ErrorMessage>{error}</Styled.ErrorMessage>
  }
  
  return (
    <Styled.List>
      {cityList.map((city, index) => {
        const {
          id,
          name,
          iconUrl,
          currentTemp,
          minTemp,
          maxTemp,
          windSpeed,
          feelsLike
        } = city

        const selected = selectedCities.includes(id)

        return (
          <Styled.ListItem
           onClick={() => handleCityClick(id)}
           key={`${name}_${index}`}>
            <Styled.HeadInformation>
              <Styled.Label bold>
                {name}
              </Styled.Label>
              <Styled.CurrentTempWrapper>
                <Styled.Label>
                  {currentTemp}º
                </Styled.Label>
                <Styled.Icon src={iconUrl} />
              </Styled.CurrentTempWrapper>
            </Styled.HeadInformation>
            {selected && (
              <>
                <Styled.MoreInfoWrapper>
                  <Styled.Label>Min {minTemp}º</Styled.Label>
                  <Styled.Label>Feels Like {feelsLike}º</Styled.Label>
                </Styled.MoreInfoWrapper>
                <Styled.MoreInfoWrapper>
                  <Styled.Label>Max {maxTemp}º</Styled.Label>
                  <Styled.Label>Wind Speed {windSpeed} meter/sec</Styled.Label>
                </Styled.MoreInfoWrapper>
              </>
            )}
          </Styled.ListItem>
        )
      })}
    </Styled.List>
  )
}

export { CityList }