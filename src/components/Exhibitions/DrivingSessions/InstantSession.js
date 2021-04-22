import React, { useState } from 'react'
import { Typography, Button, TextField } from '@material-ui/core'
import StatusLight from './StatusLight'


const InstantSession = ({ checkIfInstantSessionPossible }) => {
  return (
    <div className="app">
      <Typography variant="h5">instant ride</Typography>
      <StatusLight />
      <Button
        // type="submit"
        onClick={checkIfInstantSessionPossible}
        variant="outlined"
      >
        start
            </Button>
    </div>
  )
}

export default InstantSession
