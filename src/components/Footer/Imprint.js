import React from 'react'
import { Typography } from '@material-ui/core'

// return header component
const Imprint = () => {
  console.log("imprint")
  return (
    <div className="footer">
      <div className="app">
      <Typography variant="subtitle2" component="">
        imprint
      </Typography>
      </div>
    </div>
  )
}

export default Imprint
