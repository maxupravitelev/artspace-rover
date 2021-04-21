import React from 'react'

import { Typography } from '@material-ui/core'

// init redux and import reducers
import { useSelector } from 'react-redux'

// import components
import Capture from '../../components/Cam/Capture'
import Dashboard from '../Dashboard'
import Scheduler from '../../components/Scheduler'
import Infobox from '../../components/Infobox'
import SocketCheck from './DrivingSessions/SocketCheck'

import DrivingSessions from './DrivingSessions/'

// import material ui components
import Grid from '@material-ui/core/Grid'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import texts
import pagesTexts from '../../text/pages'


// return header component
const Exhibition = () => {

  let sessionState = useSelector((state) => state.session)

  const exhibitions = useSelector((state) => state.exhibitions)

  // if (exhibitions.length < 1) return <div>loading...</div>

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

  if (sessionState != "session started") {
    return (
      <div>
        <Infobox infotext={pagesTexts.exhibition} />
        <Grid
          container
          // direction="row"
          // alignItems="center"
          // spacing={0}
          justify="space-between"
        >
          <Grid
            item
            xs
          >
            <DrivingSessions />
            <Grid
              item
            // xs
            // xs={12} 
            // sm={6}
            >
              <Infobox infotext={exhibitions[0].description} />
            </Grid>
          </Grid>
          <Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
  else {
    // render main app based on screen size
    if (!checkScreenWidth) {
      return (
        <div>
          <Grid
          // container 
          // spacing={2} 
          // justify="center" 
          // alignItems="center"
          >
            <Grid
              item
              // xs={auto} 
              // sm={12} 
              zeroMinWidth
            >
              {/* <SocketCheck /> */}
              <Capture />
              <Dashboard />
            </Grid>
          </Grid>
        </div>
      )
    } else {
      return (
        <div>
          {/* <SocketCheck /> */}
          <Capture />
          <Dashboard />
        </div>
      )
    }
  }
}

export default Exhibition
