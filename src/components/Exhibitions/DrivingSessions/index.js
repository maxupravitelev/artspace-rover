import React, { useState } from 'react'
import { Typography, Button } from '@material-ui/core'
import StatusLight from './StatusLight'

import { useSelector } from 'react-redux'

// import components
import UrlForm from '../../UrlForm'
import Capture from '../../Cam/Capture'
import Dashboard from '../../Dashboard'
import Scheduler from '../../Scheduler'


// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import material ui components
import Grid from '@material-ui/core/Grid'


const DrivingSessions = () => {

  const [sessionState, setSessionState] = useState("not available")

  let socket = useSelector((state) => state.socket)
  let jitsiUrl = useSelector((state) => state.urls.jitsiUrl)


  const checkIfSessionPossible = () => {
    if ((socket) && jitsiUrl) {
      setSessionState("available")
    }
  }

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

  if (sessionState != "available") {
    return (
    <div className="app">
      <StatusLight />

      <Typography variant="body1">
        start session
      </Typography>
      <Button type="submit" onClick={checkIfSessionPossible} variant="outlined">
      start
        </Button>
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
