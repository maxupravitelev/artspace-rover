import axios from 'axios'
// const roverUrl = '/api/login'

const loginUrl = 'http://localhost:6050/api/login/'


const login = async credentials => {
  const response = await axios.post(loginUrl, credentials)
  console.log(response.data)
  return response.data
}

export default { login }