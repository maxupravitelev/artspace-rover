import React, { useState } from 'react'

// import material ui
import { TextField, Button, Typography } from '@material-ui/core'

// init redux and import reducers
import { useDispatch, useSelector } from 'react-redux'
import { setUrls } from '../reducers/urlsReducer'
import { setSocket } from '../reducers/socketReducer'


const UrlForm = ({}) => {
  const [urls, setUrlsInComponent] = useState({
    jitsiUrl: '',
    baseUrl: '',
  })

  let user = useSelector((state) => state.user)

  if (!user) return <div></div>

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(setUrls(urls))

    let socketUrl = urls.baseUrl += ':6475'

    dispatch(setSocket(socketUrl))
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
      <Typography>
        Save necessary urls to connect with your rover
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="jitsiUrl"
          className="input"
          value={urls.jitsiUrl}
          onChange={handleValue}
        />
        <Typography variant="body2">
          Please enter the URL of your Jitsi Session
        </Typography>

        <TextField
          type="text"
          name="baseUrl"
          className="input"
          value={urls.baseUrl}
          onChange={handleValue}
        />
        <Typography variant="body2">
          Please enter the URL of your raspberry
        </Typography>

        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
      <p />
      <Typography variant="body2">
        Enter "demo" for starting demo mode
      </Typography>
    </div>
  )
}

export default UrlForm
