import React, { useState } from 'react'
import { Typography, Button, TextField } from '@material-ui/core'
import StatusLight from './StatusLight'

import { useSelector, useDispatch } from 'react-redux'

// import components
import Capture from '../../Cam/Capture'
import Dashboard from '../../Dashboard'

import InstantSession from './InstantSession'
import ScheduledSession from './ScheduledSession'
import Timer from './Timer'
import SocketCheck from './SocketCheck'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import material ui components
import Grid from '@material-ui/core/Grid'

import componentsTexts from '../../../text/components'

import { setSessionState } from '../../../reducers/sessionReducer'

import { setSocket } from '../../../reducers/socketReducer'

const DrivingSessions = () => {
  const [passphrase, setPassphrase] = useState("")


  const dispatch = useDispatch()

  let exhibitions = useSelector((state) => state.exhibitions)

  // let roverUrl = useSelector((state) => state.roverUrl)
  let roverUrl = exhibitions[0].rovers[0].roverUrl
  let jitsiUrl = useSelector((state) => state.urls.jitsiUrl)
  let socket = useSelector((state) => state.socket)

  const checkIfInstantSessionPossible = () => {
    // if (roverUrl && (socket.length != 0)) {
      dispatch(setSessionState('session started'))
      dispatch(setSocket(roverUrl))
    // }
  }

  const checkIfScheduledSessionPossible = () => {
    roverUrl = true
    jitsiUrl = true
    if (roverUrl && (socket.length != 0)) {
      dispatch(setSessionState('session started'))
    }
  }

  const handleInputValue = (e) => {
    let inputValue = e.target.value

    setPassphrase(inputValue)
  }

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

    return (
      <div className="app">
        <Typography
          variant="h3"
          style={{ marginBottom: "1em", backgroundColor: "#0B4F6C", color: "#FBFBFF" }}
        >start session</Typography>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
        >
          <Grid>
            <ScheduledSession checkIfScheduledSessionPossible={checkIfScheduledSessionPossible} handleInputValue={handleInputValue} passphrase={passphrase} />
          </Grid>
          <Grid>
            <InstantSession checkIfInstantSessionPossible={checkIfInstantSessionPossible} />
          </Grid>
        </Grid>
        <Typography
          style={{ marginTop: "2em" }}
        >{componentsTexts.DrivingSessions.explainInstantSession}</Typography>
        <Timer />
      </div>
    )
}

export default DrivingSessions
