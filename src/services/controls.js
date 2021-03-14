import openSocket from 'socket.io-client'

// const socket = openSocket("http://localhost:5000/");
const socket = openSocket('http://192.168.178.51:6475/')

const KEY_LEFT_ARROW = 37
const KEY_UP_ARROW = 38
const KEY_RIGHT_ARROW = 39
const KEY_DOWN_ARROW = 40

let power = 0
let direction = 1

let left_direction = -1
let neutral_direction = 0
let right_direction = 1


export const keyPressed = (evt) => {
  console.log(evt.keyCode)
  if (evt.keyCode == KEY_UP_ARROW) {
    power = 60
    direction = 1
    socket.emit('power', [power, direction])
    return "forward"
  }
  if (evt.keyCode == KEY_LEFT_ARROW) {
    socket.emit('steer', left_direction)
    return "left"
  }
  if (evt.keyCode == KEY_RIGHT_ARROW) {
    socket.emit('steer', right_direction)
    return "right"
  }
  if (evt.keyCode == KEY_DOWN_ARROW) {
    power = 60
    direction = -1
    socket.emit('power', [power, direction])
    return "backward"
  }
}

export const keyReleased = (evt) => {
  if (evt.keyCode == KEY_UP_ARROW) {
    power = 0
    socket.emit('power', [power, direction])
  }
  if (evt.keyCode == KEY_LEFT_ARROW) {
    socket.emit('steer', neutral_direction)
  }
  if (evt.keyCode == KEY_RIGHT_ARROW) {
    socket.emit('steer', neutral_direction)
  }
  if (evt.keyCode == KEY_DOWN_ARROW) {
    power = 0
    // direction = -1
    socket.emit('power', [power, direction])
  }
}

// document.addEventListener('keydown', keyPressed)
// document.addEventListener('keyup', keyReleased)

