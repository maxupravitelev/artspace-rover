import axios from 'axios'

const allUsersUrl = 'http://localhost:6050/api/users/'

const getAll = async () => {
    const response = await axios.get(allUsersUrl)

  return response.data
}

export default { getAll }