import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import urlsReducer from './reducers/urlsReducer'
import socketReducer from './reducers/socketReducer'
import timeslotReducer from './reducers/timeslotReducer'

const reducer = combineReducers({
  socket: socketReducer,
  urls: urlsReducer,
  timeslot: timeslotReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store