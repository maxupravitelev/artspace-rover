import axios from 'axios'

const allUsersUrl = process.env.REACT_APP_BACKEND_URL + '/exhibitions/'

const getAll = async () => {
    const response = await axios.get(allUsersUrl)

  return response.data
}

export default { getAll }