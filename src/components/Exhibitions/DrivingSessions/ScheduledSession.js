import React, { useState } from 'react'
import { Typography, Button, TextField } from '@material-ui/core'
import StatusLight from './StatusLight'

import { useSelector } from 'react-redux'

// import components
import Capture from '../../Cam/Capture'
import Dashboard from '../../Dashboard'

import InstantSession from './InstantSession'

import Scheduler from '../../Scheduler'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import material ui components
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'

import componentsTexts from '../../../text/components'

import visitorsService from '../../../services/visitors'

const ScheduledSession = ({ }) => {

  const [visitorLogin, setVisitorLogin] = useState({
    eMailAddress: '',
    passphrase: ''
  })


  const handleSubmit = (event) => {
    event.preventDefault()
    visitorsService.checkTimeslot(visitorLogin)
  }

  const handleInputValue = (e) => {
    let inputValue = e.target.value
    let inputName = e.target.name;

    setVisitorLogin({
      ...visitorLogin,
      [inputName]: inputValue,
    });

  }

  return (

    <div className="app">
      <Typography variant="h5">scheduled ride</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          className="input"
          name="eMailAddress"
          value={visitorLogin.eMailAddress}
          onChange={handleInputValue}
        />
        <Typography variant="body1">please enter your eMail address</Typography>
        <TextField
          type="text"
          className="input"
          name="passphrase"
          value={visitorLogin.passphrase}
          onChange={handleInputValue}
        />
        <Typography variant="body1">please enter your passphrase</Typography>
        <div>
          <Button
            type="submit"
            // onClick={checkIfScheduledSessionPossible}
            variant="outlined"
          >
            start
            </Button>
        </div>
      </form>

      <br />
      <Typography variant="body1">not scheduled yet?</Typography>
      <Scheduler />
    </div>

  )
}

export default ScheduledSession
