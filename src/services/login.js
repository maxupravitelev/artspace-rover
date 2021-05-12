import axios from 'axios'

const loginUrl = process.env.REACT_APP_BACKEND_URL + '/login/'


const login = async credentials => {
  const response = await axios.post(loginUrl, credentials)
  console.log(response.data)
  return response.data
}

export default { login }