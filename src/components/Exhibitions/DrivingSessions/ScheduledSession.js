import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

// import components
import Scheduler from '../../Scheduler'

import visitorsService from '../../../services/visitors'

import { setSessionState } from '../../../reducers/sessionReducer'

// import material ui components & styles
import { Typography, Button, TextField, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../../styles'

const useStyles = makeStyles(styles)


const ScheduledSession = ({ }) => {

  const [visitorLogin, setVisitorLogin] = useState({
    eMailAddress: '',
    passphrase: ''
  })

  const classes = useStyles()

  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const checkIfSessionAvailable = await visitorsService.checkTimeslot(visitorLogin)

    if (checkIfSessionAvailable == 'session can be started') {
      dispatch(setSessionState({
        ...visitorLogin,
        state: 'session started'
      })
      )
    }
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

    <div className={classes.elevatedDiv}>
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
      <Typography variant="body1">no visit scheduled yet?</Typography>
      <Scheduler />
    </div>

  )
}

export default ScheduledSession
