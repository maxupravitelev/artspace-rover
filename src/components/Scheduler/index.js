import React from 'react'
import { Typography } from '@material-ui/core'

import Timeslot from './Timeslot'


const Scheduler = () => {

  const handleGettingTimeslots = () => {
    
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