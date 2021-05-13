import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

// import components
import Notification from '../../Notification'


import InstantSession from './InstantSession'
import ScheduledSession from './ScheduledSession'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

import componentsTexts from '../../../text/components'

import { setSessionState } from '../../../reducers/sessionReducer'

import socketService from '../../../services/socket'

// import material ui components & styles
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../../styles'

const useStyles = makeStyles(styles)


const DrivingSessions = () => {

  const dispatch = useDispatch()

  const classes = useStyles()


  let exhibitions = useSelector((state) => state.exhibitions)

  // let roverUrl = useSelector((state) => state.roverUrl)
  let roverUrl = exhibitions[0].rovers[0].roverUrl
  // let socket = useSelector((state) => state.socket)

  // fetch set streaming mode from exhibition profile (populated with a rover profile)
  // let user = useSelector((state) => state.user)
  let streamingModeInProfile = exhibitions[0].rovers[0].streamingMode

  const checkIfInstantSessionPossible = () => {
    dispatch(setSessionState('session started'))

    if (streamingModeInProfile != 'demo') {
      socketService.initSocket(roverUrl)
    }
  }

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

  return (
    <div className={classes.elevatedDiv}>
      <Typography variant="h3" className={classes.sectionHeadline}>
        start session
        </Typography>
      <Notification />
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
