const notificationReducer = (state = '', action) => {
  // console.log(state)
  // console.log(action)

  switch (action.type) {
  case 'NOTIFICATION':
    return action.notification

  default:
    return state
  }
}

let timeout

export const setNotification = (notification, duration, severity) => {
  return dispatch => {


    // possible severity levels in material ui: 'error', 'info', 'success', 'warning'
    let notificationObj = {
      notification,
      severity
    }

    dispatch({
      type: 'NOTIFICATION',
      notification: notificationObj
    })

    const clearNotification = () => {
      dispatch({
        type: 'NOTIFICATION',
        notification: null
      })
    }
    //clear global timeout var from last func call
    clearTimeout(timeout)
    timeout = setTimeout(clearNotification, duration * 1000)

  }
}

export default notificationReducer

