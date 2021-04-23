import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'

import visitorService from '../../../services/visitors'


const StatusLight = ({ }) => {

  const [backgroundColor, setBackgroundColor] = useState("green") 
  const [statusDescription, setStatusDescription] = useState("rover available")

  useEffect(() => {
    const checkState = async () => {
      let sessionState = await visitorService.getSessionState()

      if (sessionState == "session ended") {
        setBackgroundColor("green")
        setStatusDescription("rover available")
      } else if (sessionState == "session started") {

        setBackgroundColor("red")
        setStatusDescription("rover not available")
      }
    }
    checkState()
  }, [])



    const styleCircle = {
      backgroundColor: backgroundColor,
      borderRadius: "50%",
      height: "2em",
      width: "2em",
      display: "inline-block",
      margin: "auto",
      marginRight: 5

    }

  return (
    <div style={{ 
      // display: 'flex', 
      marginTop: 30, 
      marginBottom: 10,
      alighItems: "center"
      }}>
      <div style={styleCircle}></div>
      <Typography>{statusDescription}</Typography>
    </div>
  )
}

export default StatusLight