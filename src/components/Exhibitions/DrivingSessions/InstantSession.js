import React from 'react'
import StatusLight from './StatusLight'

import { useDispatch, useSelector } from 'react-redux'
import { setSessionState } from '../../../reducers/sessionReducer'


// import material ui components & styles
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../../styles'

import socketService from '../../../services/socket'
import visitorsService from '../../../services/visitors'


const useStyles = makeStyles(styles)


const InstantSession = ({  }) => {

  const classes = useStyles()

  const dispatch = useDispatch()

  let exhibitions = useSelector((state) => state.exhibitions)

  // let roverUrl = useSelector((state) => state.roverUrl)
  let roverUrl = exhibitions[0].rovers[0].roverUrl
  // let socket = useSelector((state) => state.socket)

  // fetch set streaming mode from exhibition profile (populated with a rover profile)
  // let user = useSelector((state) => state.user)
  let streamingModeInProfile = exhibitions[0].rovers[0].streamingMode

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(setSessionState('session started'))
    const checkIfSessionAvailable = await visitorsService.getSessionState()

    if (checkIfSessionAvailable != 'session started') {
      dispatch(setSessionState({
        state: 'session started'
      })
      )
    }

    if (streamingModeInProfile != 'demo') {
      socketService.initSocket(roverUrl)
    }
  }

  return (
    <div className={classes.elevatedDiv}>
      <Typography variant="h5">instant ride</Typography>
      <StatusLight />
      <Button
        // type="submit"
        onClick={handleSubmit}
        variant="outlined"
      >
        start
      </Button>
    </div>
  )
}

export default InstantSession
