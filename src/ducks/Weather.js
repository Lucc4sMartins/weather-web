// ACTION TYPES
export const Types = {
  FETCH_CITIES_WEATHER_LOADING: 'FETCH_CITIES_WEATHER_LOADING',
  FETCH_CITIES_WEATHER_SUCCESS: 'FETCH_CITIES_WEATHER_SUCCESS',
  FETCH_CITIES_WEATHER_ERROR: 'FETCH_CITIES_WEATHER_ERROR',
}

// REDUCER
const INITIAL_STATE = {
  citiesWeatherLoading: false,
  citiesWeather: [],
  citiesWeatherError: null
}

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
  case Types.FETCH_CITIES_WEATHER_LOADING:
    return {
      ...state,
      citiesWeatherLoading: true,
      citiesWeather: [],
      citiesWeatherError: null
    }
  case Types.FETCH_CITIES_WEATHER_SUCCESS:
    return {
      ...state,
      citiesWeatherLoading: false,
      citiesWeather: action.payload,
      citiesWeatherError: null
    }
  case Types.FETCH_CITIES_WEATHER_ERROR:
    return {
      ...state,
      citiesWeatherLoading: false,
      citiesWeather: [],
      citiesWeatherError: action.error
    }
  default:
    return state
  }
}

// ACTIONS
export function fetchWeather() {
  const request = () => ({ type: Types.FETCH_CITIES_WEATHER_LOADING })
  const success = payload => ({ type: Types.FETCH_CITIES_WEATHER_SUCCESS, payload })
  const failure = error => ({ type: Types.FETCH_CITIES_WEATHER_ERROR, error })

  const openWeatherApiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

  return async (dispatch, getState) => {
    dispatch(request())

    try {
      const { location: { lat, lng } } = getState()

      const res = await fetch(
        ` http://api.openweathermap.org/data/2.5/find?units=metric&lat=${lat}&lon=${lng}&cnt=15&APPID=${openWeatherApiKey}`
      )

      let { list, message } = await res.json()

      if (list) {
        list = await Promise.all(list.map(async city => {
          const iconUrl = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
          const fetchedIcon = await fetch(iconUrl)
          const iconBlob = await fetchedIcon.blob()
  
          return {
            id: city.id,
            name: city.name,
            iconUrl: window.URL.createObjectURL(iconBlob),
            windSpeed: city.wind.speed,
            feelsLike: city.main.feels_like,
            currentTemp: city.main.temp,
            maxTemp: city.main.temp_max,
            minTemp: city.main.temp_min
          }
        }))
      } else throw new Error(message)

      dispatch(success(list))
    } catch (e) {
      let errorMessage = 'Something went wrong'

      if (e.message === 'no results') {
        errorMessage = 'No results found, try another location'
      }

      dispatch(failure(errorMessage))
    }
  }
}