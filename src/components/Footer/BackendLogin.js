import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  TextField, Button
} from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'

import { getAllUsers } from '../../reducers/usersReducer'


const BackendLogin = () => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()

  let user = "temp"

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  // let user = useSelector((state) => state.user)

  // console.log(user)

  // if (user === 'init') {
  //   user = null
  // }

  // check if user is stored locally
  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
  //   if (loggedUserJSON) {
  //     const userLocal = JSON.parse(loggedUserJSON)
  //     dispatch(setUser(userLocal))
  //     blogService.setToken(userLocal.token)
  //   }
  // }, [dispatch])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      dispatch(
        loginUser({
          username,
          password,
        })
      )

      dispatch(setNotification(`'${username}' logged in`, 3, 'green'))
    } catch (exception) {
      dispatch(setNotification('Wrong credentials', 3, 'red'))
    }
  }

  // render login form if user is not logged in
  const loginForm = () => {
    return (
      <div>
        <div>
          {/* <Notification /> */}
          <Togglable buttonLabel="login">
          <form onSubmit={handleLogin}>
        <div>
          <TextField
            id="username"
            type="text"
            value={username}
            name="Username"
            label="username"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <TextField
            id="password"
            type="password"
            value={password}
            name="Password"
            label="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <Button variant="contained" color="primary" id="login-button" type="submit">login</Button>
      </form>
          </Togglable>
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <h1>Login</h1>

      {user === null ? (
            loginForm()
          ) : (

            <div>{user}</div>
          )}
    </div>
  )
}

BackendLogin.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default BackendLogin
