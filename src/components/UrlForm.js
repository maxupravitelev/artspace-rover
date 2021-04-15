import React, { useState } from 'react'

// import material ui
import { TextField, Button, Typography, Grid } from '@material-ui/core'

// init redux and import reducers
import { useDispatch, useSelector } from 'react-redux'
import { setJitsiUrl, setBaseUrl } from '../reducers/urlsReducer'

import { updateUser } from '../reducers/userReducer'



const UrlForm = ({ }) => {
  const [jitsiUrl, setJitsiUrlInComp] = useState('')
  const [baseUrl, setBaseUrlInComp] = useState('')

  let user = useSelector((state) => state.user)

  if (!user) return <div></div>

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (jitsiUrl != '') {
    dispatch(setJitsiUrl(jitsiUrl))
    setJitsiUrlInComp('')
    user.rovers[0].jitsiUrl = jitsiUrl
    dispatch(updateUser(user))

   }
   if (baseUrl != '') {
    dispatch(setBaseUrl(baseUrl))
    setBaseUrlInComp('')
    user.rovers[0].roverUrl = baseUrl
    dispatch(updateUser(user))
 
  }
  

  }



  return (
    <div className="urlForm">
      <Typography
        variant="h3"
        style={{ marginBottom: "1em", backgroundColor: "#0B4F6C", color: "#FBFBFF" }}
      >settings</Typography>
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
        </Grid>
        <Grid
          item
          xs
        >

          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="jitsiUrl"
              className="input"
              value={jitsiUrl}
              onChange={({ target }) => setJitsiUrlInComp(target.value)}
            />
            <Button type="submit" variant="outlined">
              set
        </Button>
            <Typography variant="body2">
              Please enter the URL of your Jitsi Session
        </Typography>
            <TextField
              type="text"
              name="baseUrl"
              className="input"
              value={baseUrl}
              onChange={({ target }) => setBaseUrlInComp(target.value)}
            />
            <Typography variant="body2">
              Please enter the URL of your raspberry
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
        Save necessary urls to connect with your rover
      </Typography>
    </div>
  )
}

export default UrlForm
