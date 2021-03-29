import axios from 'axios'


// const configUrl = "http://0.0.0.0:8000/";

const getAllTimeslots = async (timeslotsUrl) => {
  const request = axios.get(timeslotsUrl)
  const response = await request
  return response.data
}


const timeslotService = { getAllTimeslots }

export default timeslotService
