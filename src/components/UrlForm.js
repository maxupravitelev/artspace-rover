import React, { useState } from 'react'

// import material ui
import { TextField, Button, Typography } from '@material-ui/core'

// init redux and import reducers
import { useDispatch } from 'react-redux'
import {  setUrls } from '../reducers/urlsReducer'
import {  setSocket } from '../reducers/socketReducer'


const UrlForm = ({  }) => {
  const [socketUrl, setSocketUrl] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    let streamUrl = "http://192.168.178.6485"

    let urls = {
      socketUrl,
      streamUrl,
      // positionUrl: socketUrl + 'move',
    }
    console.log(urls)
    dispatch(setUrls(urls))
    dispatch(setSocket(socketUrl))
  }

  const handleValue = (e) => {
    let newValue = e.target.value
    setSocketUrl(newValue)
  }

  // set up dummy values for demo mode
  const handleDemoMode = () => {
    const dummy_values = {
      socketUrl: 'dummy_url',
      configUrl: 'dummy_config',
      positionUrl: 'dummy_move',
    }

    dispatch(setUrls(dummy_values))
  }

  return (
    <div className="urlForm">
      <Typography variant="body2">Please enter the URL of your Picam</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          className="input"
          value={socketUrl}
          name="socketUrl"
          onChange={handleValue}
        />
        <p></p>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
      <Button variant="outlined" onClick={handleDemoMode}>
        Start DEMO
      </Button>
    </div>
  )
}

export default UrlForm
