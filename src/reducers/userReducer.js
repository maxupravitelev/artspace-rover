import loginService from '../services/login'
import urlService from '../services/rovers'
import timeslotsService from '../services/timeslots'

const userReducer = (state = 'init', action) => {
  // console.log(state)
  // console.log(action)

  switch (action.type) {
  case 'LOGIN':
    return action.data
  case 'LOGOUT':
    return action.data
  case 'SET_FROM_LOCAL':
    return action.data
  case 'UPDATE':
    return action.data
  default:
    return state
  }
}

export const logoutUser = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT',
      data: null
    })
  }
}

export const loginUser = (credentials) => {
  return async dispatch => {
    // console.log(credentials)
    const user = await loginService.login(credentials)
    window.localStorage.setItem(
      'loggedRoverAppUser', JSON.stringify(user)
    )
    urlService.setToken(user.token)
    timeslotsService.setToken(user.token)

    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export const setUser = (user) => {
  urlService.setToken(user.token)
  timeslotsService.setToken(user.token)


  return async dispatch => {
    dispatch({
      type: 'SET_FROM_LOCAL',
      data: user
    })
  }
}

export const updateUser = (user) => {

  const loggedUserJSON = window.localStorage.getItem('loggedRoverAppUser')
  
  if (loggedUserJSON) {
    window.localStorage.setItem('loggedRoverAppUser', JSON.stringify(user)
    )
  }

  return async dispatch => {
    dispatch({
      type: 'UPDATE',
      data: user
    })
  }
}

export default userReducer