import { saveUrlToCache } from '../utils'
import urlsService from '../services/urls'

const initState = {
  jitsiUrl: "",
  roverUrl: ""
}

const urlsReducer = (state = {}, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'SET_URLS':
      return {...state, jitsiUrl: action.data}
    case 'SET_JITSI_URL':
      return {...state, jitsiUrl: action.data}
    case 'SET_BASE_URL':
      return {...state, roverUrl: action.data}
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
      type: 'SET_BASE_URL',
      data: roverUrl
    })
  }
}



export default urlsReducer