import axios from 'axios'
const baseUrl = 'http://localhost:6050/api/rovers'

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

  const response = await axios.put(baseUrl + '/updateJitsiUrl/' + id, {jitsiUrl}, config)
  return response.data
}

const updateBaseUrl = async (baseUrl, id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(baseUrl + '/updateBaseUrl/' + id, baseUrl, config)
  return response.data
}

export default {
  setToken,
  updateJitsiUrl,
  updateBaseUrl
}
