import React from 'react'
import { Typography, Button } from '@material-ui/core'

import Timeslot from './Timeslot'

// init redux and import reducers
import { useDispatch, useSelector } from 'react-redux'
import {  getAllTimeslots } from '../../reducers/timeslotsReducer'


const Scheduler = () => {

  let timeslots = useSelector((state) => state.timeslots)

  const dispatch = useDispatch()

  const handleGettingTimeslots = () => {
    dispatch(getAllTimeslots())
  }

  if (!timeslots[0]) {
    return (
      <div className="app">
        <Typography variant="h5" component="h2">
          [ schedule visit ]
        </Typography>
        <Button onClick={handleGettingTimeslots}>get slots</Button>
      </div>
    ) 
  } else {
    return (
      <div className="app">
        <Typography variant="h5" component="h2">
          [ schedule visit ]
        </Typography>
        {timeslots.map(timeslot => (
          <Timeslot key={timeslot._id} timeslot={timeslot}/>
        ))}
      </div>
    ) 
    }
  


}

export default Scheduler