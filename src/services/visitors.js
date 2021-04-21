import axios from 'axios'

// const configUrl = "http://0.0.0.0:8000/";

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

const visitorService = { bookTimeslot }

export default visitorService
