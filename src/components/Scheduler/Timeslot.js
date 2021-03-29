import React from 'react'
import { Typography, Button } from '@material-ui/core'


const Timeslot = ({ timeslot }) => {
  return (
    <div className="app">
      <Button >
        {timeslot.startTime}
      </Button>
    </div>
  )
}

export default Timeslot