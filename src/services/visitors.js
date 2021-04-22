import axios from 'axios'

// const configUrl = "http://0.0.0.0:8000/";

const baseUrl = 'http://localhost:6050/api/visitors'

const visitorTimeslotUrl = 'http://localhost:6050/api/visitors/new-visitor/timeslot/'

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

const visitorService = { bookTimeslot, checkTimeslot, endSession, getSessionState }

export default visitorService
