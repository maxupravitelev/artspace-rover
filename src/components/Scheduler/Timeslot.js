import React from 'react'
import { Button } from '@material-ui/core'

import timeslotService from '../../services/timeslots'

import { useSelector } from 'react-redux'

import BookingForm from './BookingForm'

import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';


const Timeslot = ({ timeslot }) => {

  let user = useSelector((state) => state.user)

  const handleDeletingTimeslot = () => {
    timeslotService.remove(timeslot._id)
  }

  if (!user.token) {
    return (
      <div>
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
          <DeleteOutlineOutlinedIcon />
        </Button>
      </div>
    )
  }


}

export default Timeslot