import openSocket from 'socket.io-client'

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

let fired = false

export const keyPressed = (evt) => {
  console.log(evt.keyCode)
  if (evt.keyCode == KEY_UP_ARROW) {
    power = 100
    direction = 1
    console.log(fired)
    if (fired == false) {
      socket.emit('power', [power, direction])
      fired = true
    }
  }
  if (evt.keyCode == KEY_LEFT_ARROW) {
    socket.emit('steer', left_direction)
  }
  if (evt.keyCode == KEY_RIGHT_ARROW) {
    socket.emit('steer', right_direction)
  }
  if (evt.keyCode == KEY_DOWN_ARROW) {
    power = 60
    direction = -1
    if (fired == false) {
    socket.emit('power', [power, direction])
    fired = true
    }
  }
}

export const keyReleased = (evt) => {
  if (evt.keyCode == KEY_UP_ARROW) {
    power = 0
    socket.emit('power', [power, direction])
    fired = false
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
    fired = false
  }
}

// document.addEventListener('keydown', keyPressed)
// document.addEventListener('keyup', keyReleased)

