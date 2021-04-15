import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import urlsReducer from './reducers/urlsReducer'
import socketReducer from './reducers/socketReducer'
import timeslotsReducer from './reducers/timeslotsReducer'
import directionsReducer from './reducers/directionsReducer'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'
import notificationReducer from './reducers/notificationReducer'
import sessionReducer from './reducers/sessionReducer'

const reducer = combineReducers({
  socket: socketReducer,
  urls: urlsReducer,
  timeslots: timeslotsReducer,
  directions: directionsReducer,
  users: usersReducer,
  user: userReducer,
  notification: notificationReducer,
  session: sessionReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store