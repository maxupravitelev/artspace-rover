import axios from 'axios'
const roverUrlRovers = 'http://localhost:6050/api/rovers'

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
  
  // console.log({jitsiUrl})

  const response = await axios.put(roverUrlRovers + '/updateJitsiUrl/' + id, {jitsiUrl}, config)
  return response.data
}

const updateRoverUrl = async (roverUrl, id) => {
  const config = {
    headers: { 
      Authorization: token,
      "Content-Type": "application/json"
    },
    
  }
  const response = await axios.put(roverUrlRovers + '/updateRoverUrl/' + id, {roverUrl}, config)
  return response.data
}

export default {
  setToken,
  updateJitsiUrl,
  updateRoverUrl
}
