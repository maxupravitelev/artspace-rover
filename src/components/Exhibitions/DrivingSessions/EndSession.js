import React from 'react'
import { Typography, Button } from '@material-ui/core'

import visitorService from '../../../services/visitors'

import { useSelector, useDispatch } from 'react-redux'

import { setSessionState } from '../../../reducers/sessionReducer'


const EndSession = ({  }) => {

  const dispatch = useDispatch()

  let sessionState = useSelector(state => state.session)

  const sendSessionEndToBackend = async () => {
    let checkBackendResponse = await visitorService.endSession({ eMailAddress: sessionState.eMailAddress, passphrase: sessionState.passphrase })
    console.log(checkBackendResponse)
    dispatch(setSessionState({
      state: 'session ended'
    })
    )
  }


  window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    sendSessionEndToBackend()
});

  return (
    <div 
      className="app"
    >
      <Button
        onClick={sendSessionEndToBackend}
        variant="outlined"
      >QUIT</Button>
    </div>
  )
}

export default EndSession
