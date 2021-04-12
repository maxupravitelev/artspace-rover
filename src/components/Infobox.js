import React from 'react'
import { Typography } from '@material-ui/core'

// return header component
const Infobox = ({ infotext, backgroundColor }) => {

  const style = {
    backgroundColor: backgroundColor
  }

  return (
    <div 
      className="app"
      style={style}

    >
      <Typography 
        variant="body1"
      >
        {infotext}
      </Typography>
    </div>
  )
}

export default Infobox
