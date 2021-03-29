import timeslotService from '../services/timeslots'

const timeslotsReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'GET_ALL_TIMESLOTS':
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

export default timeslotsReducer
