import React from 'react'
import { useParams } from 'react-router-dom'

// init redux and import reducers
import { useSelector, useDispatch } from 'react-redux'

// import components
import Infobox from '../../Infobox'
import DrivingSessions from './../DrivingSessions'
import ExhibitionInfo from './ExhibitionInfo'
import RoverInterface from './RoverInterface'

// send notifications to Notification component
import { setNotification } from '../../../reducers/notificationReducer'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import texts
import componentsTexts from '../../../text/components'

// converter between date formats
import { germanDateToUSDate } from '../../../utils'

const Exhibition = () => {
  const dispatch = useDispatch()

  const id = useParams().id

  let sessionState = useSelector((state) => state.session)

  const exhibitions = useSelector((state) => state.exhibitions)

  const exhibition = exhibitions.find((exhibition) => exhibition._id === id)

  const openingDay = exhibition.openingDay

  if (germanDateToUSDate(openingDay) > new Date()) {
    dispatch(
      setNotification(
        `The exhibition is not opened yet (opens on: ${openingDay})`,
        3,
        'warning'
      )
    )
  }

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

  if (sessionState != 'session started') {
    return (
      <div>
        <Infobox infotext={componentsTexts.Exhibition.infotext} />
        <DrivingSessions />
        <ExhibitionInfo exhibition={exhibition} />
      </div>
    )
  } else {
    return <RoverInterface checkScreenWidth={checkScreenWidth} />
  }
}

export default Exhibition
