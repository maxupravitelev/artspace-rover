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
      <div 
        // className="app"
      >
        <Button 
          onClick={handleGettingTimeslots}
          variant="outlined"
          >
            schedule visit</Button>
      </div>
    ) 
  } else {
    return (
      <div className="app">
        {timeslots.map(timeslot => {
          if (timeslot.available) return (
          <Timeslot key={timeslot._id} timeslot={timeslot}/>
        )}
        )}
      </div>
    ) 
    }
  


}

export default Scheduler