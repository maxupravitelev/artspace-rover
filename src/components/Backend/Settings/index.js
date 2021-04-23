import React from 'react'
import { Typography } from '@material-ui/core'

import UrlForm from './UrlForm'
import StreamingMode from './StreamingMode'
import Timeslots from './Timeslots'


const Settings = () => {

  return (
    <div 
      // className="app"
    >
      <UrlForm />
      <StreamingMode />
      <Timeslots />
    </div>
  )
}

export default Settings
