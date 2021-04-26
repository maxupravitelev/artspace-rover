import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import urlsReducer from './reducers/urlsReducer'
import timeslotsReducer from './reducers/timeslotsReducer'
import directionsReducer from './reducers/directionsReducer'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'
import notificationReducer from './reducers/notificationReducer'
import sessionReducer from './reducers/sessionReducer'
import exhibitionsReducer from './reducers/exhibitionsReducer'
import visitorReducer from './reducers/visitorReducer'


const reducer = combineReducers({
  urls: urlsReducer,
  timeslots: timeslotsReducer,
  directions: directionsReducer,
  users: usersReducer,
  user: userReducer,
  notification: notificationReducer,
  session: sessionReducer,
  exhibitions: exhibitionsReducer,
  visitor: visitorReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store