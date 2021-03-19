import { initSocket } from '../services/socket'

const socketReducer = (state = [], action) => {
    // console.log('state now: ', state)
    // console.log('action', action)
  
    switch (action.type) {
      case 'SET_SOCKET':
        return action.data
      default:
        return state
    }
  }

  export const setSocket = (socketUrl) => {
    // initSocket(urls.streamUrl)
    let socket = socketUrl
    console.log(socketUrl)
    if (socketUrl != 'demo:6475') {
      socket = initSocket(socketUrl)
    }
    console.log(socket)
    return async dispatch => {
      dispatch({
        type: 'SET_SOCKET',
        data: socket
      })
    }
  }

  export default socketReducer