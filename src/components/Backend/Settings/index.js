import React from 'react'
import { Typography } from '@material-ui/core'

import UrlForm from './UrlForm'
import StreamingMode from './StreamingMode'


const Settings = () => {

  return (
    <div 
      // className="app"
    >
      <UrlForm />
      <StreamingMode />
    </div>
  )
}

export default Settings
