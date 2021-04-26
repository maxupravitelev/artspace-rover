import React, { useState, useEffect } from 'react'

// import { socket } from '../services/socket'

import { useSelector } from 'react-redux'

import { Button, Typography } from '@material-ui/core'

import socketService from '../../services/socket'

const RoboArmSteeringButtons = ({}) => {
  // let socket = useSelector((state) => state.socket)

  const handleMouseDown = (event) => {
    socketService.steerRoboArmPress(event.currentTarget.id)
  }

  const handleMouseUp = (event) => {
    event.preventDefault()
    socketService.steerRoboArmRelease(event.currentTarget.id)
  }

  return (
    <div className="dashboard">
      <Typography>X</Typography>
      <Button
        id="xButtonMinus"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        variant="outlined"
        size="small"
      >
        -
      </Button>
      <Button
        id="xButtonPlus"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        variant="outlined"
        size="small"
      >
        +
      </Button>
      <div>
      <Typography>X</Typography>
      <Button
        id="yButtonMinus"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        variant="outlined"
        size="small"
      >
        -
      </Button>
      <Button
        id="yButtonPlus"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        variant="outlined"
        size="small"
      >
        +
      </Button>

      </div>
      <Typography>X</Typography>
      <Button
        id="zButtonMinus"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        variant="outlined"
        size="small"
      >
        -
      </Button>
      <Button
        id="zButtonPlus"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        variant="outlined"
        size="small"
      >
        +
      </Button>
    </div>
  )
}

export default RoboArmSteeringButtons
