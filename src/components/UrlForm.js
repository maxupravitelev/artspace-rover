import React, { useState } from 'react'

// import material ui
import { TextField, Button, Typography } from '@material-ui/core'

// init redux and import reducers
import { useDispatch } from 'react-redux'
import {  setUrls } from '../reducers/urlsReducer'
import {  setSocket } from '../reducers/socketReducer'


const UrlForm = ({  }) => {
  const [urls, setUrlsInComponent] = useState({
    jitsiUrl: "",
    socketUrl: ""
  })

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    urls.socketUrl += ':6475' 
    
    dispatch(setUrls(urls.jitsiUrl))
    dispatch(setSocket(urls.socketUrl))
  }

  const handleValue = (e) => {
    let name = e.target.name
    let newValue = e.target.value

    setUrlsInComponent({
      ...urls,
      [name]: newValue,
    })
  }

  return (
    <div className="urlForm">
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="jitsiUrl"
          className="input"
          value={urls.jitsiUrl}
          onChange={handleValue}
        />
              <Typography variant="body2">Please enter the URL of your raspberry</Typography>


                <TextField
          type="text"
          name="socketUrl"
          className="input"
          value={urls.socketUrl}
          onChange={handleValue}
        />
      <Typography variant="body2">Please enter the URL of your Jitsi Session</Typography>
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
