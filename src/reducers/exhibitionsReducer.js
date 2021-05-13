import exhibitionsService from '../services/exhibitions'

const exhibitionsReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'GET_ALL_EXHIBITION':
      return action.data
    case 'UPDATE':
      return action.data
    default:
      return state
  }
}

export const getAllExhibitions = () => {
  return async (dispatch) => {
    const allExhibitionsFromBackend = await exhibitionsService.getAll()

    dispatch({
      type: 'GET_ALL_EXHIBITION',
      data: allExhibitionsFromBackend,
    })
  }
}

export const updateExhibitions = (exhibitions) => {

  return async dispatch => {
    dispatch({
      type: 'UPDATE',
      data: exhibitions
    })
  }
}

export default exhibitionsReducer
