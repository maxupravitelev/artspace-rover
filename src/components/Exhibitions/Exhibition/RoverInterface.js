import React from 'react'

// import components
import Capture from '../../Cam/Capture'
import Dashboard from '../../Dashboard'
import EndSession from './../DrivingSessions/EndSession'

// import material ui components
import { Grid } from '@material-ui/core'


const RoverInterface = ({ checkScreenWidth }) => {
  // render based on screen size
  if (!checkScreenWidth) {
    return (
      <div>
        <Grid
        // container
        >
          <Grid item zeroMinWidth>
            <Capture />
            <Dashboard />
            <EndSession />
          </Grid>
        </Grid>
      </div>
    )
  } else {
    return (
      <div>
        <Capture />
        <Dashboard />
        <EndSession />
      </div>
    )
  }
}

export default RoverInterface
