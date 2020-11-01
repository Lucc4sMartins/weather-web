import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import location from '@/ducks/Location'
import weather from '@/ducks/Weather'

const reducers = combineReducers({
  location,
  weather
})

const shouldComposeWithReduxDevtools = process.env.NODE_ENV !== 'production'

let middleware = applyMiddleware(thunk)

if (shouldComposeWithReduxDevtools) middleware = composeWithDevTools(middleware)

export const AppStore = createStore(
  reducers,
  middleware
)
