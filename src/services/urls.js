import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const updateJitsiUrl = async (jitsiUrl) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(baseUrl + '/' + rover.id, jitsiUrl, config)
  return response.data
}

const updateBaseUrl = async (baseUrl) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(baseUrl + '/' + rover.id, baseUrl, config)
  return response.data
}

export default {
  setToken,
  updateJitsiUrl,
  updateBaseUrl
}
