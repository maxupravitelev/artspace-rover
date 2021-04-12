import React from 'react'
import { Typography } from '@material-ui/core'

const StatusLight = ({}) => {

  const styleCircle = {
    backgroundColor: "green",
    borderRadius: "50%",
    height: "1em",
    width: "1em",
    display: "inline-block",
    margin: "auto",
    marginRight: 5

  }


  return (
    <div style={{display: 'flex', marginTop: 30, marginBottom: 10}}>
      <div style={styleCircle}></div>
      <Typography>rover available</Typography>
    </div>
  )
}

export default StatusLight