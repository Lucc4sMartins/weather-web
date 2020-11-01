// ACTION TYPES
export const Types = {
  FETCH_WEATHER_LOADING: 'FETCH_WEATHER_LOADING',
  FETCH_WEATHER_SUCCESS: 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR: 'FETCH_WEATHER_ERROR',
}

// REDUCER
const INITIAL_STATE = {
  weatherLoading: false,
  weather: null,
  weatherError: null
}

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
  case Types.FETCH_WEATHER_LOADING:
    return {
      ...state,
      weatherLoading: true,
      weather: null,
      weatherError: null
    }
  case Types.FETCH_WEATHER_SUCCESS:
    return {
      ...state,
      weatherLoading: false,
      weather: action.payload,
      weatherError: null
    }
  case Types.FETCH_WEATHER_ERROR:
    return {
      ...state,
      weatherLoading: false,
      weather: null,
      weatherError: action.error
    }
  default:
    return state
  }
}

// ACTIONS
export function fetchWeather() {
  const request = () => ({ type: Types.FETCH_WEATHER_LOADING })
  const success = payload => ({ type: Types.FETCH_WEATHER_SUCCESS, payload })
  const failure = error => ({ type: Types.FETCH_WEATHER_ERROR, error })

  const openWeatherApiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

  return async (dispatch, getState) => {
    dispatch(request())

    try {
      const { location: { lat, lng } } = getState()

      const res = await fetch(
        ` http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=15&APPID=${openWeatherApiKey}`
      )

      const data = await res.json()

      dispatch(success(data))
    } catch (e) {
      console.error(e)
      dispatch(failure(e))
    }
  }
}