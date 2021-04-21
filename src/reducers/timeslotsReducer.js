import timeslotService from '../services/timeslots'
import visitorService from '../services/visitors'


const timeslotsReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'GET_ALL_TIMESLOTS':
      return action.data
    case 'UPDATE_ALL_TIMESLOTS':
      return action.data
    default:
      return state
  }
}

export const getAllTimeslots = () => {

  return async (dispatch) => {
      
    const allTimeslotsFromBackend = await timeslotService.getAll()
  
    dispatch({
      type: 'GET_ALL_TIMESLOTS',
      data: allTimeslotsFromBackend,
    })
  }
}

export const updateTimeslots = (eMailAddress, timeslotId) => {

  return async (dispatch) => {
      
    const bookedTimeslot = await visitorService.bookTimeslot(eMailAddress, timeslotId)
    // const allTimeslotsFromBackend = await timeslotService.getAll()

    dispatch({
      type: 'UPDATE_ALL_TIMESLOTS',
      data: bookedTimeslot,
    })
  }
}

export default timeslotsReducer
