import React from 'react'
import { Typography } from '@material-ui/core'

import UrlForm from './UrlForm'
import StreamingMode from './StreamingMode'

// return header component
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
