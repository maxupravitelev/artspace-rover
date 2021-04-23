import React from 'react'
import { Button } from '@material-ui/core'

import timeslotService from '../../services/timeslots'

import { useSelector } from 'react-redux'

import BookingForm from './BookingForm'


const Timeslot = ({ timeslot }) => {

  let user = useSelector((state) => state.user)

  const handleDeletingTimeslot = () => {
    timeslotService.remove(timeslot._id)
  }

  if (!user.token) {
    return (
      <div
      // className="app"
      >
        <BookingForm buttonLabel={timeslot.startTime} timeslot={timeslot}/>
      </div>
    )
  } else {
    return (
      <div
        style={{marginBottom:"1em"}}
      >
        <BookingForm buttonLabel={timeslot.startTime} timeslot={timeslot}/>
        <Button
          onClick={handleDeletingTimeslot} variant='outlined' color='secondary'
        >
          DELETE
        </Button>
      </div>
    )
  }


}

export default Timeslot