import React, { useState } from 'react'

// import material ui
import { TextField, Button, Typography, Grid } from '@material-ui/core'

// init redux and import reducers
import { useDispatch, useSelector } from 'react-redux'
import { setJitsiUrl, setRoverUrl, setMjpgUrl } from '../../../reducers/urlsReducer'

import { updateUser } from '../../../reducers/userReducer'

import urlsService from '../../../services/urls'


const UrlForm = ({ }) => {
  const [roverUrl, setRoverUrlInComp] = useState('')
  const [jitsiUrl, setJitsiUrlInComp] = useState('')
  const [mjpgUrl, setMjpgUrlInComp] = useState('')

  let user = useSelector((state) => state.user)

  if (!user) return <div></div>

  const dispatch = useDispatch()

  const handleSubmitRoverUrl = async (e) => {
    e.preventDefault()

    dispatch(setRoverUrl(roverUrl))
    setRoverUrlInComp('')
    user.rovers[0].roverUrl = roverUrl
    dispatch(updateUser(user))
    urlsService.updateRoverUrl(roverUrl, user.rovers[0]._id)

  }

  const handleSubmitJitsiUrl = async (e) => {
    e.preventDefault()

    dispatch(setJitsiUrl(jitsiUrl))
    setJitsiUrlInComp('')
    user.rovers[0].jitsiUrl = jitsiUrl
    dispatch(updateUser(user))
    urlsService.updateJitsiUrl(jitsiUrl, user.rovers[0]._id)

  }

  const handleSubmitMjpgUrl = async (e) => {
    e.preventDefault()

    dispatch(setMjpgUrl(mjpgUrl))
    setMjpgUrlInComp('')
    user.rovers[0].mjpgUrl = mjpgUrl
    dispatch(updateUser(user))
    urlsService.updateMjpgUrl(mjpgUrl, user.rovers[0]._id)

  }

  return (
    <div className="urlForm">
      <Typography
        variant="h3"
        style={{ marginBottom: "1em", backgroundColor: "#0B4F6C", color: "#FBFBFF" }}
      >rover connection</Typography>
      <Grid
        container
        // direction="row"
        // alignItems="left"
        // spacing={0}
        justify="space-between"
      >
        <Grid
          item
          xs
        >
          <Typography style={{ textAlign: "left" }} variant="body1">currently set </Typography>
          <br />
          <Typography style={{ textAlign: "left" }} variant="body1">jitsiUrl: {user.rovers[0].jitsiUrl}</Typography>
          <Typography style={{ textAlign: "left" }} variant="body1">roverUrl: {user.rovers[0].roverUrl}</Typography>
          <Typography style={{ textAlign: "left" }} variant="body1">mjpgUrl: {user.rovers[0].mjpgUrl}</Typography>

        </Grid>
        <Grid
          item
          xs
        >
          <form onSubmit={handleSubmitRoverUrl}>
            <TextField
              type="text"
              name="roverUrl"
              className="input"
              value={roverUrl}
              onChange={({ target }) => setRoverUrlInComp(target.value)}
            />
            <Typography variant="body2">
              Please enter the URL of your raspberry
        </Typography>
            <Button type="submit" variant="outlined">
              set
        </Button>
          </form>
          <form onSubmit={handleSubmitJitsiUrl}>
            <TextField
              type="text"
              name="jitsiUrl"
              className="input"
              value={jitsiUrl}
              onChange={({ target }) => setJitsiUrlInComp(target.value)}
            />
                        <Typography variant="body2">
              Please enter the URL of your Jitsi Session
        </Typography>
            <Button type="submit" variant="outlined">
              set
        </Button>

          </form>
          <form onSubmit={handleSubmitMjpgUrl}>
            <TextField
              type="text"
              name="mjpgUrl"
              className="input"
              value={mjpgUrl}
              onChange={({ target }) => setMjpgUrlInComp(target.value)}
            />
                        <Typography variant="body2">
              Please enter the URL of your MJPG Stream
        </Typography>
            <Button type="submit" variant="outlined">
              set
        </Button>

          </form>

        </Grid>
      </Grid>
      <br />
      <Typography
      >
        Set necessary urls to connect with your rover
      </Typography>
    </div>
  )
}

export default UrlForm
