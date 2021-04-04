import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import urlsReducer from './reducers/urlsReducer'
import socketReducer from './reducers/socketReducer'
import timeslotsReducer from './reducers/timeslotsReducer'
import directionsReducer from './reducers/directionsReducer'

const reducer = combineReducers({
  socket: socketReducer,
  urls: urlsReducer,
  timeslots: timeslotsReducer,
  directions: directionsReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store