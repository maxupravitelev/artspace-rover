import React, { useState, useEffect } from 'react'

// import { socket } from '../services/socket'

import { useSelector } from 'react-redux'

// init redux and import reducers
import { useDispatch } from 'react-redux'
import {  setSteeringDirections } from '../reducers/directionsReducer'
import {  setDrivingDirections } from '../reducers/directionsReducer'

import socketService from '../services/socket'


// Hook
const useKeyPress = (targetKeyCode) => {
  // State for keeping track of whether key is pressed
  const [keyPressedHook, setKeyPressed] = useState(false)

  const dispatch = useDispatch()

  // let socket = useSelector((state) => state.socket)
  // let socketUrl = useSelector((state) => state.urls.socketUrl)
  // let demoSocketUrl = 'demo:6475'

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
    socketService.steerRoverPress(evt.keyCode)
  }

  const keyReleased =  (evt) => {
    evt.preventDefault()
    socketService.steerRoverRelease(evt.keyCode)

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

// Built upon: https://usehooks.com/useKeyPress/
