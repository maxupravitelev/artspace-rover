import { saveUrlToCache } from '../utils'
import roversService from '../services/rovers'

const initState = {
  jitsiUrl: "",
  roverUrl: ""
}

const urlsReducer = (state = {}, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'SET_ROVER_URL':
      return {...state, roverUrl: action.data}
    case 'SET_JITSI_URL':
      return {...state, jitsiUrl: action.data}
    case 'SET_MJPG_URL':
      return {...state, mjpgUrl: action.data}
    default:
      return state
  }
}

export const setJitsiUrl = (jitsiUrl) => {
  
  saveUrlToCache("jitsiUrl", jitsiUrl)
  
  return async dispatch => {
    dispatch({
      type: 'SET_JITSI_URL',
      data: jitsiUrl
    })
  }
}

export const setRoverUrl = (roverUrl) => {

  saveUrlToCache("roverUrl", roverUrl)

  return async dispatch => {
    dispatch({
      type: 'SET_ROVER_URL',
      data: roverUrl
    })
  }
}

export const setMjpgUrl = (mjpgUrl) => {

  saveUrlToCache("mjpgUrl", mjpgUrl)

  return async dispatch => {
    dispatch({
      type: 'SET_MJPG_URL',
      data: mjpgUrl
    })
  }
}


export default urlsReducer