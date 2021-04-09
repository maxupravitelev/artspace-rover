import axios from 'axios'
// const baseUrl = '/api/login'

const loginUrl = 'http://localhost:6050/api/login/'


const login = async credentials => {
  const response = await axios.post(loginUrl, credentials)
  return response.data
}

export default { login }