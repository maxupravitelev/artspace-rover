import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_URL + '/visitors'
const visitorTimeslotUrl = process.env.REACT_APP_BACKEND_URL + '/visitors/new-visitor/timeslot/'


const bookTimeslot = async (eMailAddress, timeslotId) => {

  let token = "test"

  const config = {
    headers: { 
      Authorization: token,
      "Content-Type": "application/json"
    },
    
  }

  const request = axios.post(visitorTimeslotUrl + timeslotId, { eMailAddress }, config)
  const response = await request
  return response.data
}

const checkTimeslot = async (credentials) => {

  const checkUrl = baseUrl + '/check/'

  const config = {
    headers: { 
      // Authorization: token,
      "Content-Type": "application/json"
    },
  }

  const request = axios.post(checkUrl, credentials , config)
  const response = await request
  return response.data
}

const endSession = async (credentials) => {

  const checkUrl = baseUrl + '/endSession'

  const config = {
    headers: { 
      // Authorization: token,
      "Content-Type": "application/json"
    },
  }

  const request = axios.post(checkUrl, credentials , config)
  const response = await request
  return response.data
}

const getSessionState = async () => {

  const checkUrl = baseUrl + '/checkSession'

  const request = axios.get(checkUrl)
  const response = await request
  return response.data
}

const setInstantSessionState = async (sessionState) => {

  const checkUrl = baseUrl + '/setInstantSessionState'

  const request = axios.post(checkUrl, sessionState)
  const response = await request
  return response.data
}

const endInstantSession = async () => {

  const checkUrl = baseUrl + '/endInstantSession'

  // todo: handle setting ending message from env for preventing closing sessions from outside
  const message = { sessionState: "end session" }

  const config = {
    headers: { 
      // Authorization: token,
      "Content-Type": "application/json"
    },
  }

  const request = axios.post(checkUrl, message, config)
  const response = await request
  return response.data
}

const visitorService = { bookTimeslot, checkTimeslot, endSession, getSessionState, setInstantSessionState, endInstantSession }

export default visitorService
