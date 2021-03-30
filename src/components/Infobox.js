import React from 'react'
import { Typography } from '@material-ui/core'

// return header component
const Infobox = ({ infotext }) => {
  return (
    <div className="app">
      <Typography variant="body1">
        {infotext}
      </Typography>
    </div>
  )
}

export default Infobox
