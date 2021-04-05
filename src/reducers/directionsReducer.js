const initState = {
  drivingDirection: 0,
  steeringDirection: 0,
}

const directionsReducer = (state = initState, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'SET_DRIVING_DIRECTION':
      return {...state, drivingDirection: action.data}
    case 'SET_STEERING_DIRECTION':
      return {...state, steeringDirection: action.data}
    default:
      return state
  }
}

export const setDrivingDirections = (directions) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_DRIVING_DIRECTION',
      data: directions,
    })
  }
}

export const setSteeringDirections = (directions) => {
  // console.log(directions)
  return async (dispatch) => {
    dispatch({
      type: 'SET_STEERING_DIRECTION',
      data: directions,
    })
  }
}

export default directionsReducer
