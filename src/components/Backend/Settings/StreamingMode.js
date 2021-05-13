// import react 
import React, { useState, useEffect } from 'react'

// init sending notifications
import Notification from '../../Notification'
import { setNotification } from '../../../reducers/notificationReducer'

// init saving selection option to profile
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../../reducers/userReducer'

// import component text elements
import componentsTexts from '../../../text/components'

// import material ui components & styles
import { Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../../styles'

const useStyles = makeStyles(styles)


const StreamingMode = () => {
  const [value, setValue] = useState('')
  const [jitsiChecked, setJitsiChecked] = useState(false)
  const [mjpgChecked, setMjpgChecked] = useState(false)
  const [demoModeChecked, setDemoModeChecked] = useState(false)

  const classes = useStyles()

  const dispatch = useDispatch()

  // fetch set streaming mode from exhibition profile (populated with a rover profile)
  let user = useSelector((state) => state.user)
  let streamingModeInProfile = user.rovers[0].streamingMode

  const checkSetStreamingMode = (setMode) => {
    if (setMode == 'jitsi') {
      setJitsiChecked(true)
      setMjpgChecked(false)
      setDemoModeChecked(false)
    } else if (setMode == 'mjpg') {
      setJitsiChecked(false)
      setMjpgChecked(true)
      setDemoModeChecked(false)
    } else {
      setJitsiChecked(false)
      setMjpgChecked(false)
      setDemoModeChecked(true)
    }
  }

  // check set streaming mode once after component mounted
  useEffect(() => {
    checkSetStreamingMode(streamingModeInProfile)
  }, [])


  const handleRadioChange = (event) => {
    checkSetStreamingMode(event.target.value)
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (value === '') {
      dispatch(setNotification(`Please set a streaming mode`, 3, 'error'))
    } else {
      user.rovers[0].streamingMode = value
      dispatch(updateUser(user))
      if (value === 'jitsi') {
        dispatch(setNotification(`Jitsi mode set`, 3, 'success'))
      } else if (value === 'mjpg') {
        dispatch(setNotification(`MJPG mode set`, 3, 'success'))
      } else {
        dispatch(setNotification(`Demo mode set`, 3, 'success'))
      }
    }


  }

  return (
    <div className={classes.elevatedDiv}>
      <Notification />
      <Typography variant="h3" className={classes.sectionHeadline}>
        {componentsTexts.Backend.StreamingMode.headline}
      </Typography>
      <div className={classes.elevatedDiv}>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="streamingMode"
              name="streamingMode"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                checked={jitsiChecked}
                value="jitsi"
                control={<Radio />}
                label="jitsi session"
              />
              <FormControlLabel
                checked={mjpgChecked}
                value="mjpg"
                control={<Radio />}
                label="MJPG stream"
              />
              <FormControlLabel
                checked={demoModeChecked}
                value="demo"
                control={<Radio />}
                label="Demo mode"
              />
            </RadioGroup>
            <Button type="submit" variant="outlined">
              {componentsTexts.general.submitButtonLabel}
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  )
}

export default StreamingMode
