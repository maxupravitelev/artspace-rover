import React from 'react'
import { Typography } from '@material-ui/core'

import Timeslot from './Timeslot'

// init redux and import reducers
import { useDispatch } from 'react-redux'
import {  getAllTimeslots } from '../../reducers/timeslotsReducer'


const Scheduler = () => {

  const dispatch = useDispatch()

  const handleGettingTimeslots = () => {
    dispatch(getAllTimeslots())
  }

  return (
    <div className="app">
      <Typography variant="h5" component="h2">
        [ schedule visit ]
      </Typography>
      <button onClick={handleGettingTimeslots}>get slots</button>
    </div>
  )
}

export default Scheduler