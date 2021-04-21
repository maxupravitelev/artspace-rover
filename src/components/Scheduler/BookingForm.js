import React, { useState } from 'react'
import { Typography, Button, TextField } from '@material-ui/core'

import visitorService from '../../services/visitors'
import timeslotService from '../../services/timeslots'

import { updateTimeslots } from '../../reducers/timeslotsReducer'

import { useSelector, useDispatch } from 'react-redux'
import Togglable from '../../components/Togglable'


const BookingForm = ({ timeslot, buttonLabel }) => {

  const [eMailAddress, seteMailAddress] = useState('')

  const dispatch = useDispatch()

  const handleBookingTimeslot = (event) => {
    event.preventDefault()
    // visitorService.bookTimeslot(eMailAddress, timeslot._id)
    dispatch(updateTimeslots(eMailAddress, timeslot._id))
  }

  return (
    <Togglable buttonLabel={buttonLabel}>
      <div className='app'>
        <form onSubmit={handleBookingTimeslot}>
          <div>
            <TextField
              id={"mailadress" + timeslot._id}
              type="email"
              required
              value={eMailAddress}
              name="eMailAddress"
              label="eMail address"
              onChange={({ target }) => {
                seteMailAddress(target.value)
              }}
            />
          </div>
          <Typography>please submit your eMail address</Typography>
          <Button
            variant="outlined"
            id={"login-address" + timeslot._id}
            type="submit"
          >
            submit
          </Button>
        </form>
      </div>

    </Togglable>
  )
}


export default BookingForm