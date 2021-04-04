const initState = {
  drivingDirection: 0,
  steeringDirection: 0

}

const directionsReducer = (state = initState, action) => {
    // console.log('state now: ', state)
    // console.log('action', action)
  
    switch (action.type) {
      case 'SET_DIRECTIONS':
        return action.data
      default:
        return state
    }
  }
  
  export const setDirections = (directions) => {
    console.log(directions)
    return async dispatch => {
      dispatch({
        type: 'SET_DIRECTIONS',
        data: directions
      })
    }
  }
  
  
  
  export default directionsReducer