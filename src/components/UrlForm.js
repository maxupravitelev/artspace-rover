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
    // let streamUrl = url + ':6495/stream'
    let streamUrl = 'http://192.168.178.50:8080/stream/video.mjpeg'

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

  return (
    <div className="urlForm">
      <Typography variant="body2">Please enter the URL of your raspberry</Typography>
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
      <p />
      <Typography variant="body2">Enter "demo" for starting demo mode</Typography>
    </div>
  )
}

export default UrlForm
