import React, { useState } from 'react'

// import material ui
import { TextField, Button, Typography } from '@material-ui/core'

// init redux and import reducers
import { useDispatch } from 'react-redux'
import {  setUrls } from '../reducers/urlsReducer'
import {  setSocket } from '../reducers/socketReducer'


const UrlForm = ({  }) => {
  const [url, setUrl] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    let socketUrl = url + ':6475' 
    let streamUrl = url + ':6485'

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
    let newUrl = e.target.value

    setUrl(newUrl)
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
          value={url}
          name="url"
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
