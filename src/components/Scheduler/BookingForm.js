import React, { useState } from 'react'
import { Typography, Button, TextField, Checkbox, FormControlLabel } from '@material-ui/core'

import { updateTimeslots } from '../../reducers/timeslotsReducer'
import { bookTimeslot } from '../../reducers/visitorReducer'

import { useSelector, useDispatch } from 'react-redux'
import Togglable from '../../components/Togglable'


const BookingForm = ({ timeslot, buttonLabel }) => {

  const [eMailAddress, seteMailAddress] = useState('')

  const dispatch = useDispatch()

  const visitor = useSelector(state => state.visitor)

  const handleBookingTimeslot = async (event) => {
    event.preventDefault()

    dispatch(bookTimeslot(eMailAddress, timeslot._id))

    dispatch(updateTimeslots(eMailAddress, timeslot._id))
  }

  if (!visitor.passphrase) {

    return (
      <Togglable buttonLabel={buttonLabel}>
        <div
          className='app'
        >
          <form onSubmit={handleBookingTimeslot}>
          
            <TextField
              id={"mailadress" + timeslot._id}
              type="email"
              required
              value={eMailAddress}
              name="eMailAddress"
              label="please submit your eMail address"
              onChange={({ target }) => {
                seteMailAddress(target.value)
              }}
            />
            <div>
              <Checkbox required/>
            </div>
            <Typography 
                variant="caption"
                display="block"
              >I hereby grant my consent to having my email adress provided on this form stored electronically, and to having it processed for timeslot registration purposes.</Typography>
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
  } else {
    if (visitor.timeslot._id == timeslot._id) {
      return (
        <div
          className='app'
        >
          <Typography variant='h5'>timeslot booked!</Typography>
          <br />
          <Typography><b>eMail:</b> {visitor.eMailAddress}</Typography>
          <Typography><b>passphrase:</b> {visitor.passphrase}</Typography>
          <Typography><b>timeslot:</b> {visitor.timeslot.startTime}-{visitor.timeslot.endTime}</Typography>
        </div>
      )
    } else {
      return <div></div>
    }
  }


}


export default BookingForm