import React, { useState, useEffect } from 'react'

// import { socket } from '../services/socket'

import { useSelector } from 'react-redux'

import { Button } from '@material-ui/core'

import socketService from '../../services/socket'

const SteeringButtons = ({}) => {
  // let socket = useSelector((state) => state.socket)

  const handleMouseDown = (event) => {
    socketService.steerRoverPress(event.currentTarget.id)
  }

  const handleMouseUp = (event) => {
    event.preventDefault()
    socketService.steerRoverRelease(event.currentTarget.id)
  }

  return (
    <div className="dashboard">
      <Button
        id="upButton"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        variant="outlined"
        size="large"
      >
        up
      </Button>
      <div>
        <Button
          id="leftButton"
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          variant="outlined"
          size="large"
        >
          left
        </Button>
        <Button
          id="rightButton"
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          variant="outlined"
          size="large"
        >
          right
        </Button>
      </div>
      <Button
        id="downButton"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        variant="outlined"
        size="large"
      >
        down
      </Button>
    </div>
  )
}

export default SteeringButtons
