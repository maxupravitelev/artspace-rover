import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { TextField, Button, Typography } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'

import { getAllUsers } from '../../reducers/usersReducer'
import { setRoverUrl, setJitsiUrl } from '../../reducers/urlsReducer'

import { setNotification } from '../../reducers/notificationReducer'
import { loginUser, logoutUser, setUser } from '../../reducers/userReducer'

import Togglable from '../../components/Togglable'
import Notification from '../../components/Notification'
import Settings from '../../components/Backend/Settings'

import pagesTexts from '../../text/pages'

import urlsService from '../../services/urls'
import timeslotsService from '../../services/timeslots'

// import material ui components & styles
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

const useStyles = makeStyles(styles)

const Backend = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  let user = useSelector((state) => state.user)

  if (user === 'init') {
    user = null
  }

  // check if user is stored locally
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedRoverAppUser')
    if (loggedUserJSON) {
      const userLocal = JSON.parse(loggedUserJSON)
      dispatch(setUser(userLocal))
      dispatch(setJitsiUrl(userLocal.rovers[0].jitsiUrl))
      dispatch(setRoverUrl(userLocal.rovers[0].roverUrl))

      urlsService.setToken(userLocal.token)
      timeslotsService.setToken(userLocal.token)

    }
  }, [dispatch])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      dispatch(
        loginUser({
          username,
          password,
        })
      )

      dispatch(setNotification(`'${username}' logged in`, 3, 'success'))
    } catch (exception) {
      console.log(exception)
      dispatch(setNotification('Wrong credentials', 3, 'error'))
    }
  }

  // render login form if user is not logged in
  const loginForm = () => {
    return (
      <div className={classes.elevatedDiv}>
        <div>
          <Notification />
          <Togglable buttonLabel="login">
            <form onSubmit={handleLogin}>
              <div>
                <TextField
                  id="username"
                  type="text"
                  value={username}
                  name="Username"
                  label="username"
                  onChange={({ target }) => {
                    setUsername(target.value)
                  }}
                />
              </div>
              <div>
                <TextField
                  id="password"
                  type="password"
                  value={password}
                  name="Password"
                  label="Password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                id="login-button"
                type="submit"
              >
                login
              </Button>
            </form>
          </Togglable>
        </div>
      </div>
    )
  }

  return (
    <div>

      {user === null ? (
        loginForm()
      ) : (
        <div className={classes.elevatedDiv}>
          <Typography
            variant="h3"
            className={classes.sectionHeadline}
          >settings</Typography>
          <Notification />
          <div className={classes.elevatedDiv}>
          <Typography>{pagesTexts.backendLogin.ifLoggedIn(user.username)}</Typography>
          <Button
            onClick={() => { dispatch(logoutUser()) }}
            variant="outlined"
          >
            logout</Button>
            </div>
          <Settings />
        </div>


      )}
    </div>
  )
}

// BackendLogin.propTypes = {
//   handleLogin: PropTypes.func.isRequired,
//   handleUsernameChange: PropTypes.func.isRequired,
//   handlePasswordChange: PropTypes.func.isRequired,
//   username: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// }

export default Backend
