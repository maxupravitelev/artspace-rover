import axios from 'axios'
const baseUrlRovers = 'http://localhost:6050/api/rovers'

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

  const response = await axios.put(baseUrlRovers + '/updateJitsiUrl/' + id, {jitsiUrl}, config)
  return response.data
}

const updateBaseUrl = async (baseUrl, id) => {
  const config = {
    headers: { 
      Authorization: token,
      "Content-Type": "application/json"
    },
    
  }
  const response = await axios.put(baseUrlRovers + '/updateBaseUrl/' + id, {baseUrl}, config)
  return response.data
}

export default {
  setToken,
  updateJitsiUrl,
  updateBaseUrl
}
