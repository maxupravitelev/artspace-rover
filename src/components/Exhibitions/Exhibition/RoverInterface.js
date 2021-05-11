import React from 'react'

// import components
import Stream from '../../Stream'
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
            <Stream />
            <Dashboard />
            <EndSession />
          </Grid>
        </Grid>
      </div>
    )
  } else {
    return (
      <div>
        <Stream />
        <Dashboard />
        <EndSession />
      </div>
    )
  }
}

export default RoverInterface
