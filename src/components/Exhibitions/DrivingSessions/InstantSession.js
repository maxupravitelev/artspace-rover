import React, { useState } from 'react'
import { Typography, Button, TextField } from '@material-ui/core'
import StatusLight from './StatusLight'

import { useSelector } from 'react-redux'

import componentsTexts from '../../../text/components'


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
        {/* <div style={{width: "inherit"}}>{componentsTexts.DrivingSessions.explainSpontSess}</div> */}
    </div>
  )
}

export default InstantSession