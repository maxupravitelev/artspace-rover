import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'

import visitorService from '../../../services/visitors'


const StatusLight = ({ }) => {

  const [backgroundColor, setBackgroundColor] = useState("green") 

  useEffect(() => {
    const checkState = async () => {
      let sessionState = await visitorService.getSessionState()

      if (sessionState == "session ended") {
        setBackgroundColor("green")
      } else if (sessionState == "session started") {

        setBackgroundColor("red")
      }
    }
    checkState()
  }, [])



    const styleCircle = {
      backgroundColor: backgroundColor,
      borderRadius: "50%",
      height: "1em",
      width: "1em",
      display: "inline-block",
      margin: "auto",
      marginRight: 5

    }


  return (
    <div style={{ display: 'flex', marginTop: 30, marginBottom: 10 }}>
      <div style={styleCircle}></div>
      <Typography>rover available</Typography>
    </div>
  )
}

export default StatusLight