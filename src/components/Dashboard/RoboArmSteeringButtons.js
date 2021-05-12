import React from 'react'

import { Button, Typography, Grid } from '@material-ui/core'

import socketService from '../../services/socket'

import componentsTexts from '../../text/components'

// import material ui components & styles
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

const useStyles = makeStyles(styles)


const RoboArmSteeringButtons = ({ }) => {

  const classes = useStyles()

  const handleMouseDown = (event) => {
    socketService.steerRoboArmPress(event.currentTarget.id)
  }

  const handleMouseUp = (event) => {
    event.preventDefault()
    socketService.steerRoboArmRelease(event.currentTarget.id)
  }

  return (
    <div className={classes.dashboard}>
      <Grid
        container
        direction="row"
        justify="space-around"
      // alignItems="stretch"
      >
        <Grid item xs={12} sm={4}>
          <Typography>X</Typography>
          <Button
            id="xButtonMinus"
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            variant="outlined"
            size="small"
          >-</Button>
          <Button
            id="xButtonPlus"
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            variant="outlined"
            size="small"
          >+</Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography>Y</Typography>
          <Button
            id="yButtonMinus"
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            variant="outlined"
            size="small"
          >-</Button>
          <Button
            id="yButtonPlus"
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            variant="outlined"
            size="small"
          >+</Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography>Z</Typography>
          <Button
            id="zButtonMinus"
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            variant="outlined"
            size="small"
          >-</Button>
          <Button
            id="zButtonPlus"
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            variant="outlined"
            size="small"
          >+</Button>
        </Grid>
      </Grid>
      <br />
      <Typography>{componentsTexts.Dashboard.RoboArmSteeringButtons.description}</Typography>
    </div>
  )
}

export default RoboArmSteeringButtons
