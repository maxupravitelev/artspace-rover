import React, { useState } from 'react'
import { Typography, Button, TextField } from '@material-ui/core'
import StatusLight from './StatusLight'

import { useSelector, useDispatch } from 'react-redux'

// import components
import Capture from '../../Cam/Capture'
import Dashboard from '../../Dashboard'

import InstantSession from './InstantSession'
import ScheduledSession from './ScheduledSession'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import material ui components
import Grid from '@material-ui/core/Grid'

import componentsTexts from '../../../text/components'

import { setSessionState } from '../../../reducers/sessionReducer'

import { setSocket } from '../../../reducers/socketReducer'

const DrivingSessions = () => {

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

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

    return (
      <div 
      className="app"
      >
        <Typography
          variant="h3"
          style={{ marginBottom: "1em", backgroundColor: "#0B4F6C", color: "#FBFBFF" }}
        >start session</Typography>
        <Grid
          container
          direction="row"
          justify="space-around"
          // alignItems="stretch"
        >
          <Grid item xs={12} sm={6}>
            <ScheduledSession />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InstantSession checkIfInstantSessionPossible={checkIfInstantSessionPossible} />
          </Grid>
        </Grid>
        <Typography
          style={{ marginTop: "2em" }}
        >{componentsTexts.DrivingSessions.explainInstantSession}</Typography>
      </div>
    )
}

export default DrivingSessions
