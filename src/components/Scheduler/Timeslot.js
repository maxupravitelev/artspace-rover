import React from 'react'
import { Typography, Button } from '@material-ui/core'

import visitorService from '../../services/visitors'

const Timeslot = ({ timeslot }) => {
console.log(timeslot)

  const handleClick = () => {
    const eMailAddress = "test@test.net"
    visitorService.bookTimeslot(eMailAddress, timeslot._id)
  }


  return (
    <div className="app">
      <Button onClick={handleClick}>
        {timeslot.startTime}
      </Button>
    </div>
  )
}

export default Timeslot