import React from 'react'

import { Typography } from '@material-ui/core'



// init redux and import reducers
import { useSelector } from 'react-redux'

// import components
import UrlForm from '../../components/UrlForm'
import Capture from '../../components/Cam/Capture'
import Dashboard from '../Dashboard'
import Scheduler from '../../components/Scheduler'
import Infobox from '../../components/Infobox'

import DrivingSessions from './DrivingSessions/'


// import material ui components
import Grid from '@material-ui/core/Grid'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import texts
import pagesTexts from '../../text/pages'
import exhibitionsTexts from '../../text/exhibitions'

// return header component
const Exhibition = () => {
  
  // fetch urls from store to check if setting up url is necessary
  let socket = useSelector((state) => state.socket)
  let jitsiUrl = useSelector((state) => state.urls.jitsiUrl)

  // console.log(jitsiUrl)
  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

  // return url form if jitsiUrl is not set yet
  if (!jitsiUrl) {
    return (
      <div>
        <Infobox infotext={pagesTexts.exhibition}/>
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
            <Scheduler />
            <UrlForm />
            
            <Grid 
            item 
            // xs
            // xs={12} 
            // sm={6}
          > 
            <Infobox infotext={exhibitionsTexts.demoExhibition.description} />
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

export default Exhibition
