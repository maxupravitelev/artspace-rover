import React from 'react'
import { useParams } from 'react-router-dom'

// init redux and import reducers
import { useSelector, useDispatch } from 'react-redux'

// import components
import Capture from '../../components/Cam/Capture'
import Dashboard from '../Dashboard'
import Infobox from '../../components/Infobox'
import EndSession from '../../components/Exhibitions/DrivingSessions/EndSession'
import DrivingSessions from './DrivingSessions/'
import Notification from '../Notification'

// send notifications to Notification component
import { setNotification } from '../../reducers/notificationReducer'

// import material ui components
import Grid from '@material-ui/core/Grid'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import texts
import componentsTexts from '../../text/components'

// converter between date formats
import { germanDateToUSDate } from '../../utils'


const Exhibition = () => {

  const dispatch = useDispatch()

  const id = useParams().id

  let sessionState = useSelector((state) => state.session)

  const exhibitions = useSelector((state) => state.exhibitions)

  const exhibition = exhibitions.find((exhibition) => exhibition._id === id)

  const openingDay = exhibition.openingDay

  if (germanDateToUSDate(openingDay) > new Date()) {
    dispatch(setNotification(`The exhibition is not opened yet (opens on: ${openingDay})`, 3, 'warning'))
  }

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

  if (sessionState != "session started") {
    return (
      <div>
        <Notification />
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
          >
            <Grid
              item
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
