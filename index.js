// const socket = io("http://localhost:5000/");
const socket = io('http://192.168.178.50:5000/')

let messages = document.getElementById('messages')
let form = document.getElementById('form')
let input = document.getElementById('input')

// // init game loop
// let currentTime = 0
// let deltaTime = 0
// let pastTime = new Date().getTime()
// let framesPerSecond = 1 / 10

// // start gameloop
// const gameloop = () => {
//     currentTime = new Date().getTime()
//     deltaTime = deltaTime + Math.min(1, (currentTime - pastTime) / 1000) // Source: https://codeincomplete.com/articles/javascript-game-foundations-the-game-loop/
//     while (deltaTime > framesPerSecond) {
//       deltaTime = deltaTime - framesPerSecond
//       inputHandling()
//     }
//     pastTime = currentTime
//     requestAnimationFrame(gameloop)

// }

// const inputHandling = () => {
//   // console.log(power)
//   // document.addEventListener("keydown", keyPressed);
//   // document.addEventListener("keyup", keyReleased);
// }

// requestAnimationFrame(gameloop)

const KEY_LEFT_ARROW = 37
const KEY_UP_ARROW = 38
const KEY_RIGHT_ARROW = 39
const KEY_DOWN_ARROW = 40

let power = 0
let direction = 1

let left_direction = -1
let neutral_direction = 0
let right_direction = 1



const keyPressed = (evt) => {
  if (evt.keyCode == KEY_UP_ARROW) {
    power = 60
    direction = 1
    socket.emit('power', [power, direction])
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
    socket.emit('power', [power, direction])
  }
}

const keyReleased = (evt) => {
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

document.addEventListener('keydown', keyPressed)
document.addEventListener('keyup', keyReleased)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (input.value) {
    socket.emit('message', input.value)
    input.value = ''
  }
})

socket.on('message', (msg) => {
  let item = document.createElement('li')
  console.log(power)
  item.textContent = msg
  messages.appendChild(item)
  window.scrollTo(0, document.body.scrollHeight)
})

socket.on('power', (msg) => {
  // inputHandling()
  conosle.log(power)
  msg = power
  item.textContent = msg
  messages.appendChild(item)
  // window.scrollTo(0, document.body.scrollHeight);
})
