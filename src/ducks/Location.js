// ACTION TYPES
export const Types = {
  SET_MAP_LOCATION: 'SET_MAP_LOCATION'
}

// REDUCER
const INITIAL_STATE = {
  lat: null,
  lng: null
}

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
  case Types.SET_MAP_LOCATION:
    return {
      ...state,
      lat: action.payload.lat,
      lng: action.payload.lng,
    }
  default:
    return state
  }
}

// ACTIONS
export function setLocation(lat, lng) {
  return {
    type: Types.SET_MAP_LOCATION,
    payload: {
      lat,
      lng
    }
  }
}