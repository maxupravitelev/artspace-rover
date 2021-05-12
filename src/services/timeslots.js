import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_URL + '/timeslots'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const request = axios.get(baseUrl + '/all-timeslots')
  const response = await request
  return response.data
}

const remove = async (timeslotId) => {
  const config = {
    headers: { 
      Authorization: token
      // "Content-Type": "application/json"
    }
  }

  const response = await axios.delete(baseUrl + '/' + timeslotId, config)

  return response.data
}

const timeslotService = { getAll, remove, setToken }

export default timeslotService
