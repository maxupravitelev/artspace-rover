import React, { useState, useEffect } from 'react'

// import { socket } from '../services/socket'

import { useSelector } from 'react-redux'

// init redux and import reducers
import { useDispatch } from 'react-redux'
import {  setSteeringDirections } from '../reducers/directionsReducer'

// Hook
const useKeyPress = (targetKeyCode) => {
  // State for keeping track of whether key is pressed
  const [keyPressedHook, setKeyPressed] = useState(false)
  // const [drivingDirection, setDrivingDirection] = useState(0)
  // const [steeringDirection, setSteeringDirection] = useState(0)

  const dispatch = useDispatch()

  let socket = useSelector((state) => state.socket)
//   console.log(socket)
  //   console.log(streamUrl)
  // const socket = openSocket("http://localhost:5000/");
  // const socket = openSocket('http://192.168.178.50:6475/')

  const KEY_LEFT_ARROW = 37
  const KEY_UP_ARROW = 38
  const KEY_RIGHT_ARROW = 39
  const KEY_DOWN_ARROW = 40

  let power = 0
  let direction = 1

  let left_direction = -1
  let neutral_direction = 0
  let right_direction = 1

  let power_fired = false
  let steering_fired = false

  const keyPressed = (evt) => {
    evt.preventDefault()
      console.log(evt.keyCode)
    if (evt.keyCode == KEY_UP_ARROW) {
      power = 60
      direction = 1
      // console.log(power_fired)
      if (power_fired == false) {
        socket.emit('power', [power, direction])
        power_fired = true
      }
    }
    if (evt.keyCode == KEY_LEFT_ARROW) {
      if (steering_fired == false) {
        socket.emit('steer', left_direction)
        steering_fired = true
      }
    }
    if (evt.keyCode == KEY_RIGHT_ARROW) {
      if (steering_fired == false) {
        socket.emit('steer', right_direction)
        steering_fired = true
      }
    }
    if (evt.keyCode == KEY_DOWN_ARROW) {
      power = 60
      direction = -1
      if (power_fired == false) {
        socket.emit('power', [power, direction])
        power_fired = true
      }
    }
  }

  const keyReleased = async (evt) => {
    evt.preventDefault()
    if (evt.keyCode == KEY_UP_ARROW) {
      power = 0
      socket.emit('power', [power, direction])
      power_fired = false
    }
    if (evt.keyCode == KEY_LEFT_ARROW) {
      let currentSteeringDirectionInBackend = await socket.emit('steer', neutral_direction, (data) => {
        setSteeringDirection(data)
        
      })
      // setSteeringDirection("-20")
      let steeringDirection = -20
      console.log(steeringDirection)
      dispatch(setSteeringDirections( steeringDirection ))
      steering_fired = false
    }
    if (evt.keyCode == KEY_RIGHT_ARROW) {
      let test = await socket.emit('steer', neutral_direction)
      console.log(test)
      steering_fired = false
    }
    if (evt.keyCode == KEY_DOWN_ARROW) {
      power = 0
      // direction = -1
      socket.emit('power', [power, direction])
      power_fired = false
    }
  }

  // If pressed key is our target key then set to true
  const downHandler = (evt) => {
    if (evt.keyCode === targetKeyCode) {
      keyPressed(evt)
      setKeyPressed(true)
    }
  }

  // If released key is our target key then set to false
  const upHandler = (evt) => {
    if (evt.keyCode === targetKeyCode) {
      keyReleased(evt)
      setKeyPressed(false)
    }
  }

  // Add event listeners
  useEffect(() => {
    document.addEventListener('keydown', downHandler)
    document.addEventListener('keyup', upHandler)
    // Remove event listeners on cleanup
    return () => {
      document.removeEventListener('keydown', downHandler)
      document.removeEventListener('keyup', upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return keyPressedHook
}

export default useKeyPress
