import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as Styled from './styles'

const CityList = () => {
  const [selectedCities, setSelectedCities] = useState([])
  
  const { cityList } = useSelector(({ weather }) => ({
    cityList: weather.citiesWeather
  }))

  const handleCityClick = id => {
    if (selectedCities.includes(id)) {
      setSelectedCities(selectedCities.filter(cityId => cityId !== id))
    } else {
      setSelectedCities([...selectedCities, id])
    }
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
           key={`${name}_${index}`}
           selected={selected}>
            <Styled.HeadInformation>
              <Styled.Label>
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
                  <Styled.Label>Wind Speed {windSpeed}km/h</Styled.Label>
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