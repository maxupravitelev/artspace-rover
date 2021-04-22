import timeslotService from '../services/timeslots'
import visitorService from '../services/visitors'


const visitorReducer = (state = {}, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'BOOK_TIMESLOT':
      return action.data
    default:
      return state
  }
}

export const bookTimeslot = (eMailAddress, timeslotId) => {

  return async (dispatch) => {
      
    const bookedTimeslot = await visitorService.bookTimeslot(eMailAddress, timeslotId)
  
    dispatch({
      type: 'BOOK_TIMESLOT',
      data: bookedTimeslot,
    })
  }
}

export const updateTimeslots = (eMailAddress, timeslotId) => {

  return async (dispatch) => {
      
    const allTimeslotsFromBackend = await timeslotService.getAll()

    dispatch({
      type: 'UPDATE_ALL_TIMESLOTS',
      data: allTimeslotsFromBackend,
    })
  }
}

export default visitorReducer
