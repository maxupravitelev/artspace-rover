import React, { useState } from 'react'

// import material ui
import { TextField, Button, Typography, Grid } from '@material-ui/core'

// init redux and import reducers
import { useDispatch, useSelector } from 'react-redux'
import { setJitsiUrl, setBaseUrl } from '../reducers/urlsReducer'
import { setSocket } from '../reducers/socketReducer'



const UrlForm = ({ }) => {
  const [urls, setUrls] = useState({
    jitsiUrl: '',
    baseUrl: '',
  })

  let user = useSelector((state) => state.user)

  if (!user) return <div></div>

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(setBaseUrl(urls.baseUrl))
    dispatch(setJitsiUrl(urls.jitsiUrl))


  }

  const handleValue = (e) => {
    let name = e.target.name
    let newValue = e.target.value

    setUrls({
      ...urls,
      [name]: newValue,
    })
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
          <Typography style={{textAlign: "left"}} variant="body1">currently set </Typography>
          <br />
          <Typography style={{textAlign: "left"}} variant="body1">jitsiUrl: {user.rovers[0].jitsiUrl}</Typography>
          <Typography style={{textAlign: "left"}} variant="body1">roverUrl: {user.rovers[0].roverUrl}</Typography>
        </Grid>
        <Grid
          item
          xs
        >
          <Typography
          >
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
        </Grid>
      </Grid>
    </div>
  )
}

export default UrlForm
