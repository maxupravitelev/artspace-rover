import React from 'react'
import { Button, Typography } from '@material-ui/core'

import { useSelector } from 'react-redux'

// import { keyPressed, keyReleased} from '../services/controls' 
import openSocket from 'socket.io-client'

// return component for navigating rover
const Navigation = ({  }) => {

  let streamUrl = useSelector((state) => state.urls.streamUrl)
  console.log(streamUrl)
// const socket = openSocket("http://localhost:5000/");
const socket = openSocket('http://192.168.178.50:6475/')

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
  console.log(evt.keyCode)
  if (evt.keyCode == KEY_UP_ARROW) {
    power = 100
    direction = 1
    console.log(power_fired)
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


 const keyReleased = (evt) => {
  if (evt.keyCode == KEY_UP_ARROW) {
    power = 0
    socket.emit('power', [power, direction])
    power_fired = false
  }
  if (evt.keyCode == KEY_LEFT_ARROW) {
    socket.emit('steer', neutral_direction)
    steering_fired = false
  }
  if (evt.keyCode == KEY_RIGHT_ARROW) {
    socket.emit('steer', neutral_direction)
    steering_fired = false
  }
  if (evt.keyCode == KEY_DOWN_ARROW) {
    power = 0
    // direction = -1
    socket.emit('power', [power, direction])
    power_fired = false
  }
}

  document.addEventListener('keydown', keyPressed)
  document.addEventListener('keyup', keyReleased)

  return (
    <div className="app">

    </div>
  )
}

export default Navigation
