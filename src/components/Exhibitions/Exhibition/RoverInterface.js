import React from 'react'

// import components
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
            <Dashboard />
            <EndSession />
          </Grid>
        </Grid>
      </div>
    )
  } else {
    return (
      <div>
        <Dashboard />
        <EndSession />
      </div>
    )
  }
}

export default RoverInterface
