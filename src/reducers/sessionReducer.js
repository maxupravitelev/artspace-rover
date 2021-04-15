const sessionReducer = (state = "init", action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'SET_STATE':
      return action.data
    default:
      return state
  }
}

export const setSessionState = (state) => {
  console.log(state)
  return dispatch => {
    dispatch({
      type: 'SET_STATE',
      data: state,
    })
  }
}

export default sessionReducer
