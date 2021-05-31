import React from 'react'
import { useHistory } from 'react-router-dom'
import visitorService from '../../../services/visitors'

import { useSelector, useDispatch } from 'react-redux'

import { setSessionState } from '../../../reducers/sessionReducer'

import Timer from './Timer'

// import material ui components & styles
import { Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../../styles'

const useStyles = makeStyles(styles)


const EndSession = ({ }) => {

  const dispatch = useDispatch()

  const classes = useStyles()

  const history = useHistory()

  let sessionState = useSelector(state => state.session)

  const handleEndingSession = () => {
    dispatch(setSessionState('session ended'))
    history.push('/')
    sendSessionEndToBackend()
  }


  const sendSessionEndToBackend = async () => {
    let checkBackendResponse = await visitorService.endSession({ eMailAddress: sessionState.eMailAddress, passphrase: sessionState.passphrase })
    console.log(checkBackendResponse)
  }


  window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    sendSessionEndToBackend()
  })

  return (
    <div className={classes.elevatedDiv}>
      <Timer />
      <Button
        onClick={handleEndingSession}
        variant="outlined"
      >QUIT</Button>
    </div>
  )
}

export default EndSession
