import { initSocket } from '../services/socket'

const urlReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'SET_URLS':
      return action.data
    case 'SET_SOCKET':
      return action.data

    default:
      return state
  }
}

export const setUrls = (urls) => {
  return async dispatch => {
    dispatch({
      type: 'SET_URLS',
      data: urls
    })
  }
}

export const setSocket = (socketUrl) => {
  // initSocket(urls.streamUrl)
  const socket = initSocket(socketUrl)
  return async dispatch => {
    dispatch({
      type: 'SET_SOCKET',
      data: socket
    })
  }
}

export default urlReducer