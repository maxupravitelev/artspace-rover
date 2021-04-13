import React, { useState } from 'react'
import { Typography, Button, TextField } from '@material-ui/core'
import StatusLight from './StatusLight'

import { useSelector } from 'react-redux'

// import components
import Capture from '../../Cam/Capture'
import Dashboard from '../../Dashboard'

import InstantSession from './InstantSession'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import material ui components
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'

import componentsTexts from '../../../text/components'

const ScheduledSession = ({ checkIfScheduledSessionPossible, handleInputValue, passphrase }) => {

    return (
        
            <div className="app">
              <Typography variant="h5">scheduled ride</Typography>
              <TextField
                type="text"
                className="input"
                value={passphrase}
                onChange={handleInputValue}
              />
              <Typography variant="body1">please enter your passphrase</Typography>

              <div>
                <Button
                  // type="submit"
                  onClick={checkIfScheduledSessionPossible}
                  variant="outlined"
                >
                  start
            </Button>
              </div>
              </div>
           
      )
}

export default ScheduledSession
