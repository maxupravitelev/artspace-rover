const initState = {
  jitsiUrl: "",
  baseUrl: ""
}

const urlsReducer = (state = {}, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'SET_URLS':
      return {...state, jitsiUrl: action.data}
    default:
      return state
  }
}

export const setUrls = (urls) => {
  return async dispatch => {
    dispatch({
      type: 'SET_URLS',
      data: urls
    })
  }
}



export default urlsReducer