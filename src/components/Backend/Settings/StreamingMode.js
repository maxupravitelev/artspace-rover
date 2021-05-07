import React, { useState, useEffect } from 'react'
import { Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core'

import Notification from '../../Notification'
import { setNotification } from '../../../reducers/notificationReducer'

import { useDispatch, useSelector } from 'react-redux'

import { updateUser } from '../../../reducers/userReducer'


const StreamingMode = () => {
  const [value, setValue] = useState('')
  const [jitsiChecked, setJitsiChecked] = useState(false)
  const [mjpgChecked, setMjpgChecked] = useState(false)

  const dispatch = useDispatch()

  let user = useSelector((state) => state.user)

  let streamingModeInProfile = user.rovers[0].streamingMode


  const checkSetStreamingMode = (setMode) => {
    if (setMode == 'jitsi') {
      setJitsiChecked(true)
      setMjpgChecked(false)
    } else {
      setJitsiChecked(false)
      setMjpgChecked(true)
    }
  }

  useEffect(() => {
    checkSetStreamingMode(streamingModeInProfile)
  }, [])


  const handleRadioChange = (event) => {
    checkSetStreamingMode(event.target.value)
    setValue(event.target.value)
    //   setHelperText(' ');
    // setError(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (value === 'jitsi') {
      user.rovers[0].streamingMode = value
      dispatch(updateUser(user))
      dispatch(setNotification(`Jitsi mode set`, 3, 'success'))
      setError(false)
    } else if (value === 'mjpg') {
      user.rovers[0].streamingMode = value
      dispatch(updateUser(user))
      dispatch(setNotification(`MJPG mode set`, 3, 'success'))
      setError(false)
    } else {
      dispatch(setNotification(`please set a streaming mode`, 3, 'error'))
      setError(true)
    }
  }

  return (
    <div className="app">
      <Notification />
      <Typography
        variant="h3"
        style={{ marginBottom: "1em", backgroundColor: "#0B4F6C", color: "#FBFBFF" }}
      >streaming mode</Typography>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" 
          // error={error}
          >
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
                label="MJPG Stream"
              />
            </RadioGroup>
            <Button type="submit" variant="outlined">
              Submit
          </Button>
          </FormControl>
        </form>
      </div>
    </div>
  )
}

export default StreamingMode
