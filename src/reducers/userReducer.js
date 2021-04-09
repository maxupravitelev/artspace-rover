import loginService from '../services/login'


const userReducer = (state = 'init', action) => {
  // console.log(state)
  // console.log(action)

  switch (action.type) {
  case 'USERNAME':
    return action.username
  case 'PASSWORD':
    return action.password
  case 'LOGIN':
    return action.data
  case 'LOGOUT':
    return action.data
  case 'SET_FROM_LOCAL':
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
    blogService.setToken(user.token)
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export const setUser = (user) => {
  return async dispatch => {
    dispatch({
      type: 'SET_FROM_LOCAL',
      data: user
    })
  }
}

export default userReducer