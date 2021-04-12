import React, { useState } from 'react'
import { Typography, Button } from '@material-ui/core'
import StatusLight from './StatusLight'

import { useSelector } from 'react-redux'

// import components
import Capture from '../../Cam/Capture'
import Dashboard from '../../Dashboard'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import material ui components
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'

import componentsTexts from '../../../text/components'

const useStyles = makeStyles({
  container: {
    display: 'table-cell',
    textAlign: 'initial',
  },
})

const DrivingSessions = () => {
  const [sessionState, setSessionState] = useState('not available')

  const classes = useStyles()

  let socket = useSelector((state) => state.socket)
  let jitsiUrl = useSelector((state) => state.urls.jitsiUrl)

  const checkIfSessionPossible = () => {
    socket = true
    jitsiUrl = true
    if (socket && jitsiUrl) {
      setSessionState('available')
    }
  }

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

  if (sessionState != 'available') {
    return (
      <div className="app">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid>
            <div className="app">
            <Typography variant="h5">scheduled ride</Typography>
            <Button
              // type="submit"
              onClick={checkIfSessionPossible}
              variant="outlined"
            >
              start
            </Button>
            </div>
          </Grid>
          <Grid>
          <div className="app">
          <Typography variant="h5">instant ride</Typography>
            <StatusLight />
            <Button
              // type="submit"
              onClick={checkIfSessionPossible}
              variant="outlined"
            >
              start
            </Button>

            </div>
          </Grid>
        </Grid>
        <Typography
        >{componentsTexts.DrivingSessions.explainSpontSess}</Typography>

      </div>
    )
  } else {
    // render main app based on screen size
    if (!checkScreenWidth) {
      return (
        <div>
          <Grid
            // container
            spacing={2}
            justify="center"
            alignItems="center"
          >
            <Grid
              // item
              // xs={auto}
              // sm={12}
              zeroMinWidth
            >
              <Capture />
              <Dashboard />
            </Grid>
          </Grid>
        </div>
      )
    } else {
      return (
        <div>
          <Capture />
          <Dashboard />
          {/* <Footer /> */}
        </div>
      )
    }
  }
}

export default DrivingSessions
