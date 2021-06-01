import visitorsService from '../services/visitors'


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

export const setSessionState = (sessionState) => {
  return async dispatch => {

    const sessionStateInBackend = await visitorsService.setInstantSessionState(sessionState)

    const newState = {
      state: sessionStateInBackend
    }

    dispatch({
      type: 'SET_STATE',
      data: sessionStateInBackend,
    })
  }
}

export default sessionReducer
