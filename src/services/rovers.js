import axios from 'axios'
const baserUrlRovers = process.env.REACT_APP_BACKEND_URL + '/rovers'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const updateJitsiUrl = async (jitsiUrl, id) => {
  const config = {
    headers: { 
      Authorization: token,
      "Content-Type": "application/json"
    }, 
  }

  const response = await axios.put(baserUrlRovers + '/updateJitsiUrl/' + id, { jitsiUrl }, config)
  return response.data
}

const updateRoverUrl = async (roverUrl, id) => {
  const config = {
    headers: { 
      Authorization: token,
      "Content-Type": "application/json"
    },
    
  }
  const response = await axios.put(baserUrlRovers + '/updateRoverUrl/' + id, {roverUrl}, config)
  return response.data
}

const updateMjpgUrl = async (mjpgUrl, id) => {
  const config = {
    headers: { 
      Authorization: token,
      "Content-Type": "application/json"
    },
    
  }
  const response = await axios.put(baserUrlRovers + '/updateMjpgUrl/' + id, { mjpgUrl }, config)
  return response.data
}

const updateStreamngMode = async (streamingMode, id) => {
  const config = {
    headers: { 
      Authorization: token,
      "Content-Type": "application/json"
    },
    
  }
  const response = await axios.put(baserUrlRovers + '/updateStreamingMode/' + id, { streamingMode }, config)
  return response.data
}

export default {
  setToken,
  updateJitsiUrl,
  updateRoverUrl,
  updateMjpgUrl,
  updateStreamngMode
}
