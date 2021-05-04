import React from 'react'
import { useParams } from 'react-router-dom'

// init redux and import reducers
import { useSelector } from 'react-redux'

// import components
import Capture from '../../components/Cam/Capture'
import Dashboard from '../Dashboard'
import Infobox from '../../components/Infobox'
import EndSession from '../../components/Exhibitions/DrivingSessions/EndSession'
import DrivingSessions from './DrivingSessions/'

// import material ui components
import Grid from '@material-ui/core/Grid'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import texts
import componentsTexts from '../../text/components'


const Exhibition = () => {

  const id = useParams().id

  let sessionState = useSelector((state) => state.session)

  const exhibitions = useSelector((state) => state.exhibitions)

  const exhibition = exhibitions.find((exhibition) => exhibition._id === id)

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

  if (sessionState != "session started") {
    return (
      <div>
        <Infobox infotext={componentsTexts.Exhibition.infotext} />
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
              <Infobox infotext={exhibition.description} />
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
}

export default Exhibition
