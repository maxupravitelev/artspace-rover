import axios from 'axios'

// const configUrl = "http://0.0.0.0:8000/";

const allTimeslotsUrls = 'http://localhost:6050/api/timeslots/all-timeslots'

const getAll = async () => {
  const request = axios.get(allTimeslotsUrls)
  const response = await request
  return response.data
}

const timeslotService = { getAll }

export default timeslotService
