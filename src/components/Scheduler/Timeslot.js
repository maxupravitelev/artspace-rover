import React from 'react'
import { Typography, Button } from '@material-ui/core'

import visitorService from '../../services/visitors'
import timeslotService from '../../services/timeslots'

import { useSelector } from 'react-redux'


const Timeslot = ({ timeslot }) => {

  let user = useSelector((state) => state.user)



  const handleBookingTimeslot = () => {
    const eMailAddress = "test@test.net"
    visitorService.bookTimeslot(eMailAddress, timeslot._id)
  }

  const handleDeletingTimeslot = () => {
    timeslotService.remove(timeslot._id)
  }

  if (!user.token) {
    return (
      <div
      // className="app"
      >
        <Button onClick={handleBookingTimeslot} variant='outlined'>
          {timeslot.startTime}
        </Button>
      </div>
    )
  } else {
    return (
      <div
      // className="app"
      >
        <Button onClick={handleBookingTimeslot} variant='outlined'>
          {timeslot.startTime}
        </Button>
        <Button
          onClick={handleDeletingTimeslot} variant='outlined' color='secondary'
        >
          X
    </Button>
      </div>
    )
  }


}

export default Timeslot