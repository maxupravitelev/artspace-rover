const urlsReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'SET_URLS':
      return action.data
    default:
      return state
  }
}

export const setUrls = (urls) => {
  console.log(urls)
  return dispatch => {
    dispatch({
      type: 'SET_URLS',
      data: urls
    })
  }
}



export default urlsReducer