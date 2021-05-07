import React from 'react'
import UrlForm from './UrlForm'
import StreamingMode from './StreamingMode'
import Timeslots from './Timeslots'

// import material ui components & styles
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../../styles'

const useStyles = makeStyles(styles)

const Settings = () => {

  const classes = useStyles()


  return (
    <div>
      <UrlForm />
      <StreamingMode />hz
      <Timeslots />
    </div>
  )
}

export default Settings
