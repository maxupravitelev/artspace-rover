import React, { useState } from 'react'

// init redux and import reducers
import { useDispatch, useSelector } from 'react-redux'
import { setJitsiUrl, setRoverUrl, setMjpgUrl } from '../../../reducers/urlsReducer'

import { updateUser } from '../../../reducers/userReducer'

import urlsService from '../../../services/urls'

// import component text elements
import componentsTexts from '../../../text/components'

// import material ui components & styles
import { TextField, Button, Typography, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../../styles'

const useStyles = makeStyles(styles)

const UrlForm = ({ }) => {
  const [roverUrl, setRoverUrlInComp] = useState('')
  const [jitsiUrl, setJitsiUrlInComp] = useState('')
  const [mjpgUrl, setMjpgUrlInComp] = useState('')

  const classes = useStyles()

    // fetch set streaming mode from exhibition profile (populated with a rover profile)
    let exhibitions = useSelector((state) => state.exhibitions)

  if (!exhibitions) return <div></div>

  const dispatch = useDispatch()

  const handleSubmitRoverUrl = async (e) => {
    e.preventDefault()

    dispatch(setRoverUrl(roverUrl))
    setRoverUrlInComp('')
    exhibitions[0].rovers[0].roverUrl = roverUrl
    dispatch(updateUser(user))
    urlsService.updateRoverUrl(roverUrl, exhibitions[0].rovers[0]._id)

  }

  const handleSubmitJitsiUrl = async (e) => {
    e.preventDefault()

    dispatch(setJitsiUrl(jitsiUrl))
    setJitsiUrlInComp('')
    exhibitions[0].rovers[0].jitsiUrl = jitsiUrl
    dispatch(updateUser(user))
    urlsService.updateJitsiUrl(jitsiUrl, exhibitions[0].rovers[0]._id)

  }

  const handleSubmitMjpgUrl = async (e) => {
    e.preventDefault()

    dispatch(setMjpgUrl(mjpgUrl))
    setMjpgUrlInComp('')
    exhibitions[0].rovers[0].mjpgUrl = mjpgUrl
    dispatch(updateUser(user))
    urlsService.updateMjpgUrl(mjpgUrl, exhibitions[0].rovers[0]._id)

  }

  return (
    <div className={classes.elevatedDiv}>
      <Typography
        variant="h3"
        className={classes.sectionHeadline}
      >{componentsTexts.Backend.UrlForm.headline}</Typography>
      <Grid
        container
      >
        <Grid item xs={12} sm={6}>
        <div className={classes.elevatedDiv}>
            <Typography variant="h5">{componentsTexts.Backend.UrlForm.description}</Typography>
            <form onSubmit={handleSubmitRoverUrl}>
              <TextField
                type="text"
                name="roverUrl"
                className="input"
                value={roverUrl}
                onChange={({ target }) => setRoverUrlInComp(target.value)}
              />
              <Typography variant="body2">
                {componentsTexts.Backend.UrlForm.requestRaspUrl}
              </Typography>
              <Button type="submit" variant="outlined">set</Button>
            </form>
            <form onSubmit={handleSubmitJitsiUrl}>
              <TextField
                type="text"
                name="jitsiUrl"
                className="input"
                value={jitsiUrl}
                onChange={({ target }) => setJitsiUrlInComp(target.value)}
              />
              <Typography variant="body2">{componentsTexts.Backend.UrlForm.requestJitsiUrl}</Typography>
              <Button type="submit" variant="outlined">set</Button>
            </form>
            <form onSubmit={handleSubmitMjpgUrl}>
              <TextField
                type="text"
                name="mjpgUrl"
                className="input"
                value={mjpgUrl}
                onChange={({ target }) => setMjpgUrlInComp(target.value)}
              />
              <Typography variant="body2">{componentsTexts.Backend.UrlForm.requestMjpgUrl}</Typography>
              <Button type="submit" variant="outlined">set</Button>
            </form>
          </div> 
        </Grid>
        <Grid item xs={12} sm={6}>
        <div className={classes.elevatedDiv}>
            <Typography style={{ textAlign: "left" }} variant="h5">{componentsTexts.Backend.UrlForm.currently}</Typography>
            <br />
            <Typography style={{ textAlign: "left" }} variant="body1"><b>jitsiUrl:</b> {exhibitions[0].rovers[0].jitsiUrl}</Typography>
            <Typography style={{ textAlign: "left" }} variant="body1"><b>roverUrl:</b> {exhibitions[0].rovers[0].roverUrl}</Typography>
            <Typography style={{ textAlign: "left" }} variant="body1"><b>mjpgUrl:</b> {exhibitions[0].rovers[0].mjpgUrl}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default UrlForm
