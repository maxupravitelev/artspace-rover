import React, { useState, useEffect } from 'react'

// import { socket } from '../services/socket'

import { useSelector } from 'react-redux'

const SteeringButtons = ({}) => {
  let socket = useSelector((state) => state.socket)

  let left_direction = -1
  let neutral_direction = 0
  let right_direction = 1

  const handleMouseDown = (event) => {
    console.log(event.type)
    if (event.target.id == 'upButton') {
      console.log('forward')
      let direction = 1
      let power = 40
      socket.emit('power', [power, direction])
    }
    if (event.target.id == 'downButton') {
      console.log('backward')
      let direction = -1
      let power = 40
      socket.emit('power', [power, direction])
    }
    if (event.target.id == 'leftButton') {
      console.log('left')

      socket.emit('steer', left_direction)
    }
    if (event.target.id == 'rightButton') {
      console.log('right')
      socket.emit('steer', right_direction)
    }
  }

  const handleMouseUp = (event) => {
    event.preventDefault()
    
    if (event.target.id == 'upButton') {
      let direction = 0
      let power = 0
      socket.emit('power', [power, direction])
    }
    if (event.target.id == 'downButton') {
      let direction = 0
      let power = 0
      socket.emit('power', [power, direction])
    }
    if (event.target.id == 'leftButton') {
      socket.emit('steer', neutral_direction)
    }
    if (event.target.id == 'rightButton') {
      socket.emit('steer', neutral_direction)
    }
  }

  return (
    <div>
      <button
        id="upButton"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        up
      </button>
      <div>
        <button
          id="leftButton"
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}

        >
          left
        </button>
        <button
          id="rightButton"
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          right
        </button>
      </div>
      <button
        id="downButton"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        down
      </button>
    </div>
  )
}

export default SteeringButtons
